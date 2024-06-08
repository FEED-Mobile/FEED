import IndividualPost from "@components/post/Post";
import { useLocalSearchParams } from "expo-router";

export default function PostPage() {
	const { id } = useLocalSearchParams();
	if (!id || Array.isArray(id)) {
		return <></>;
	}
	const postId = parseInt(id);

	return <IndividualPost id={postId} />;
}
