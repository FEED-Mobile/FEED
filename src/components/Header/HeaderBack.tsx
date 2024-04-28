import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { PressableProps } from "react-native";

export default function HeaderBack(props: PressableProps) {
	return (
		<Button {...props} onPress={() => router.back()}>
			<Ionicons
				name="chevron-back"
				size={24}
				color={Styles.colors.black.primary}
			/>
		</Button>
	);
}
