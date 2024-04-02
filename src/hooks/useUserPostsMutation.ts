import { supabase } from "@lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InsertPost } from "@type/supabase";
import { router } from "expo-router";
import { Alert } from "react-native";

export default function useUserPostsMutation(userId: string) {
	const queryClient = useQueryClient();

	const insertUserPost = useMutation({
		mutationFn: async (post: InsertPost) => {
			// Insert new post
			const { error } = await supabase.from("posts").insert({
				user_id: userId,
				title: post.title,
				description: post.description,
				location: post.location,
				media: post.media,
			});

			if (error) {
				throw error;
			}
		},
		onSuccess: () => {
			router.back();
		},
		onError: (error) => {
			Alert.alert(
				"An error occurred when adding your post: ",
				error.message
			);
			console.error("An error occurred when adding your post: ", error);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["posts", userId] });
		},
	});

	return {
		insertUserPost,
	};
}
