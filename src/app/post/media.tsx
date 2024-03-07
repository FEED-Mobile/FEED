import Styles from "@constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import { isCameraCapturedPicture } from "@lib/utils";
import useMediaStore from "@stores/useMediaStore";
import { ResizeMode, Video } from "expo-av";
import { Pressable, View } from "react-native";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function MediaPage() {
	const { media, removeMedia } = useMediaStore((state) => {
		return { media: state.media, removeMedia: state.removeMedia };
	});

	return (
		<SafeAreaView style={styles.container}>
			{media && (
				<ScrollView>
					<View style={styles.mediaContainer}>
						{media.map((file) => {
							return (
								<View
									key={file.uri}
									style={styles.singleMediaContainer}
								>
									{isCameraCapturedPicture(file) ? (
										<Image
											source={{ uri: file.uri }}
											width={150}
											height={225}
											style={styles.image}
										/>
									) : (
										<Video
											source={{ uri: file.uri }}
											useNativeControls
											resizeMode={ResizeMode.COVER}
											style={styles.video}
										/>
									)}
									<Pressable
										onPress={() => removeMedia(file)}
										style={styles.removeMediaButton}
									>
										<AntDesign
											name="closecircleo"
											size={24}
											color="black"
										/>
									</Pressable>
								</View>
							);
						})}
						{media.length % 2 == 1 && (
							<View style={styles.singleMediaContainer}></View>
						)}
					</View>
				</ScrollView>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	mediaContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		flexWrap: "wrap",
		rowGap: 32,
		marginTop: "4%",
		width: "100%",
		paddingHorizontal: 16,
		overflow: "visible",
	},
	singleMediaContainer: {
		position: "relative",
		width: 175,
	},
	image: {
		marginLeft: "auto",
		marginRight: "auto",
		aspectRatio: 0.7, // Set aspect ratio to maintain the original image proportions
	},
	video: {
		marginLeft: "auto",
		marginRight: "auto",
		width: 150,
		height: 225,
	},
	removeMediaButton: {
		position: "absolute",
		top: -6,
		right: 0,
		backgroundColor: Styles.colors.white.primary,
		borderRadius: 12,
	},
});
