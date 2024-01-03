import { Pressable, Text, View } from "@components/Themed";
import { Link, } from "expo-router";
import { StyleSheet } from "react-native";

export default function LandingPage() {
    return (
        <View>
            <Text>Feed.</Text>
            <Link href="/login" asChild>
                <Pressable style={[styles.button, styles.loginButton]}>
                    <Text>Login</Text>
                </Pressable>
            </Link>
            <Link href="/signup" asChild>
                <Pressable style={[styles.button, styles.signUpButton]}>
                    <Text>Sign Up</Text>
                </Pressable>
            </Link>
            <Text>Food for your phone begins here.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
    loginButton: {},
    signUpButton: {
        backgroundColor: "gray",
    },
});
