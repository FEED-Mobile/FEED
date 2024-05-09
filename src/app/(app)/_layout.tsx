import { Stack } from "expo-router";

export default function AppLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="create-post"
				options={{
					headerShown: false,
					presentation: "fullScreenModal",
					animation: "slide_from_bottom",
				}}
			/>
			<Stack.Screen
				name="comments/[postId]"
				options={{
					headerShown: false,
					presentation: "modal",
				}}
			/>
			<Stack.Screen
				name="settings"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="editProfile"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
