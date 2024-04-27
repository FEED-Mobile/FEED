import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

/**
 * Landing Page
 * @returns
 */
export default function LandingPage() {
	const onLoginPress = () => {
		router.push("/login");
	};

	const onSignUpPress = () => {
		router.push("/signup");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Feed.</Text>
			<Button
				onPress={() => onLoginPress()}
				style={[styles.button, styles.loginButton]}
			>
				<Text style={styles.loginButtonText}>Login</Text>
			</Button>
			<Button
				onPress={() => onSignUpPress()}
				style={[styles.button, styles.signUpButton]}
			>
				<Text style={styles.signUpButtonText}>Sign Up</Text>
			</Button>
			<Text style={styles.descriptionText}>
				Food for your phone begins here.
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
		fontSize: 128,
		fontFamily: Styles.fonts.heading.regular,
		color: Styles.colors.lightgreen.primary,
	},
	button: {
		width: "72.5%",
		borderRadius: 5,
		padding: 10,
		backgroundColor: Styles.colors.darkgreen.primary,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
	loginButtonText: {
		textAlign: "center",
		fontFamily: Styles.fonts.text.regular,
		color: Styles.colors.white.primary,
	},
	loginButton: {
		marginBottom: 30,
	},
	signUpButtonText: {
		textAlign: "center",
		fontFamily: Styles.fonts.text.regular,
		color: Styles.colors.black.primary,
	},
	signUpButton: {
		backgroundColor: Styles.colors.white.primary,
		marginBottom: 60,
	},
	descriptionText: {
		fontSize: 20,
		fontFamily: Styles.fonts.heading.regular,
	},
});
