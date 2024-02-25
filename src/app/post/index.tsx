import { Pressable, Text, View } from "react-native";
import { Camera, CameraType, FlashMode, PermissionStatus } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import useImagesStore from "@stores/useImagesStore";
import Styles from "@constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function PostPage() {
	const [, setCameraPermissionStatus] = useState(
		PermissionStatus.UNDETERMINED
	);
	const { images, addImage } = useImagesStore((state) => {
		return { images: state.images, addImage: state.addImage };
	});
	const [type, setType] = useState(CameraType.back);
	const [flash, setFlash] = useState(FlashMode.off);
	const cameraRef = useRef<Camera | null>(null);

	/**
	 * Ask user for permission to use camera
	 */
	useEffect(() => {
		const askPermissions = async () => {
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

	/**
	 * Capture picture function
	 */
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

	/**
	 * Toggle flash mode (on/off)
	 */
	const toggleFlashMode = () => {
		setFlash((current) =>
			current === FlashMode.off ? FlashMode.on : FlashMode.off
		);
	};

	/**
	 * Toggle camera type (front/back)
	 */
	const toggleCameraType = () => {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<>
				<Camera
					style={styles.camera}
					ref={cameraRef}
					type={type}
					flashMode={flash}
				>
					<View style={styles.captureSettingsContainer}>
						<Pressable onPress={() => router.back()}>
							<Ionicons
								name="close"
								size={32}
								color={Styles.colors.white.primary}
							/>
						</Pressable>
						<Pressable onPress={toggleFlashMode}>
							<Ionicons
								name={flash === "on" ? "flash" : "flash-off"}
								size={32}
								color={Styles.colors.white.primary}
							/>
						</Pressable>
						<Pressable onPress={() => router.push("/post/create")}>
							<Ionicons
								name="chevron-forward"
								size={32}
								color={Styles.colors.white.primary}
							/>
						</Pressable>
					</View>
					<Pressable
						style={styles.takePictureButton}
						onPress={takePicture}
					>
						<View style={styles.circle1}>
							<View style={styles.circle2}>
								<View style={styles.circle3}></View>
							</View>
						</View>
					</Pressable>
				</Camera>
				<View style={styles.bottomContainer}>
					<Link href="/post/media">
						<View style={styles.viewMediaContainer}>
							<MaterialCommunityIcons
								name="cards-outline"
								size={36}
								color={Styles.colors.black.primary}
							/>
							{images.length > 0 && (
								<View style={styles.imageCountBadge}>
									<Text style={styles.imageCountText}>
										{images.length}
									</Text>
								</View>
							)}
						</View>
					</Link>

					{/* TODO: VIDEO RECORDING FUNCTIONALITY */}
					<View style={styles.captureTypeContainer}>
						<Text style={styles.captureTypeText}>Normal</Text>
						<Text style={styles.captureTypeText}>Video</Text>
					</View>
					<Pressable onPress={toggleCameraType}>
						<Ionicons
							name="camera-reverse-outline"
							size={36}
							color={Styles.colors.black.primary}
						/>
					</Pressable>
				</View>
			</>
		</SafeAreaView>
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
		width: "90%",
		overflow: "hidden",
		borderRadius: 16,
	},
	captureSettingsContainer: {
		backgroundColor: "transparent",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "6%",
	},
	takePictureButton: {
		marginBottom: "8%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	circle1: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 37.5,
		width: 75,
		height: 75,
		backgroundColor: "rgba(255, 255, 255, 0.3)",
	},
	circle2: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		width: 60,
		height: 60,
		backgroundColor: "rgba(255, 255, 255, 0.3)",
	},
	circle3: {
		borderRadius: 27.5,
		width: 55,
		height: 55,
		backgroundColor: Styles.colors.white.primary,
	},
	viewMediaContainer: {},
	bottomContainer: {
		width: "100%",
		paddingVertical: 48,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	imageCountBadge: {
		position: "absolute",
		top: -12,
		right: -12,
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: Styles.colors.green.primary,
	},
	imageCountText: {
		textAlign: "center",
		color: Styles.colors.white.primary,
	},
	captureTypeContainer: {
		display: "flex",
		flexDirection: "row",
		gap: 16,
	},
	captureTypeText: {
		textTransform: "uppercase",
	},
});
