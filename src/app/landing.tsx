import { KatibehText, MakoText } from "@components/StyledText";
import { Pressable, View } from "@components/Themed";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

/**
 * Landing Page
 * @returns 
 */
export default function LandingPage() {
    const onLoginPress = () => {
        router.push("/login");
    };

    const onSignUpPress = () => {
        router.push("/signup");
    };

    return (
        <View style={styles.container}>
            <KatibehText style={styles.titleText}>Feed.</KatibehText>
            <Pressable
                onPress={() => onLoginPress()}
                style={[styles.button, styles.loginButton]}
            >
                <MakoText
                    lightColor="#fff"
                    darkColor="#000"
                    style={styles.buttonText}
                >
                    Login
                </MakoText>
            </Pressable>
            <Pressable
                onPress={() => onSignUpPress()}
                style={[styles.button, styles.signUpButton]}
            >
                <MakoText
                    style={styles.buttonText}
                >
                    Sign Up
                </MakoText>
            </Pressable>
            <KatibehText style={styles.descriptionText}>
                Food for your phone begins here.
            </KatibehText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 128,
    },
    button: {
        width: "72.5%",
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        textAlign: "center",
    },
    loginButton: {
        marginBottom: 30
    },
    signUpButton: {
        backgroundColor: "#ABABAB",
        marginBottom: 60,
        borderColor: "black",
        borderWidth: 1
    },
    descriptionText: {
        fontSize: 20,
    },
});
