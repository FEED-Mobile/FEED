import { supabase } from "@lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";

export default function useFollowMutation(userId: string) {
	const queryClient = useQueryClient();

	const updateUserFollow = useMutation({
		mutationFn: async (newUserFollowed: boolean) => {
			if (!userId) {
				throw Error("No user ID provided.");
			}

			const { data, error: authError } = await supabase.auth.getSession();

			if (authError || !data.session?.user.id) {
				throw authError;
			}

			if (newUserFollowed) {
				const { error } = await supabase.from("following").insert({
					follower: data.session.user.id,
					followee: userId,
				});

				if (error) {
					throw error;
				}
			} else {
				const { error } = await supabase
					.from("following")
					.delete()
					.eq("follower", data.session.user.id)
					.eq("followee", userId);

				if (error) {
					throw error;
				}
			}
		},
		onError: (error) => {
			Alert.alert(
				"An error occurred when updating your follow: ",
				error.message
			);
			console.error("An error occurred updating your follow: ", error);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["userStats", userId] });
		},
	});

	return {
		updateUserFollow,
	};
}
