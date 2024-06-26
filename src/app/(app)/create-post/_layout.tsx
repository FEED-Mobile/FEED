import HeaderBack from "@components/header/HeaderBack";
import HeaderTitle from "@components/header/HeaderTitle";
import Styles from "@constants/Styles";
import { Stack } from "expo-router";

export default function CreatePostLayout() {
	return (
		<Stack
			screenOptions={{
				headerLeft: () => <HeaderBack />,
			}}
		>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="media"
				options={{
					title: "View Media",
					headerTitle: ({ children }) => (
						<HeaderTitle
							children={children}
							style={{
								fontFamily: Styles.fonts.text.regular,
								fontSize: 16,
								textTransform: "uppercase",
							}}
						/>
					),
				}}
			/>
			<Stack.Screen
				name="create"
				options={{
					title: "What's cooking?",
					headerTitle: ({ children }) => (
						<HeaderTitle
							children={children}
							style={{
								fontFamily: Styles.fonts.text.regular,
								fontSize: 16,
								textTransform: "uppercase",
							}}
						/>
					),
				}}
			/>
		</Stack>
	);
}
