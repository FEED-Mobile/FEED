import { Pressable, Text, TextInput, View } from "@components/Themed";
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

export default function CreatePostPage() {
	const { images, resetImages } = useImagesStore((state) => {
		return { images: state.images, resetImages: state.resetImages };
	});
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");

	const handleCreate = async () => {
		console.log("Creating new post...");
		const imageUrls: string[] = [];

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

		for (const image of images) {
			const fileName = image.uri.split("/").pop();
			const fileExt = image.uri.split(".").pop();
			const imageFile = {
				uri: image.uri,
				type: `image/${fileExt}`,
				name: fileName ?? "",
			};
			const form = new FormData();

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

				const {
					data: { publicUrl },
				} = supabase.storage
					.from("posts")
					.getPublicUrl(uploadResponse.path);
				imageUrls.push(publicUrl);
			}
		}

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

		resetImages();

		console.log("Post successfully created!");
		router.replace("/(app)/home");
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
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
								style={{ margin: 4 }}
							/>
						)}
						keyExtractor={(item) => item.uri}
						style={{ flexGrow: 0 }}
					/>
					<Text>Title</Text>
					<TextInput
						onChangeText={(text) => setTitle(text)}
						value={title}
						placeholder="Tell everyone what's cooking"
						style={styles.textInput}
					/>
					<Text>Description</Text>
					<TextInput
						onChangeText={(text) => setDescription(text)}
						value={description}
						placeholder="Add a description to your snap"
						style={styles.textInput}
					/>
					<Text>Location</Text>
					<TextInput
						onChangeText={(text) => setLocation(text)}
						value={location}
						placeholder="Tell everyone where this was taken"
						style={styles.textInput}
					/>
					<Text>Tag related topics (TODO)</Text>
					<Pressable
						style={styles.createButton}
						onPress={handleCreate}
					>
						<Text
							lightColor="#fff"
							darkColor="#000"
							style={styles.createButtonText}
						>
							CREATE
						</Text>
					</Pressable>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	textInput: {
		width: "72.5%",
		marginVertical: 10,
		paddingVertical: 5,
		fontSize: 16,
	},
	createButton: {
		width: "20%",
		padding: 4,
		borderRadius: 20,
	},
	createButtonText: {
		textAlign: "center",
	},
});
