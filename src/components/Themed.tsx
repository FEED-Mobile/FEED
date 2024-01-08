/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
    Pressable as DefaultPressable,
    Text as DefaultText,
    TextInput as DefaultTextInput,
    useColorScheme,
    View as DefaultView,
    PressableProps as DefaultPressableProps,
    StyleProp,
    ViewStyle,
    PressableStateCallbackType,
} from "react-native";

import Colors from "@constants/Colors";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type PressableProps = ThemeProps &
    DefaultPressableProps & {
        style?:
            | StyleProp<ViewStyle>
            | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
    };

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme() ?? "light";
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
    return <DefaultTextInput style={[{ color, borderBottomColor: color, borderBottomWidth: 1 }, style ]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Pressable(props: PressableProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "text"
    );

    return (
        <DefaultPressable
            style={(state) => [
                { backgroundColor },
                typeof style === "function" ? style(state) : style,
            ]}
            {...otherProps}
        />
    );
}
