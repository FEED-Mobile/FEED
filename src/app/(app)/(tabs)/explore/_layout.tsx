import { Stack } from "expo-router";

export default function ExploreLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Explore",
				}}
			/>
		</Stack>
	);
}