import { Pressable, Text, View } from "@components/Themed";
import { Camera, CameraType, FlashMode, PermissionStatus } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Alert, Image, StyleSheet } from "react-native";

export default function PostPage() {
	const [cameraPermissionStatus, setCameraPermissionStatus] = useState(
		PermissionStatus.UNDETERMINED
	);
	const [image, setImage] = useState("");
	const [type, setType] = useState(CameraType.back);
	const [flash, setFlash] = useState(FlashMode.off);
	const cameraRef = useRef<Camera | null>(null);

	useEffect(() => {
		(async () => {
			MediaLibrary.requestPermissionsAsync();
			const cameraStatus = await Camera.requestCameraPermissionsAsync();
			setCameraPermissionStatus(cameraStatus.status);
		})();
	}, []);

	// if (cameraPermissionStatus !== PermissionStatus.GRANTED) {
	// 	Alert.alert(
	// 		"No Permission",
	// 		"You need camera permissions to continue.",
	// 		[{ text: "OK", onPress: () => console.log("OK Pressed") }]
	// 	);
	// 	return <></>;
	// }

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

	const toggleCameraType = () => {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	};

	return (
		<View style={styles.container}>
			{!image ? (
				<Camera
					style={styles.camera}
					ref={cameraRef}
					type={type}
					flashMode={flash}
				></Camera>
			) : (
				<Image source={{ uri: image }} style={styles.camera} />
			)}
			<View style={styles.bottomContainer}>
				<Pressable
					style={styles.takePictureButton}
					onPress={takePicture}
				>
					<Text>Take a Picture</Text>
				</Pressable>
			</View>
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
		width: "100%",
		borderRadius: 20,
	},
	bottomContainer: {
		height: "10%",
	},
	takePictureButton: {
		borderRadius: 100,
		width: "10%",
	},
});
