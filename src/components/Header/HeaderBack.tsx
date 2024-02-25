import Styles from "@constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable } from "react-native";

export default function HeaderBack() {
	return (
		<Pressable onPress={() => router.back()}>
			<Ionicons
				name="chevron-back"
				size={24}
				color={Styles.colors.black.primary}
			/>
		</Pressable>
	);
}
