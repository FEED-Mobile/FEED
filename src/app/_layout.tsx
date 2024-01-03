import FontAwesome from "@expo/vector-icons/FontAwesome";
import { supabase } from "@lib/supabase";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

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
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    const colorScheme = useColorScheme();

    useEffect(() => {
        console.log("I RUNRUNRURN")
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                router.replace("/");
            }
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                router.replace("/");
            } else {
                router.replace("/landing");
            }
        });
    }, []);

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack>
                <Stack.Screen name="landing" options={{ headerTitle: "Landing Page" }} />
                <Stack.Screen name="login" options={{ headerTitle: "Login Page" }} />
                <Stack.Screen name="signup" options={{ headerTitle: "Sign Up Page" }} />
                <Stack.Screen name="(app)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
