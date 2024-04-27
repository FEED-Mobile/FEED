import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { handleError, signInToSupabase } from "@lib/utils";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
	Alert,
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
			<View style={styles.container}>
				<Text style={styles.titleText}>Welcome back!</Text>

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
				<Text style={styles.forgotPasswordText}>Forgot password?</Text>

				<Text style={styles.bottomText}>
					Don&apos;t have an account?{" "}
					<Link
						href="/signup"
						replace={true}
						style={styles.loginRedirectText}
					>
						Sign Up
					</Link>
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Styles.colors.white.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	titleText: {
		fontSize: 48,
		width: "72.5%",
		marginBottom: "10%",
		fontFamily: Styles.fonts.heading.regular,
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
		borderRadius: 5,
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
