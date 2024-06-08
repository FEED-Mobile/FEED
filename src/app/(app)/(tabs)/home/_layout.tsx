import HeaderBack from "@components/header/HeaderBack";
import HeaderTitle from "@components/header/HeaderTitle";
import { Stack } from "expo-router";

export default function HomeLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerTitle: () => <HeaderTitle />,
				}}
			/>
			<Stack.Screen
				name="[userId]"
				options={{
					headerShown: true,
					headerLeft: () => <HeaderBack />,
				}}
			/>
		</Stack>
	);
}
