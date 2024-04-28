import { supabase } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";

/**
 * Query for likes from a post from Supabase
 * @returns
 */
export default function useLikesQuery(postId: number) {
	return useQuery({
		queryKey: ["likes", postId],
		queryFn: async () => {
			if (!postId) {
				throw Error("No post ID provided.");
			}

			console.log(`Getting likes data for post ID ${postId}...`);

			const { data, error: authError } = await supabase.auth.getSession();

			if (authError || !data.session?.user.id) {
				throw authError;
			}

			// Retrieve number of likes from public.likes table
			const { count: likes, error: likesError } = await supabase
				.from("likes")
				.select("*", { count: "exact", head: true })
				.eq("post_id", postId);

			if (likesError) {
				throw likesError;
			}

			// Retrieve number of likes from public.users table
			const { count: userLiked, error: userLikedError } = await supabase
				.from("likes")
				.select("*", { count: "exact", head: true })
				.eq("post_id", postId)
				.eq("user_id", data.session.user.id);

			if (userLikedError) {
				throw userLikedError;
			}

			console.log(`Received likes for ID ${postId}.`);
			return { likeCount: likes ?? 0, userLiked: Boolean(userLiked) };
		},
		staleTime: 120000,
	});
}
