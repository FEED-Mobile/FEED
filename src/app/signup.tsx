import homeImage from "@assets/images/home-image.jpg";
import HeaderBack from "@components/header/HeaderBack";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { supabase } from "@lib/supabase";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
	Alert,
	Image,
	Keyboard,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import { Text, TextInput, View } from "react-native";

/**
 * Sign Up Page
 * @returns
 */
export default function Signup() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);

	/**
	 * Attempt to sign up user via Supabase
	 * @returns Navigates to main app on success
	 */
	async function signUpWithEmail() {
		console.log("Trying to sign up...");
		setLoading(true);
		if (password != confirmPassword) {
			Alert.alert("Passwords do not match.");
		}

		const {
			data: { session },
			error,
		} = await supabase.auth.signUp({
			email: email,
			password: password,
			options: {
				data: {
					username: username,
				},
			},
		});

		if (error) {
			Alert.alert(error.message);
			setLoading(false);
			return;
		}
		if (!session) {
			Alert.alert("Please check your inbox for email verification!");
			setLoading(false);
			return;
		}
		router.replace("/home/");
		console.log("Sign Up Successful");
		setLoading(false);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<>
				<HeaderBack style={styles.backButton} />
				<Image source={homeImage} style={styles.homeImage} />
				<View style={styles.container}>
					<Text style={styles.titleText}>Sign Up</Text>
					<TextInput
						onChangeText={(text) => setUsername(text)}
						value={username}
						placeholder="User"
						placeholderTextColor={Styles.colors.gray.primary}
						autoCapitalize={"none"}
						style={styles.textInput}
					/>
					<TextInput
						onChangeText={(text) => setEmail(text)}
						value={email}
						placeholder="Email"
						placeholderTextColor={Styles.colors.gray.primary}
						autoCapitalize={"none"}
						style={styles.textInput}
					/>
					<TextInput
						onChangeText={(text) => setPassword(text)}
						value={password}
						secureTextEntry={true}
						placeholder="Password"
						placeholderTextColor={Styles.colors.gray.primary}
						autoCapitalize={"none"}
						style={styles.textInput}
					/>
					<TextInput
						onChangeText={(text) => setConfirmPassword(text)}
						value={confirmPassword}
						secureTextEntry={true}
						placeholder="Confirm Password"
						placeholderTextColor={Styles.colors.gray.primary}
						autoCapitalize={"none"}
						style={[styles.textInput, { marginBottom: "10%" }]}
					/>
					<Button
						disabled={loading}
						onPress={() => signUpWithEmail()}
						style={[styles.signUpButton]}
					>
						<Text style={styles.signUpButtonText}>Sign Up</Text>
					</Button>

					{/* TODO: OAUTH PROVIDERS SIGN IN */}

					<Text style={styles.bottomText}>
						Already have an account?{" "}
						<Link
							href="/login"
							replace={true}
							style={styles.loginRedirectText}
						>
							Login
						</Link>
					</Text>
				</View>
			</>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Styles.colors.white.primary,
		alignItems: "center",
	},
	backButton: {
		position: "absolute",
		top: "8%",
		left: "5%",
		zIndex: 10,
	},
	homeImage: {
		resizeMode: "cover",
		width: "100%",
		height: "33%",
	},
	titleText: {
		fontSize: 40,
		textAlign: "center",
		fontFamily: Styles.fonts.heading.regular,
		marginVertical: 16,
	},
	textInput: {
		width: "72.5%",
		marginVertical: 10,
		paddingVertical: 5,
		fontFamily: Styles.fonts.text.regular,
		fontSize: 16,
		borderBottomColor: Styles.colors.black.primary,
		borderBottomWidth: 1,
	},
	signUpButton: {
		width: "72.5%",
		borderRadius: 16,
		padding: 10,
		backgroundColor: Styles.colors.darkgreen.primary,
	},
	signUpButtonText: {
		textAlign: "center",
		color: Styles.colors.white.primary,
	},
	bottomText: {
		position: "absolute",
		bottom: "10%",
		fontSize: 20,
		fontFamily: Styles.fonts.heading.regular,
	},
	loginRedirectText: {
		textDecorationLine: "underline",
	},
});
