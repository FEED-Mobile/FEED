import CommentIcon from "@components/icons/CommentIcon";
import LikeIcon from "@components/icons/LikeIcon";
import SaveIcon from "@components/icons/SaveIcon";
import MediaFlatlist from "@components/MediaFlatlist";
import Avatar from "@components/ui/Avatar";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import useCommentsQuery from "@hooks/useCommentsQuery";
import useLikesMutation from "@hooks/useLikesMutation";
import useLikesQuery from "@hooks/useLikesQuery";
import usePostQuery from "@hooks/usePostQuery";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function IndividualPost({ id }: { id: number }) {
	const {
		data: post,
		isPending: isPostPending,
		error: postError,
	} = usePostQuery(id);
	const {
		data: likesData,
		isPending: isLikesPending,
		error: likesError,
	} = useLikesQuery(id);
	const {
		data: commentsData,
		isPending: isCommentsPending,
		error: commentsError,
	} = useCommentsQuery(id);
	const { updateUserLiked } = useLikesMutation(id);

	if (
		isPostPending ||
		postError ||
		isLikesPending ||
		likesError ||
		isCommentsPending ||
		commentsError
	) {
		return <></>;
	}

	const updateLiked = () => {
		updateUserLiked.mutate(!likesData.userLiked);
	};

	return (
		<View>
			<Button
				onPress={() => router.push(`/home/${post.users?.id}`)}
				style={styles.userInfoContainer}
			>
				<Avatar uri={post.users?.avatar ?? ""} style={styles.avatar} />
				<View>
					<Text style={[styles.userInfoText, styles.username]}>
						{post.users?.username}
					</Text>
					<Text style={[styles.userInfoText, styles.location]}>
						{post.location}
					</Text>
				</View>
			</Button>
			<MediaFlatlist media={post.media} />

			<View style={styles.buttonContainer}>
				<Button style={styles.button} onPress={updateLiked}>
					<LikeIcon liked={likesData.userLiked} />
					<Text style={styles.buttonText}>{likesData.likeCount}</Text>
				</Button>
				<Button
					style={styles.button}
					onPress={() => router.push(`/comments/${id}`)}
				>
					<CommentIcon />
					<Text style={styles.buttonText}>{commentsData.length}</Text>
				</Button>
				<Button style={styles.button}>
					<SaveIcon />
					<Text style={styles.buttonText}>Save</Text>
				</Button>
			</View>

			<View>
				<Text>{post.title}</Text>
				<Text>{post.description}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	userInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 1,
		backgroundColor: Styles.colors.darkgreen.primary,
	},
	userInfoText: {
		fontFamily: Styles.fonts.text.regular,
	},
	username: {
		fontSize: 18,
	},
	location: {
		fontSize: 14,
		color: Styles.colors.gray.primary,
	},
	buttonContainer: {
		width: "50%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	buttonText: {
		color: Styles.colors.gray.primary,
	},
});
