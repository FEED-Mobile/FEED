import { supabase } from "@lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";

export default function useCommentsMutation(postId: number) {
	const queryClient = useQueryClient();

	const uploadComment = useMutation({
		mutationFn: async (content: string) => {
			if (!postId) {
				throw Error("No post ID provided.");
			}

			const { data, error: authError } = await supabase.auth.getSession();

			if (authError || !data.session?.user.id) {
				throw authError;
			}

			const { error } = await supabase.from("comments").insert({
				content: content,
				user_id: data.session.user.id,
				post_id: postId,
			});

			if (error) {
				throw error;
			}
		},
		onError: (error) => {
			Alert.alert(
				"An error occurred when uploading your comment: ",
				error.message
			);
			console.error("An error occurred uploading your comment: ", error);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["comments", postId] });
		},
	});

	return {
		uploadComment,
	};
}
