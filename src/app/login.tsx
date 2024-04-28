import homeImage from "@assets/images/home-image.jpg";
import HeaderBack from "@components/header/HeaderBack";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { handleError, signInToSupabase } from "@lib/utils";
import { Link } from "expo-router";
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
 * Login Page
 * @returns
 */
export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	/**
	 * Attempt to login user via Supabase
	 */
	async function signInWithEmail() {
		console.log("Trying to log in...");
		setLoading(true);

		try {
			await signInToSupabase(email, password);
			console.log("Login Successful");
		} catch (e) {
			Alert.alert(handleError(e));
		}

		setLoading(false);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<>
				<HeaderBack style={styles.backButton} />
				<Image source={homeImage} style={styles.homeImage} />
				<View style={styles.container}>
					<Text style={styles.titleText}>Login</Text>

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
						style={[styles.textInput, { marginBottom: "10%" }]}
					/>

					<Button
						disabled={loading}
						onPress={() => signInWithEmail()}
						style={[styles.loginButton]}
					>
						<Text style={styles.buttonText}>Login</Text>
					</Button>

					{/* TODO: Handle forgot password flow */}
					<Text style={styles.forgotPasswordText}>
						Forgot password?
					</Text>

					<Text style={styles.bottomText}>
						Don&apos;t have an account?{" "}
						<Link
							href="/signup"
							replace={true}
							style={styles.loginRedirectText}
						>
							Sign up now!
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
	loginButton: {
		width: "72.5%",
		borderRadius: 16,
		padding: 10,
		marginBottom: "10%",
		backgroundColor: Styles.colors.darkgreen.primary,
	},
	buttonText: {
		textAlign: "center",
		color: Styles.colors.white.primary,
		fontFamily: Styles.fonts.text.regular,
	},
	forgotPasswordText: {
		fontFamily: Styles.fonts.text.regular,
		textDecorationLine: "underline",
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
