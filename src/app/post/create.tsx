import Styles from "@constants/Styles";
import { supabase } from "@lib/supabase";
import {
	isCameraCapturedPicture,
	uploadToCloudinary,
	uploadToSupabase,
} from "@lib/utils";
import useMediaStore from "@stores/useMediaStore";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import {
	FlatList,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";

export default function CreatePostPage() {
	const { media, resetMedia } = useMediaStore((state) => {
		return { media: state.media, resetMedia: state.resetMedia };
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
		const mediaUrls: string[] = [];

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
		for (const mediaFile of media) {
			const fileName = mediaFile.uri.split("/").pop() ?? "";
			const fileExt = mediaFile.uri.split(".").pop() ?? "";
			const mediaType = isCameraCapturedPicture(mediaFile)
				? "image"
				: "video";

			/**
			 * Uploading images to Cloudinary when running development.
			 * In production, images will be uploaded to Supabase Storage.
			 */
			let publicUrl;
			if (__DEV__) {
				publicUrl = await uploadToCloudinary(
					fileName,
					fileExt,
					mediaType,
					mediaFile
				);
			} else {
				publicUrl = await uploadToSupabase(
					user.id,
					fileName,
					fileExt,
					mediaType,
					mediaFile
				);
			}
			if (!publicUrl) {
				console.log("An error occurred in uploading the media file. ");
				return;
			}
			mediaUrls.push(publicUrl);
		}

		// Insert new post
		const { error: postCreationError } = await supabase
			.from("postings")
			.insert({
				user_id: user.id,
				title: title,
				description: title,
				location: location,
				images: mediaUrls,
			});
		if (postCreationError) {
			console.log(
				"An error occurred in creating the post: ",
				postCreationError
			);
			return;
		}

		// Clear images from store
		resetMedia();

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
						data={media}
						renderItem={(item) => {
							const mediaWidth = 350,
								mediaHeight = 450;
							if (isCameraCapturedPicture(item.item)) {
								return (
									<Image
										source={{ uri: item.item.uri }}
										width={mediaWidth}
										height={mediaHeight}
										style={{ marginHorizontal: 4 }}
									/>
								);
							}
							return (
								<Video
									source={{ uri: item.item.uri }}
									useNativeControls
									resizeMode={ResizeMode.COVER}
									style={{
										marginHorizontal: 4,
										width: mediaWidth,
										height: mediaHeight,
									}}
								/>
							);
						}}
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
