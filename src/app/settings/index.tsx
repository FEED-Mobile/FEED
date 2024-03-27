import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { useCurrentUserActions } from "@stores/currentUserStore";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsPage() {
	const { signOut } = useCurrentUserActions();

	return (
		<View style={styles.container}>
			<Button style={styles.button} onPress={signOut}>
				<Text style={styles.buttonText}>Logout</Text>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		backgroundColor: Styles.colors.black.primary,
		padding: 16,
		margin: 16,
		borderRadius: 8,
	},
	buttonText: {
		fontFamily: Styles.fonts.text.regular,
		color: Styles.colors.white.primary,
	},
});
