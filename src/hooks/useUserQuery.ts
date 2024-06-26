import { supabase } from "@lib/supabase";
import { useQuery } from "@tanstack/react-query";

/**
 * Query for user object from Supabase
 * @returns
 */
export default function useUserQuery(id?: string) {
	return useQuery({
		queryKey: ["user", id],
		queryFn: async () => {
			console.log("Getting user data...");
			const { data, error: authError } = await supabase.auth.getSession();

			if (authError || !data.session?.user.id) {
				throw authError;
			}

			// Retrieve user row from public.users table
			const { data: user, error } = await supabase
				.from("users")
				.select()
				.eq("id", id ? id : data.session.user.id) // If no ID, return logged in user
				.limit(1)
				.single();

			if (error) {
				throw error;
			}

			console.log("Received user data.");
			return user;
		},
		staleTime: 120000,
	});
}
