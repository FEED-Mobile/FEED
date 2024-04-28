import CommentIcon from "@components/icons/CommentIcon";
import LikeIcon from "@components/icons/LikeIcon";
import SaveIcon from "@components/icons/SaveIcon";
import MediaFlatlist from "@components/MediaFlatlist";
import Button from "@components/ui/Button";
import useLikesQuery from "@hooks/useLikesQuery";
import usePostQuery from "@hooks/usePostQuery";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function PostPage() {
	const { id } = useLocalSearchParams();
	const {
		data: post,
		isPending: isPostPending,
		error: postError,
	} = usePostQuery(Array.isArray(id) ? "" : id);
	const {
		data: likesData,
		isPending: isLikesPending,
		error: likesError,
	} = useLikesQuery(Array.isArray(id) ? "" : id);

	if (isPostPending || postError || isLikesPending || likesError) {
		return <></>;
	}

	return (
		<View>
			<Text>{post.title}</Text>
			<MediaFlatlist media={post.media} />
			<View style={styles.buttonContainer}>
				<Button style={styles.button}>
					<LikeIcon />
					<Text>{likesData.likeCount}</Text>
				</Button>
				<Button style={styles.button}>
					<CommentIcon />
					<Text>Comment</Text>
				</Button>
				<Button style={styles.button}>
					<SaveIcon />
					<Text>Save</Text>
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: "60%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
	},
});
