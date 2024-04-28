import { Image, ImageStyle, View } from "react-native";

type AvatarProps = {
	uri: string | null;
	style: ImageStyle;
};

export default function Avatar({ uri, style }: AvatarProps) {
	if (!uri) {
		return <View style={style}></View>;
	}

	return <Image source={{ uri }} style={style} />;
}
