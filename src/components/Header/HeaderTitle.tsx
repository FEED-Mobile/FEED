import Styles from "@constants/Styles";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type HeaderTitleProps = {
	children?: string;
	tintColor?: string;
	style?: StyleProp<TextStyle>;
};

export default function HeaderTitle({
	children = "Feed",
	style,
}: HeaderTitleProps) {
	return <Text style={[styles.headerTitle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	headerTitle: {
		fontFamily: Styles.fonts.title,
		fontSize: 48,
	},
});
