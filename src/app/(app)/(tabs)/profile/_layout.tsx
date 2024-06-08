import HeaderSettings from "@components/header/HeaderSettings";
import { Stack } from "expo-router";

export default function ProfileLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerRight: () => <HeaderSettings />,
				}}
			/>
			<Stack.Screen
				name="post"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
