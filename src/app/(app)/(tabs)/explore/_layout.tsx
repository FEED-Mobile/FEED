import HeaderBack from "@components/header/HeaderBack";
import HeaderTitle from "@components/header/HeaderTitle";
import { Stack } from "expo-router";

export default function ExploreLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
					title: "Explore",
				}}
			/>
			<Stack.Screen
				name="[userId]"
				options={{
					headerShown: true,
					headerLeft: () => <HeaderBack />,
					headerTitle: () => <HeaderTitle />,
				}}
			/>
		</Stack>
	);
}
