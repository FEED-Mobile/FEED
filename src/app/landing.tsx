import homeImage from "@assets/images/home-image.jpg";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
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
		<>
			<Image source={homeImage} style={styles.homeImage} />
			<View style={styles.container}>
				<StatusBar style="light" />
				<Text style={styles.titleText}>Feed.</Text>
				<Text style={styles.descriptionText}>
					Food for your phone begins here.
				</Text>
				<Button
					onPress={() => onLoginPress()}
					style={[styles.button, styles.loginButton]}
				>
					<Text style={[styles.buttonText, styles.loginButtonText]}>
						Login
					</Text>
				</Button>
				<Button
					onPress={() => onSignUpPress()}
					style={[styles.button, styles.signUpButton]}
				>
					<Text style={[styles.buttonText, styles.signUpButtonText]}>
						Sign Up
					</Text>
				</Button>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Styles.colors.white.primary,
		alignItems: "center",
	},
	homeImage: {
		resizeMode: "cover",
		width: "100%",
		height: "50%",
	},
	titleText: {
		fontSize: 70,
		fontFamily: Styles.fonts.heading.regular,
		color: Styles.colors.darkgreen.primary,
	},
	descriptionText: {
		fontSize: 20,
		fontFamily: Styles.fonts.heading.regular,
		marginTop: 16,
		marginBottom: 32,
	},
	button: {
		width: 180,
		borderRadius: 20,
		paddingVertical: 12,
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
	buttonText: {
		fontSize: 20,
		textAlign: "center",
		fontFamily: Styles.fonts.text.regular,
	},
	loginButtonText: {
		color: Styles.colors.white.primary,
	},
	loginButton: {
		marginBottom: 40,
	},
	signUpButtonText: {
		color: Styles.colors.black.primary,
	},
	signUpButton: {
		backgroundColor: Styles.colors.white.primary,
	},
});
