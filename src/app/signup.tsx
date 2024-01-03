import React, { useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { supabase } from "@lib/supabase";
import { Redirect, router } from "expo-router";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail() {
        setLoading(true);
        if (password != confirmPassword) {
            Alert.alert("Passwords do not match.");
        }

        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username
                }
            }
        });

        if (error) {
            Alert.alert(error.message);
            return;
        }
        if (!session) {
            Alert.alert("Please check your inbox for email verification!");
            return;
        }
        router.replace("/(app)")
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <TextInput
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    placeholder="User"
                    autoCapitalize={"none"}
                    style={styles.textInput}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Email"
                    autoCapitalize={"none"}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={"none"}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <TextInput
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    autoCapitalize={"none"}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Pressable
                    disabled={loading}
                    onPress={() => signUpWithEmail()}
                    style={styles.pressable}
                >
                    <Text style={styles.pressableText}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: "stretch",
    },
    mt20: {
        marginTop: 20,
    },
    textInput: {
        color: "white"
    },
    pressable: {
        backgroundColor: "purple",
        padding: 10,
    },
    pressableText: {
        color: "white",
    },
});
