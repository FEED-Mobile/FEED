import { supabase } from "@lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "@type/supabase";
import { router } from "expo-router";
import { Alert } from "react-native";

type UserMutationArgs = {
	userId: string;
	updates: Partial<User>;
};

export default function useUserMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ userId, updates }: UserMutationArgs) => {
			const { error } = await supabase
				.from("users")
				.update(updates)
				.eq("id", userId);

			if (error) {
				throw error;
			}
		},
		onSuccess: () => {
			router.back();
		},
		onError: (error) => {
			Alert.alert(
				"An error occurred in updating profile data: ",
				error.message
			);
			console.error(
				"An error occurred in updating profile data: ",
				error
			);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});
}
