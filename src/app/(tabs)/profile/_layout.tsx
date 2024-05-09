import HeaderSettings from "@components/header/HeaderSettings";
import HeaderTitle from "@components/header/HeaderTitle";
import Styles from "@constants/Styles";
import useUserQuery from "@hooks/useUserQuery";
import { Stack } from "expo-router";

export default function ProfileLayout() {
	const { data: user, isPending, error } = useUserQuery();

	if (isPending || error) {
		return <></>;
	}

	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: user.username,
					headerTitle: ({ children }) => (
						<HeaderTitle
							children={children}
							style={{
								fontFamily: Styles.fonts.text.semibold,
								fontSize: 24,
							}}
						/>
					),
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
