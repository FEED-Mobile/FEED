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
import { router } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        setLoading(false);
    }

    async function signUpWithEmail() {
        setLoading(true);
        router.push("/signup")
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
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
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Pressable disabled={loading} onPress={() => signInWithEmail()} style={styles.pressable}>
                    <Text style={styles.pressableText}>Login</Text>
                </Pressable>
            </View>
            <View style={styles.verticallySpaced}>
                <Pressable disabled={loading} onPress={() => signUpWithEmail()} style={styles.pressable}>
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
        padding: 10
    },
    pressableText: {
        color: "white"
    }
});
