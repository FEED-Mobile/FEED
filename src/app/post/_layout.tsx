import { Stack } from "expo-router";

export default function PostLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="media"
				options={{ title: "View Media", headerTitle: "View Media" }}
			/>
			<Stack.Screen
				name="create"
				options={{
					title: "What's cooking?",
					headerTitle: "What's cooking?",
				}}
			/>
		</Stack>
	);
}
