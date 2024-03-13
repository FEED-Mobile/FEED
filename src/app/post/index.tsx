import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import useMediaStore from "@stores/useMediaStore";
import {
	Camera,
	CameraRecordingOptions,
	CameraType,
	FlashMode,
	PermissionStatus,
} from "expo-camera";
import { Link, router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostPage() {
	const [, setCameraPermissionStatus] = useState(
		PermissionStatus.UNDETERMINED
	);
	const [, setMicrophonePermissionStatus] = useState(
		PermissionStatus.UNDETERMINED
	);
	const { media, addMedia } = useMediaStore((state) => {
		return { media: state.media, addMedia: state.addMedia };
	});
	const [type, setType] = useState(CameraType.back);
	const [flash, setFlash] = useState(FlashMode.off);
	const [captureMode, setCaptureMode] = useState<"camera" | "video">(
		"camera"
	);
	const [isRecording, setIsRecording] = useState(false);
	const cameraRef = useRef<Camera | null>(null);

	/**
	 * Ask user for permission to use camera and microphone
	 */
	useEffect(() => {
		const askPermissions = async () => {
			// Camera permissions
			const cameraStatus = await Camera.requestCameraPermissionsAsync();
			if (cameraStatus.status !== PermissionStatus.GRANTED) {
				Alert.alert(
					"No Permission",
					"You need camera permissions to continue.",
					[{ text: "OK", onPress: () => router.back() }]
				);
				return <></>;
			}

			// Microphone permissions
			const microphoneStatus =
				await Camera.requestMicrophonePermissionsAsync();
			if (microphoneStatus.status !== PermissionStatus.GRANTED) {
				Alert.alert(
					"No Permission",
					"You need microphone permissions to continue.",
					[{ text: "OK", onPress: () => router.back() }]
				);
				return <></>;
			}

			setCameraPermissionStatus(cameraStatus.status);
			setMicrophonePermissionStatus(microphoneStatus.status);
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
				console.log("Adding image...");
				addMedia(image);
				console.log("Added image: ", image);
			} catch (e) {
				Alert.alert("Failed to take picture", "Please try again", [
					{ text: "OK" },
				]);
				console.log(e);
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
					quality: "1080p",
					maxDuration: 5,
					mute: false,
				};
				const video = await cameraRef.current.recordAsync(options);
				addMedia(video);
				setIsRecording(false);
			} catch (e) {
				Alert.alert("Failed to take video", "Please try again", [
					{ text: "OK" },
				]);
				console.log(e);
			}
		}
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
						<Button onPress={() => router.push("/post/create")}>
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
							captureMode === "camera"
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
												captureMode === "camera"
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
				</Camera>
				<View style={styles.bottomContainer}>
					<Link href="/post/media" asChild>
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
						<Button onPress={() => setCaptureMode("camera")}>
							<Text
								style={[
									styles.captureTypeText,
									{
										fontWeight:
											captureMode === "camera"
												? "bold"
												: "normal",
									},
								]}
							>
								Normal
							</Text>
						</Button>
						<Button onPress={() => setCaptureMode("video")}>
							<Text
								style={[
									styles.captureTypeText,
									{
										fontWeight:
											captureMode === "video"
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
