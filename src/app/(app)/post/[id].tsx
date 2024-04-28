import CommentIcon from "@components/icons/CommentIcon";
import LikeIcon from "@components/icons/LikeIcon";
import SaveIcon from "@components/icons/SaveIcon";
import MediaFlatlist from "@components/MediaFlatlist";
import Button from "@components/ui/Button";
import useLikesMutation from "@hooks/useLikesMutation";
import useLikesQuery from "@hooks/useLikesQuery";
import usePostQuery from "@hooks/usePostQuery";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function PostPage() {
	const { id } = useLocalSearchParams();
	if (Array.isArray(id)) {
		return <></>;
	}
	const postId = parseInt(id);

	const {
		data: post,
		isPending: isPostPending,
		error: postError,
	} = usePostQuery(postId);
	const {
		data: likesData,
		isPending: isLikesPending,
		error: likesError,
	} = useLikesQuery(postId);
	const { updateUserLiked } = useLikesMutation(postId);

	if (isPostPending || postError || isLikesPending || likesError) {
		return <></>;
	}

	const updateLiked = () => {
		updateUserLiked.mutate(!likesData.userLiked);
	};

	return (
		<View>
			<Text>{post.title}</Text>
			<MediaFlatlist media={post.media} />
			<View style={styles.buttonContainer}>
				<Button style={styles.button} onPress={updateLiked}>
					<LikeIcon liked={likesData.userLiked} />
					<Text>{likesData.likeCount}</Text>
				</Button>
				<Button
					style={styles.button}
					onPress={() => router.push(`/comments/${postId}`)}
				>
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
