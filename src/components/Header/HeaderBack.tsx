import Styles from "@constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HeaderBack() {
	return (
		<Ionicons
			onPress={() => router.back()}
			name="chevron-back"
			size={24}
			color={Styles.colors.black.primary}
		/>
	);
}
