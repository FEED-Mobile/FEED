import { Text, TextProps } from "@components/Themed";
import Fonts from "@constants/Fonts";

export function MakoText(props: TextProps) {
    return (
        <Text {...props} style={[props.style, { fontFamily: Fonts.text }]} />
    );
}

export function KatibehText(props: TextProps) {
    return (
        <Text {...props} style={[props.style, { fontFamily: Fonts.title }]} />
    );
}
