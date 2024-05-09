import HeaderBack from "@components/header/HeaderBack";
import HeaderTitle from "@components/header/HeaderTitle";
import Styles from "@constants/Styles";
import { Stack } from "expo-router";

export default function SettingsLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerTitle: () => (
						<HeaderTitle
							children="Settings"
							style={{
								fontFamily: Styles.fonts.text.regular,
								fontSize: 16,
								textTransform: "uppercase",
							}}
						/>
					),
					headerLeft: () => <HeaderBack />,
				}}
			/>
		</Stack>
	);
}
