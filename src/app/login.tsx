import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Pressable, TextInput, View } from "@components/Themed";
import { supabase } from "@lib/supabase";
import { Link } from "expo-router";
import { KatibehText, MakoText } from "@components/StyledText";
import Fonts from "@constants/Fonts";

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
			<KatibehText style={styles.titleText}>Welcome back!</KatibehText>
			<TextInput
				onChangeText={(text) => setEmail(text)}
				value={email}
				placeholder="Email"
				autoCapitalize={"none"}
				style={styles.textInput}
			/>
			<TextInput
				onChangeText={(text) => setPassword(text)}
				value={password}
				secureTextEntry={true}
				placeholder="Password"
				autoCapitalize={"none"}
				style={[styles.textInput, { marginBottom: "10%" }]}
			/>
			<Pressable
				disabled={loading}
				onPress={() => signInWithEmail()}
				style={[styles.loginButton]}
			>
				<MakoText
					lightColor="#fff"
					darkColor="#000"
					style={styles.buttonText}
				>
					Login
				</MakoText>
			</Pressable>

			{/* TODO: Handle forgot password flow */}
			<MakoText>Forgot password?</MakoText>

			<KatibehText style={styles.bottomText}>
				Don't have an account?{" "}
				<Link
					href="/signup"
					replace={true}
					style={styles.loginRedirectText}
				>
					Sign Up
				</Link>
			</KatibehText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	titleText: {
		fontSize: 48,
		width: "72.5%",
		marginBottom: "10%",
	},
	textInput: {
		width: "72.5%",
		marginVertical: 10,
		paddingVertical: 5,
		fontFamily: Fonts.text,
		fontSize: 16,
	},
	loginButton: {
		width: "72.5%",
		borderRadius: 5,
		padding: 10,
		marginBottom: "10%",
	},
	buttonText: {
		textAlign: "center",
	},
	bottomText: {
		position: "absolute",
		bottom: "10%",
		fontSize: 20,
	},
	loginRedirectText: {
		textDecorationLine: "underline",
	},
});
