import { Pressable, Text, View } from "@components/Themed";
import { Camera, CameraType, FlashMode, PermissionStatus } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Alert, Image, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function PostPage() {
	const [cameraPermissionStatus, setCameraPermissionStatus] = useState(
		PermissionStatus.UNDETERMINED
	);
	const [image, setImage] = useState("");
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
				const data = await cameraRef.current.takePictureAsync();
				console.log("DATA: ", data);
				setImage(data.uri);
			} catch (e) {
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
			{!image ? (
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
						<Text>View</Text>
						<View style={styles.captureTypeContainer}>
							<Text>Normal</Text>
							<Text>Video</Text>
						</View>
						<Text onPress={toggleCameraType}>Flip</Text>
					</View>
				</>
			) : (
				<Image source={{ uri: image }} style={styles.camera} />
			)}
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
		marginTop: "8%",
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
