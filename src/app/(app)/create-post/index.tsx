import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useMedia, useMediaActions } from "@stores/mediaStore";
import {
	CameraPictureOptions,
	CameraRecordingOptions,
	CameraType,
	CameraView,
	FlashMode,
	useCameraPermissions,
	useMicrophonePermissions,
} from "expo-camera";
import { Link, router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreatePostPage() {
	const media = useMedia();
	const { addMedia } = useMediaActions();
	const [facing, setFacing] = useState<CameraType>("front");
	const [flash, setFlash] = useState<FlashMode>("off");
	const [mode, setMode] = useState<"picture" | "video">("picture");
	const [isRecording, setIsRecording] = useState(false);
	const [cameraPermission, requestCameraPermission] = useCameraPermissions();
	const [microphonePermission, requestMicrophonePermission] =
		useMicrophonePermissions();
	const cameraRef = useRef<CameraView>(null);

	const getPermissions = async () => {
		if (!cameraPermission || !cameraPermission.granted) {
			await requestCameraPermission();
		}

		if (!microphonePermission || !microphonePermission.granted) {
			await requestMicrophonePermission();
		}
	};

	useEffect(() => {
		getPermissions();
	}, []);

	/**
	 * Ask user for permission to use camera and microphone
	 */
	if (!cameraPermission || !microphonePermission) {
		return <View />;
	}

	if (!cameraPermission.granted || !microphonePermission.granted) {
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: "center" }}>
					We need your permissions to show the camera
				</Text>
				<Button onPress={getPermissions}>
					<Text>Ask for Permission</Text>
				</Button>
			</View>
		);
	}

	/**
	 * Capture picture function
	 */
	const takePicture = async () => {
		if (cameraRef.current) {
			try {
				const options: CameraPictureOptions = {
					base64: false,
					exif: false,
				};
				const image = await cameraRef.current.takePictureAsync(options);
				if (image) {
					addMedia(image);
				}
			} catch (e) {
				Alert.alert("Failed to take picture", "Please try again", [
					{ text: "OK" },
				]);
				console.error(e);
			}
		}
	};

	/**
	 * Start recording video
	 */
	const startRecording = async () => {
		setIsRecording(true);
		if (cameraRef.current) {
			try {
				const options: CameraRecordingOptions = {
					maxDuration: 5,
				};
				const video = await cameraRef.current.recordAsync(options);
				if (video) {
					addMedia(video);
				}
			} catch (e) {
				Alert.alert("Failed to take video", "Please try again", [
					{ text: "OK" },
				]);
				console.error(e);
			}
		}
		setIsRecording(false);
	};

	/**
	 * Stop recording video
	 */
	const stopRecording = async () => {
		if (cameraRef.current) {
			cameraRef.current.stopRecording();
			setIsRecording(false);
		}
	};

	/**
	 * Toggle flash mode (on/off)
	 */
	const toggleFlashMode = () => {
		setFlash((current) => (current === "off" ? "on" : "off"));
	};

	/**
	 * Toggle camera type (front/back)
	 */
	const toggleCameraType = () => {
		setFacing((current) => (current === "back" ? "front" : "back"));
	};

	return (
		<SafeAreaView style={styles.container}>
			<>
				<CameraView
					ref={cameraRef}
					style={styles.camera}
					facing={facing}
					flash={flash}
					videoQuality="1080p"
					mode={mode}
				>
					<View style={styles.captureSettingsContainer}>
						<Button onPress={() => router.back()}>
							<Ionicons
								name="close"
								size={32}
								color={Styles.colors.white.primary}
							/>
						</Button>
						<Button onPress={toggleFlashMode}>
							<Ionicons
								name={flash === "on" ? "flash" : "flash-off"}
								size={32}
								color={Styles.colors.white.primary}
							/>
						</Button>
						<Button
							onPress={() => router.push("/create-post/create")}
						>
							<Ionicons
								name="chevron-forward"
								size={32}
								color={Styles.colors.white.primary}
							/>
						</Button>
					</View>
					<Button
						style={styles.takePictureButton}
						onPress={
							mode === "picture"
								? takePicture
								: isRecording
									? stopRecording
									: startRecording
						}
					>
						<View style={styles.circle1}>
							<View style={styles.circle2}>
								<View
									style={[
										styles.circle3,
										{
											backgroundColor:
												mode === "picture"
													? Styles.colors.white
															.primary
													: "red",
											borderRadius: isRecording
												? 10
												: 27.5,
										},
									]}
								></View>
							</View>
						</View>
					</Button>
				</CameraView>
				<View style={styles.bottomContainer}>
					<Link href="/create-post/media" asChild>
						<Button style={styles.viewMediaContainer}>
							<MaterialCommunityIcons
								name="cards-outline"
								size={36}
								color={Styles.colors.black.primary}
							/>
							{media.length > 0 && (
								<View style={styles.imageCountBadge}>
									<Text style={styles.imageCountText}>
										{media.length}
									</Text>
								</View>
							)}
						</Button>
					</Link>

					{/* TODO: VIDEO RECORDING FUNCTIONALITY */}
					<View style={styles.captureTypeContainer}>
						<Button onPress={() => setMode("picture")}>
							<Text
								style={[
									styles.captureTypeText,
									{
										fontWeight:
											mode === "picture"
												? "bold"
												: "normal",
									},
								]}
							>
								Normal
							</Text>
						</Button>
						<Button onPress={() => setMode("video")}>
							<Text
								style={[
									styles.captureTypeText,
									{
										fontWeight:
											mode === "video"
												? "bold"
												: "normal",
									},
								]}
							>
								Video
							</Text>
						</Button>
					</View>
					<Button onPress={toggleCameraType}>
						<Ionicons
							name="camera-reverse-outline"
							size={36}
							color={Styles.colors.black.primary}
						/>
					</Button>
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
		width: 55,
		height: 55,
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
		backgroundColor: Styles.colors.lightgreen.primary,
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
