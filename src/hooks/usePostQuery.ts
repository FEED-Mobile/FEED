import { supabase } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";

/**
 * Query for a post object from Supabase
 * @returns
 */
export default function usePostQuery(postId: number) {
	return useQuery({
		queryKey: ["post", postId],
		queryFn: async () => {
			if (!postId) {
				throw Error("No post ID provided.");
			}

			console.log(`Getting post data for ID ${postId}...`);
			// Retrieve post row from public.posts table
			const { data: post, error } = await supabase
				.from("posts")
				.select(
					`*,
					users (
						id,
						username,
						avatar
					)
				`
				)
				.eq("id", postId)
				.limit(1)
				.single();

			if (error) {
				throw error;
			}

			console.log(`Received post ID ${postId} data.`);
			return post;
		},
		staleTime: 120000,
	});
}
