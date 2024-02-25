import { Pressable, Text, TextInput, View } from "react-native";
import { supabase } from "@lib/supabase";
import useImagesStore from "@stores/useImagesStore";
import { router } from "expo-router";
import { useState } from "react";
import {
	FlatList,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import Styles from "@constants/Styles";

export default function CreatePostPage() {
	const { images, resetImages } = useImagesStore((state) => {
		return { images: state.images, resetImages: state.resetImages };
	});
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");

	/**
	 * Upload images and create new post
	 * @returns
	 */
	const handleCreate = async () => {
		console.log("Creating new post...");
		const imageUrls: string[] = [];

		// Get user for user ID
		const {
			data: { user },
			error: getUserError,
		} = await supabase.auth.getUser();
		if (!user || getUserError) {
			console.log(
				"An error occurred in getting the user: ",
				getUserError
			);
			return;
		}

		// Upload each picture and get its public URL
		for (const image of images) {
			const fileName = image.uri.split("/").pop();
			const fileExt = image.uri.split(".").pop();
			const imageFile = {
				uri: image.uri,
				type: `image/${fileExt}`,
				name: fileName ?? "",
			};
			const form = new FormData();

			/**
			 * Uploading images to Cloudinary when running development.
			 * In production, images will be uploaded to Supabase Storage.
			 */
			if (__DEV__) {
				form.append("file", imageFile);
				form.append(
					"upload_preset",
					process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? ""
				);
				try {
					const res = await fetch(
						`${process.env.EXPO_PUBLIC_CLOUDINARY_URL}/image/upload`,
						{
							method: "post",
							body: form,
						}
					);
					const resJSON = await res.json();

					// Get URL for image
					imageUrls.push(resJSON["secure_url"]);
				} catch (e) {
					console.log(
						"An error occurred in uploading the image: ",
						e
					);
					return;
				}
			} else {
				form.append("photo", imageFile);
				const destinationPath = `${user.id}/${fileName}`;
				const { data: uploadResponse, error: storageError } =
					await supabase.storage
						.from("posts")
						.upload(destinationPath, form);

				if (!uploadResponse || storageError) {
					console.log(
						"An error occurred in uploading the image: ",
						storageError
					);
					return;
				}

				// Get URL for image
				const {
					data: { publicUrl },
				} = supabase.storage
					.from("posts")
					.getPublicUrl(uploadResponse.path);
				imageUrls.push(publicUrl);
			}
		}

		// Insert new post
		const { error: postCreationError } = await supabase
			.from("postings")
			.insert({
				user_id: user.id,
				title: title,
				description: title,
				location: location,
				images: imageUrls,
			});
		if (postCreationError) {
			console.log(
				"An error occurred in creating the post: ",
				postCreationError
			);
			return;
		}

		// Clear images from store
		resetImages();

		// Navigate back to home page
		router.replace("/(app)/home");
		console.log("Post successfully created!");
	};

	return (
		<KeyboardAvoidingView behavior="position" style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<>
					<FlatList
						horizontal
						data={images}
						renderItem={(item) => (
							<Image
								source={{ uri: item.item.uri }}
								width={350}
								height={450}
								style={{ marginHorizontal: 4 }}
							/>
						)}
						keyExtractor={(item) => item.uri}
					/>
					<View style={styles.contentContainer}>
						<Text style={styles.labelText}>Title</Text>
						<TextInput
							onChangeText={(text) => setTitle(text)}
							value={title}
							placeholder="Tell everyone what's cooking"
							style={styles.textInput}
						/>
						<Text style={styles.labelText}>Description</Text>
						<TextInput
							onChangeText={(text) => setDescription(text)}
							value={description}
							placeholder="Add a description to your snap"
							style={styles.textInput}
						/>
						<Text style={styles.labelText}>Location</Text>
						<TextInput
							onChangeText={(text) => setLocation(text)}
							value={location}
							placeholder="Tell everyone where this was taken"
							style={styles.textInput}
						/>
						<Text style={styles.labelText}>
							Tag related topics (TODO)
						</Text>
						<Pressable
							style={styles.createButton}
							onPress={handleCreate}
						>
							<Text style={styles.createButtonText}>Create</Text>
						</Pressable>
					</View>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	contentContainer: {
		width: "95%",
		marginTop: "8%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	labelText: {
		fontFamily: Styles.fonts.text,
		fontSize: 12,
	},
	textInput: {
		marginTop: 4,
		marginBottom: 16,
		paddingVertical: 5,
		fontFamily: Styles.fonts.text,
		fontSize: 16,
		borderBottomColor: Styles.colors.black.primary,
		borderBottomWidth: 1,
	},
	createButton: {
		width: 100,
		paddingHorizontal: 12,
		paddingVertical: 12,
		borderRadius: 20,
		backgroundColor: Styles.colors.brown.primary,
		marginLeft: "auto",
	},
	createButtonText: {
		textAlign: "center",
		fontFamily: Styles.fonts.text,
		fontSize: 12,
		color: Styles.colors.white.primary,
		textTransform: "uppercase",
	},
});
