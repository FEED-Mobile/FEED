import HeaderBack from "@components/header/HeaderBack";
import HeaderTitle from "@components/header/HeaderTitle";
import { Stack } from "expo-router";

export default function PostLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="[id]"
				options={{
					headerShown: true,
					headerLeft: () => <HeaderBack />,
					headerTitle: () => <HeaderTitle />,
				}}
			/>
		</Stack>
	);
}
