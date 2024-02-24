import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Pressable, TextInput, View, Text } from "react-native";
import { supabase } from "@lib/supabase";
import { Link } from "expo-router";
import Styles from "@constants/Styles";

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
		const { error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});

		if (error) {
			Alert.alert(error.message);
		}
		console.log("Login Successful");
		setLoading(false);
	}

	return (
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
			<Pressable
				disabled={loading}
				onPress={() => signInWithEmail()}
				style={[styles.loginButton]}
			>
				<Text style={styles.buttonText}>Login</Text>
			</Pressable>

			{/* TODO: Handle forgot password flow */}
			<Text style={styles.forgotPasswordText}>Forgot password?</Text>

			<Text style={styles.bottomText}>
				Don't have an account?{" "}
				<Link
					href="/signup"
					replace={true}
					style={styles.loginRedirectText}
				>
					Sign Up
				</Link>
			</Text>
		</View>
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
		fontFamily: Styles.fonts.title,
	},
	textInput: {
		width: "72.5%",
		marginVertical: 10,
		paddingVertical: 5,
		fontFamily: Styles.fonts.text,
		fontSize: 16,
		borderBottomColor: Styles.colors.black.primary,
		borderBottomWidth: 1,
	},
	loginButton: {
		width: "72.5%",
		borderRadius: 5,
		padding: 10,
		marginBottom: "10%",
		backgroundColor: Styles.colors.brown.primary,
	},
	buttonText: {
		textAlign: "center",
		color: Styles.colors.white.primary,
		fontFamily: Styles.fonts.text,
	},
	forgotPasswordText: {
		fontFamily: Styles.fonts.text,
		textDecorationLine: "underline",
	},
	bottomText: {
		position: "absolute",
		bottom: "10%",
		fontSize: 20,
		fontFamily: Styles.fonts.title,
	},
	loginRedirectText: {
		textDecorationLine: "underline",
	},
});
