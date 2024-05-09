import HeaderBack from "@components/header/HeaderBack";
import HeaderTitle from "@components/header/HeaderTitle";
import Styles from "@constants/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { supabase } from "@lib/supabase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {
// 	DarkTheme,
// 	DefaultTheme,
// 	ThemeProvider,
// } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
// import { useColorScheme } from "react-native";

const queryClient = new QueryClient();

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		AoboshiOne: require("../assets/fonts/AoboshiOne/AoboshiOne-Regular.ttf"),
		Mako: require("../assets/fonts/Mako/Mako-Regular.ttf"),
		"IBMPlexSans-Regular": require("../assets/fonts/IBMPlexSans/IBMPlexSans-Regular.ttf"),
		"IBMPlexSans-Light": require("../assets/fonts/IBMPlexSans/IBMPlexSans-Light.ttf"),
		"IBMPlexSans-SemiBold": require("../assets/fonts/IBMPlexSans/IBMPlexSans-SemiBold.ttf"),
		"IBMPlexSans-Bold": require("../assets/fonts/IBMPlexSans/IBMPlexSans-Bold.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	// const colorScheme = useColorScheme();

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			if (session) {
				router.replace("/home/");
			}
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			if (session) {
				router.replace("/home");
			} else {
				router.replace("/");
			}
		});
	}, []);

	return (
		// <ThemeProvider
		// 	value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		// >
		<QueryClientProvider client={queryClient}>
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: Styles.colors.white.primary,
					},
					headerTitle: () => <HeaderTitle />,
					headerLeft: () => <HeaderBack />,
				}}
			>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
				<Stack.Screen name="(app)" options={{ headerShown: false }} />
			</Stack>
		</QueryClientProvider>
		// {/* </ThemeProvider> */}
	);
}
