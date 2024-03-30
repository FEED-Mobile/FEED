import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import useUserQuery from "@hooks/useUserQuery";
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
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [bio, setBio] = useState("");

	if (isPending || error) {
		return <></>;
	}

	useEffect(() => {
		setName(user.full_name ?? "");
		setUsername(user.username ?? "");
		setBio(user.bio ?? "");
	}, [user]);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<Button onPress={() => console.log("Clicked avatar...")}>
					<Image
						source={{
							uri: "https://hansonn.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_pic.6b4f19f1.jpg&w=1920&q=75",
						}}
						style={styles.avatar}
					/>
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
				<Button
					style={styles.saveButton}
					onPress={() => console.log("Save pressed...")}
				>
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
		margin: 24,
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
