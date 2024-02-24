import Styles from "@constants/Styles";
import { StyleSheet, Text } from "react-native";

export default function HeaderTitle() {
	return <Text style={styles.headerTitle}>Feed</Text>;
}

const styles = StyleSheet.create({
	headerTitle: {
		marginTop: 4,
		fontFamily: Styles.fonts.title,
		fontSize: 48,
	},
});
