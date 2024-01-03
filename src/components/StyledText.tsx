import { Text, TextProps } from "@components/Themed";

export function MakoText(props: TextProps) {
    return (
        <Text {...props} style={[props.style, { fontFamily: "Mako" }]} />
    );
}

export function KatibehText(props: TextProps) {
    return (
        <Text {...props} style={[props.style, { fontFamily: "Katibeh" }]} />
    );
}
