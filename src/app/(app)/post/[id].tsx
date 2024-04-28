import usePostQuery from "@hooks/usePostQuery";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function PostPage() {
	const { id } = useLocalSearchParams();
	const {
		data: post,
		isPending,
		error,
	} = usePostQuery(Array.isArray(id) ? "" : id);

	if (isPending || error) {
		return <></>;
	}

	return (
		<View>
			<Text>{post.title}</Text>
			<Image source={{ uri: post.media[0] }} width={150} height={150} />
		</View>
	);
}
