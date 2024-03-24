import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HeaderBack() {
	return (
		<Button onPress={() => router.back()}>
			<Ionicons
				name="chevron-back"
				size={24}
				color={Styles.colors.black.primary}
			/>
		</Button>
	);
}
