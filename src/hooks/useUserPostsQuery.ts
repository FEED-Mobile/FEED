import { supabase } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";

/**
 * Query for user's posts from Supabase
 * @returns
 */
export default function useUserPostsQuery(userId: string) {
	return useQuery({
		queryKey: ["posts", userId],
		queryFn: async () => {
			console.log(`Getting posts for ${userId}...`);

			if (!userId) {
				throw Error("User ID cannot be empty.");
			}

			// Retrieve user row from public.users table
			const { data: posts, error } = await supabase
				.from("posts")
				.select()
				.eq("user_id", userId);

			if (error) {
				throw error;
			}

			console.log(`Received posts for ${userId}.`);
			return posts;
		},
		staleTime: 120000,
	});
}
