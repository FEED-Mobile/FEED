import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function HeaderSettings() {
	return (
		<Button
			onPress={() => console.log("Settings pressed...")}
			style={styles.button}
		>
			<Ionicons
				name="settings-outline"
				size={24}
				color={Styles.colors.black.primary}
			/>
		</Button>
	);
}

const styles = StyleSheet.create({
	button: {
		marginHorizontal: 16,
	},
});
