import { supabase } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";

/**
 * Query for users based on search input
 * @returns
 */
export default function useSearchUserQuery(searchQuery: string) {
	return useQuery({
		queryKey: ["searchUser", searchQuery],
		queryFn: async () => {
			if (!searchQuery) {
				return [];
			}

			console.log(`Searching for users like "${searchQuery}"...`);
			// Retrieve users from public.users table
			const { data: users, error } = await supabase
				.rpc("search_users_by_username_prefix", { prefix: searchQuery })
				.limit(5);

			if (error) {
				throw error;
			}

			console.log(`Received users like "${searchQuery}".`);
			return users;
		},
		staleTime: 60000,
	});
}
