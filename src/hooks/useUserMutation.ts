import { supabase } from "@lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "@type/supabase";
import { router } from "expo-router";
import { Alert } from "react-native";

export default function useUserMutation(userId: string) {
	const queryClient = useQueryClient();

	const updateUser = useMutation({
		mutationFn: async (updates: Partial<User>) => {
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

	return { updateUser };
}
