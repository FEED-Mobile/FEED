import Avatar from "@components/ui/Avatar";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import useCommentsMutation from "@hooks/useCommentsMutation";
import useCommentsQuery from "@hooks/useCommentsQuery";
import { Comment } from "@type/supabase";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";

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
	const [commentDraft, setCommentDraft] = useState("");

	if (Array.isArray(postId)) {
		return <></>;
	}
	const parsedPostId = parseInt(postId);

	const { data: comments, isPending, error } = useCommentsQuery(parsedPostId);
	const { uploadComment } = useCommentsMutation(parsedPostId);

	if (isPending || error) {
		return <></>;
	}

	/**
	 * Upload comment to Supabase
	 */
	const sendComment = () => {
		if (!commentDraft) {
			return;
		}

		uploadComment.mutate(commentDraft);
		setCommentDraft("");
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={commentsModalStyles.container}>
				<View>
					<View style={commentsModalStyles.header}>
						<Text style={commentsModalStyles.headerText}>
							Comments
						</Text>
					</View>
					{comments.map((comment) => (
						<CommentComponent key={comment.id} comment={comment} />
					))}
				</View>
				<View style={commentsModalStyles.sendCommentContainer}>
					<TextInput
						onChangeText={(text) => setCommentDraft(text)}
						value={commentDraft}
						placeholder="Add a comment"
						style={commentsModalStyles.textInput}
					></TextInput>
					<Button
						style={commentsModalStyles.sendButton}
						onPress={sendComment}
						disabled={commentDraft.length === 0}
					>
						<Text>Send</Text>
					</Button>
				</View>
			</View>
		</TouchableWithoutFeedback>
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
	sendCommentContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	textInput: {
		width: "75%",
		padding: 16,
		borderWidth: 1,
		borderColor: Styles.colors.gray.primary,
		borderRadius: 32,
		fontFamily: Styles.fonts.text.regular,
	},
	sendButton: {
		borderWidth: 1,
		borderColor: Styles.colors.black.primary,
		padding: 8,
		borderRadius: 16,
	},
});
