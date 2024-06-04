import { supabase } from "@lib/supabase";
import { useInfiniteQuery } from "@tanstack/react-query";

/**
 * Query for other users' posts from Supabase
 * @returns
 */
export default function useFeedQuery() {
	return useInfiniteQuery({
		queryKey: ["feed"],
		queryFn: async ({ pageParam }) => {
			console.log("Getting feed data...");
			const { data, error: authError } = await supabase.auth.getSession();

			if (authError || !data.session?.user.id) {
				throw authError;
			}

			// Retrieve latest posts not posted by user
			const { data: posts, error } = await supabase
				.from("posts")
				.select()
				.neq("user_id", data.session.user.id)
				.lt("created_at", pageParam)
				.order("created_at", { ascending: false })
				.limit(10);

			if (error) {
				throw error;
			}

			return posts;
		},
		initialPageParam: new Date().toISOString(),
		getNextPageParam: (lastPage) =>
			lastPage.length
				? lastPage[lastPage.length - 1].created_at
				: undefined,
	});
}
