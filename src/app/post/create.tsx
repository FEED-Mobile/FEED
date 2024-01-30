import { Pressable, Text, TextInput, View } from "@components/Themed";
import { supabase } from "@lib/supabase";
import useImagesStore from "@stores/useImagesStore";
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
		for (const image of images) {
			const fileName = image.uri.split("/").pop();
			const fileExt = image.uri.split(".").pop();
			const imageFile = {
				uri: image.uri,
				type: `image/${fileExt}`,
				name: fileName ?? "",
			};
			const form = new FormData();
			form.append("photo", imageFile);

			const {
				data: { user },
				error: getUserError,
			} = await supabase.auth.getUser();
			if (!user || getUserError) {
				console.log("An error occurred: ", getUserError);
				return;
			}

			const destinationPath = `${user.id}/${fileName}`;
			const { data, error: storageError } = await supabase.storage
				.from("posts")
				.upload(destinationPath, form);

			if (!data || storageError) {
				console.log("An error occurred: ", storageError);
				return;
			}
			console.log(data);
		}
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
