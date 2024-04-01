import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import useUserMutation from "@hooks/useUserMutation";
import useUserQuery from "@hooks/useUserQuery";
import { uploadMedia } from "@lib/utils";
import { User } from "@type/supabase";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import {
	Image,
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";

export default function EditProfilePage() {
	const { data: user, isPending, error } = useUserQuery();
	const userMutation = useUserMutation();
	const [avatar, setAvatar] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");

	if (isPending || error) {
		return <></>;
	}

	useEffect(() => {
		setAvatar(user.avatar ?? "");
		setName(user.full_name ?? "");
		setUsername(user.username ?? "");
		setBio(user.bio ?? "");
	}, [user]);

	/**
	 * Pick photo from camera roll
	 */
	const pickAvatar = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
		});

		if (!result.canceled) {
			setAvatar(result.assets[0].uri);
		}
	};

	/**
	 * Upload avatar to respective location (Cloudinary)
	 * @returns Public URL for image if successful, null otherwise
	 */
	const uploadAvatar = async () => {
		console.log("Uploading avatar...");
		if (!avatar) {
			return null;
		}

		const publicUrl = await uploadMedia(user.id, avatar, "image", "posts");

		if (!publicUrl) {
			console.error("An error occurred in uploading the media file. ");
			return null;
		}

		console.log("Avatar uploaded.");
		return publicUrl;
	};

	/**
	 * Save user profile data to Supabase
	 * @returns
	 */
	const handleSave = async () => {
		console.log("Saving profile data...");

		// Ensure nonempty values
		if (!name || !username || !bio) {
			console.error("Profile values cannot be empty.");
			return;
		}

		// Do not update if nothing has changed
		if (
			avatar === user.avatar &&
			name === user.full_name &&
			username === user.username &&
			bio === user.bio
		) {
			console.log("No values changed.");
			return;
		}

		// Uplaod avatar image if changed
		let avatarUrl: string | null = null;
		if (avatar && avatar !== user.avatar) {
			avatarUrl = await uploadAvatar();
		}

		const updates: Partial<User> = {
			avatar: avatarUrl,
			full_name: name,
			username,
			bio,
		};

		userMutation.mutate({ userId: user.id, updates });
		console.log("Profile data saved.");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<Button onPress={pickAvatar}>
					{avatar ? (
						<Image
							source={{
								uri: avatar,
							}}
							style={styles.avatar}
						/>
					) : (
						<View style={styles.avatar}>
							<Ionicons
								name="fast-food"
								size={60}
								color={Styles.colors.green.primary}
							/>
						</View>
					)}
				</Button>
				<View style={styles.textInputContainer}>
					<Text style={styles.label}>Name</Text>
					<TextInput
						onChangeText={(text) => setName(text)}
						value={name}
						style={styles.textInput}
					/>
				</View>
				<View style={styles.textInputContainer}>
					<Text style={styles.label}>Username</Text>
					<TextInput
						onChangeText={(text) => setUsername(text)}
						value={username}
						style={styles.textInput}
					/>
				</View>
				<View style={styles.textInputContainer}>
					<Text style={styles.label}>Bio</Text>
					<TextInput
						onChangeText={(text) => setBio(text)}
						value={bio}
						style={[styles.textInput, styles.textArea]}
						multiline={true}
						numberOfLines={3}
					/>
				</View>
				<Button style={styles.saveButton} onPress={handleSave}>
					<Text style={styles.buttonText}>Save</Text>
				</Button>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		gap: 16,
	},
	avatar: {
		height: 96,
		width: 96,
		borderRadius: 48,
		borderWidth: 5,
		borderColor: "purple",
		margin: 24,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Styles.colors.brown.primary,
	},
	textInputContainer: {
		width: "72.5%",
	},
	label: {
		width: "100%",
		fontFamily: Styles.fonts.text.regular,
	},
	textInput: {
		width: "100%",
		marginVertical: 10,
		paddingVertical: 5,
		fontFamily: Styles.fonts.text.regular,
		fontSize: 16,
		borderBottomColor: Styles.colors.black.primary,
		borderBottomWidth: 1,
	},
	textArea: {
		height: 100,
	},
	saveButton: {
		backgroundColor: Styles.colors.black.primary,
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: 24,
	},
	buttonText: {
		color: Styles.colors.white.primary,
		fontFamily: Styles.fonts.text.regular,
		textAlign: "center",
	},
});
