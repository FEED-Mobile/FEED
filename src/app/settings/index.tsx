import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { supabase } from "@lib/supabase";
import { useQueryClient } from "@tanstack/react-query";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsPage() {
	const queryClient = useQueryClient();

	const signOutOfSupabase = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			throw error;
		}

		await queryClient.invalidateQueries();
	};

	return (
		<View style={styles.container}>
			<Button style={styles.button} onPress={signOutOfSupabase}>
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
