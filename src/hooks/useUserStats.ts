import { supabase } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";

/**
 * Query for number of posts, followers, and following of a user from Supabase
 * @returns
 */
export default function useUserStats(userId: string) {
	return useQuery({
		queryKey: ["userStats", userId],
		queryFn: async () => {
			if (!userId) {
				throw Error("No user ID provided.");
			}

			console.log(`Getting user stats data for user ID ${userId}...`);

			const { data, error: authError } = await supabase.auth.getSession();

			if (authError || !data.session?.user.id) {
				throw authError;
			}

			// Retrieve number of posts for user from public.posts table
			const { count: posts, error: postsError } = await supabase
				.from("posts")
				.select("*", { count: "exact", head: true })
				.eq("user_id", userId);

			if (postsError) {
				throw postsError;
			}

			// Retrieve number of followers for user from public.following table
			const { count: followers, error: followersError } = await supabase
				.from("following")
				.select("*", { count: "exact", head: true })
				.eq("followee", userId);

			if (followersError) {
				throw followersError;
			}
			// Retrieve number of following for user from public.following table
			const { count: following, error: followingError } = await supabase
				.from("following")
				.select("*", { count: "exact", head: true })
				.eq("follower", userId);

			if (followingError) {
				throw followingError;
			}

			// Retrieve if logged in user follows user from public.following table
			const { count: userFollowed, error: userFollowedError } =
				await supabase
					.from("following")
					.select("*", { count: "exact", head: true })
					.eq("follower", data.session.user.id)
					.eq("followee", userId);

			if (userFollowedError) {
				throw userFollowedError;
			}

			console.log(`Received user stats for ID ${userId}.`);
			return {
				postCount: posts ?? 0,
				followerCount: followers ?? 0,
				followingCount: following ?? 0,
				userFollowed: Boolean(userFollowed),
			};
		},
		staleTime: 120000,
	});
}
