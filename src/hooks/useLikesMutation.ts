import { supabase } from "@lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";

export default function useLikesMutation(postId: number) {
	const queryClient = useQueryClient();

	const updateUserLiked = useMutation({
		mutationFn: async (newUserLiked: boolean) => {
			if (!postId) {
				throw Error("No post ID provided.");
			}

			const { data, error: authError } = await supabase.auth.getSession();

			if (authError || !data.session?.user.id) {
				throw authError;
			}

			if (newUserLiked) {
				const { error } = await supabase
					.from("likes")
					.insert({ user_id: data.session.user.id, post_id: postId });

				if (error) {
					throw error;
				}
			} else {
				const { error } = await supabase
					.from("likes")
					.delete()
					.eq("post_id", postId)
					.eq("user_id", data.session.user.id);

				if (error) {
					throw error;
				}
			}
		},
		onError: (error) => {
			Alert.alert(
				"An error occurred when updating your like: ",
				error.message
			);
			console.error("An error occurred updating your like: ", error);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["likes", postId] });
		},
	});

	return {
		updateUserLiked,
	};
}
