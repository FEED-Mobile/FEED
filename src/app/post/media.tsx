import { Pressable, Text, View } from "react-native";
import useImagesStore from "@stores/useImagesStore";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function MediaPage() {
	const { images, removeImage } = useImagesStore((state) => {
		return { images: state.images, removeImage: state.removeImage };
	});

	return (
		<SafeAreaView style={styles.container}>
			{images && (
				<ScrollView style={styles.imagesContainer}>
					{images.map((image) => {
						return (
							<View
								key={image.uri}
								style={styles.singleImageContainer}
							>
								<Image
									source={{ uri: image.uri }}
									width={175}
									height={250}
									style={styles.image}
								/>
								<Pressable
									onPress={() => removeImage(image)}
									style={styles.removeImageButton}
								>
									<Text>X</Text>
								</Pressable>
							</View>
						);
					})}
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
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		marginLeft: "auto",
		marginRight: "auto",
		width: "100%",
	},
	singleImageContainer: {},
	image: {
		position: "relative",
	},
	removeImageButton: {
		position: "absolute",
		top: 4,
		right: 4,
	},
});
