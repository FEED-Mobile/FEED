import { Pressable, Text, View } from "react-native";
import useImagesStore from "@stores/useImagesStore";
import { Image, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Styles from "@constants/Styles";

export default function MediaPage() {
	const { images, removeImage } = useImagesStore((state) => {
		return { images: state.images, removeImage: state.removeImage };
	});

	return (
		<SafeAreaView style={styles.container}>
			{images && (
				<ScrollView>
					<View style={styles.imagesContainer}>
						{images.map((image) => {
							return (
								<View
									key={image.uri}
									style={styles.singleImageContainer}
								>
									<Image
										source={{ uri: image.uri }}
										width={150}
										height={225}
										style={styles.image}
									/>
									<Pressable
										onPress={() => removeImage(image)}
										style={styles.removeImageButton}
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
						{images.length % 2 == 1 && (
							<View style={styles.singleImageContainer}></View>
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
	imagesContainer: {
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
	singleImageContainer: {
		position: "relative",
		width: 175,
	},
	image: {
		marginLeft: "auto",
		marginRight: "auto",
		aspectRatio: 0.7, // Set aspect ratio to maintain the original image proportions
	},
	removeImageButton: {
		position: "absolute",
		top: -6,
		right: 0,
		backgroundColor: Styles.colors.white.primary,
		borderRadius: 12,
	},
});
