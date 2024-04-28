import { supabase } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";

/**
 * Query for comments from a post from Supabase
 * @returns
 */
export default function useCommentsQuery(postId: number) {
	return useQuery({
		queryKey: ["comments", postId],
		queryFn: async () => {
			if (!postId) {
				throw Error("No post ID provided.");
			}

			console.log(`Getting comments data for post ID ${postId}...`);

			// Retrieve comments for post from public.comments table
			const { data, error } = await supabase
				.from("comments")
				.select(
					`*,
					users (
						id,
						username,
						avatar
					)
				`
				)
				.eq("post_id", postId);

			if (error) {
				throw error;
			}

			console.log(`Received comments for ID ${postId}.`);
			return data;
		},
		staleTime: 120000,
	});
}
