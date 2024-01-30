import { Pressable, Text, View } from "@components/Themed";
import { Camera, CameraType, FlashMode, PermissionStatus } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Alert, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import useImagesStore from "@stores/useImagesStore";

export default function PostPage() {
	const [cameraPermissionStatus, setCameraPermissionStatus] = useState(
		PermissionStatus.UNDETERMINED
	);
	const { images, addImage } = useImagesStore((state) => {
		return { images: state.images, addImage: state.addImage };
	});
	const [type, setType] = useState(CameraType.back);
	const [flash, setFlash] = useState(FlashMode.off);
	const cameraRef = useRef<Camera | null>(null);

	useEffect(() => {
		const askPermissions = async () => {
			MediaLibrary.requestPermissionsAsync();
			const cameraStatus = await Camera.requestCameraPermissionsAsync();
			setCameraPermissionStatus(cameraStatus.status);

			if (cameraStatus.status !== PermissionStatus.GRANTED) {
				Alert.alert(
					"No Permission",
					"You need camera permissions to continue.",
					[{ text: "OK", onPress: () => router.back() }]
				);
				return <></>;
			}
		};
		askPermissions();
	}, []);

	const takePicture = async () => {
		if (cameraRef.current) {
			try {
				const image = await cameraRef.current.takePictureAsync();
				addImage(image);
			} catch (e) {
				Alert.alert("Failed to take picture", "Please try again", [
					{ text: "OK" },
				]);
				console.log(e);
			}
		}
	};

	const toggleFlashMode = () => {
		setFlash((current) =>
			current === FlashMode.off ? FlashMode.on : FlashMode.off
		);
	};

	const toggleCameraType = () => {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	};

	return (
		<View style={styles.container}>
			<>
				<Camera
					style={styles.camera}
					ref={cameraRef}
					type={type}
					flashMode={flash}
				>
					<View style={styles.captureSettingsContainer}>
						<Text onPress={() => router.back()}>Close</Text>
						<Text onPress={toggleFlashMode}>Flash {flash}</Text>
						<Text>Next</Text>
					</View>
					<Pressable
						style={styles.takePictureButton}
						onPress={takePicture}
					/>
				</Camera>
				<View style={styles.bottomContainer}>
					<Link href="/post/media">
						<Text>View ({images.length})</Text>
					</Link>
					<View style={styles.captureTypeContainer}>
						<Text>Normal</Text>
						<Text>Video</Text>
					</View>
					<Text onPress={toggleCameraType}>Flip</Text>
				</View>
			</>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	camera: {
		flex: 1,
		justifyContent: "space-between",
		width: "100%",
		borderRadius: 20,
	},
	takePictureButton: {
		borderRadius: 40,
		width: 80,
		height: 80,
		marginBottom: "8%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	captureSettingsContainer: {
		backgroundColor: "transparent",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: "12%",
	},
	bottomContainer: {
		width: "100%",
		paddingVertical: 48,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	captureTypeContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 16,
	},
});
