import MediaFlatlist from "@components/MediaFlatlist";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { supabase } from "@lib/supabase";
import { isCameraCapturedPicture, uploadMedia } from "@lib/utils";
import { useMedia, useMediaActions } from "@stores/mediaStore";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import {
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";

export default function CreatePostPage() {
	const media = useMedia();
	const { resetMedia } = useMediaActions();
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
			console.error(
				"An error occurred in getting the user: ",
				getUserError
			);
			return;
		}

		// Upload each picture and get its public URL
		for (const mediaFile of media) {
			const mediaType = isCameraCapturedPicture(mediaFile)
				? "image"
				: "video";

			const publicUrl = await uploadMedia(
				user.id,
				mediaFile.uri,
				mediaType,
				"posts"
			);

			if (!publicUrl) {
				console.error(
					"An error occurred in uploading the media file. "
				);
				return;
			}
			mediaUrls.push(publicUrl);
		}

		// Insert new post
		const { error: postCreationError } = await supabase
			.from("posts")
			.insert({
				user_id: user.id,
				title: title,
				description: description,
				location: location,
				media: mediaUrls,
			});
		if (postCreationError) {
			console.error(
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
			<TouchableWithoutFeedback
				onPress={Keyboard.dismiss}
				accessible={false}
			>
				<>
					<MediaFlatlist media={media} />
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
						<Button
							style={styles.createButton}
							onPress={handleCreate}
						>
							<Text style={styles.createButtonText}>Create</Text>
						</Button>
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
		fontFamily: Styles.fonts.text.regular,
		fontSize: 12,
	},
	textInput: {
		marginTop: 4,
		marginBottom: 16,
		paddingVertical: 5,
		fontFamily: Styles.fonts.text.regular,
		fontSize: 16,
		borderBottomColor: Styles.colors.black.primary,
		borderBottomWidth: 1,
	},
	createButton: {
		width: 100,
		paddingHorizontal: 12,
		paddingVertical: 12,
		borderRadius: 20,
		backgroundColor: Styles.colors.darkgreen.primary,
		marginLeft: "auto",
	},
	createButtonText: {
		textAlign: "center",
		fontFamily: Styles.fonts.text.regular,
		fontSize: 12,
		color: Styles.colors.white.primary,
		textTransform: "uppercase",
	},
});
