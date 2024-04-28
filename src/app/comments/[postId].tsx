import Avatar from "@components/ui/Avatar";
import Styles from "@constants/Styles";
import useCommentsQuery from "@hooks/useCommentsQuery";
import { Comment } from "@type/supabase";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type CommentProps = {
	comment: Comment & {
		users: {
			id: string;
			username: string;
			avatar: string | null;
		} | null;
	};
};

function CommentComponent({ comment }: CommentProps) {
	return (
		<View style={commentComponentStyles.container}>
			<Avatar
				uri={comment.users?.avatar ?? ""}
				style={commentComponentStyles.avatar}
			/>
			<View>
				<Text
					style={[
						commentComponentStyles.text,
						commentComponentStyles.username,
					]}
				>
					{comment.users?.username}
				</Text>
				<Text style={commentComponentStyles.text}>
					{comment.content}
				</Text>
			</View>
		</View>
	);
}

export default function CommentsModal() {
	const { postId } = useLocalSearchParams();
	if (Array.isArray(postId)) {
		return <></>;
	}
	const parsedPostId = parseInt(postId);

	const { data: comments, isPending, error } = useCommentsQuery(parsedPostId);

	if (isPending || error) {
		return <></>;
	}

	return (
		<View style={commentsModalStyles.container}>
			<View style={commentsModalStyles.header}>
				<Text style={commentsModalStyles.headerText}>Comments</Text>
			</View>
			{comments.map((comment) => (
				<CommentComponent key={comment.id} comment={comment} />
			))}
		</View>
	);
}

const commentComponentStyles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		padding: 16,
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		borderColor: Styles.colors.black.primary,
		borderWidth: 1,
		backgroundColor: Styles.colors.darkgreen.primary,
	},
	text: {
		fontFamily: Styles.fonts.text.regular,
	},
	username: {
		fontFamily: Styles.fonts.text.semibold,
	},
});

const commentsModalStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		paddingVertical: 24,
		borderBottomWidth: 1,
		borderColor: Styles.colors.gray.primary,
	},
	headerText: {
		fontFamily: Styles.fonts.text.semibold,
		fontSize: 18,
		textAlign: "center",
	},
});
