/**
 * Global store for user
 */
import { supabase } from "@lib/supabase";
import { User } from "@type/supabase";
import { create } from "zustand";

type CurrentUserState = {
	currentUser: User | null;
	actions: {
		setCurrentUser: (user: User) => void;
		updateCurrentUserById: (id: string) => Promise<void>;
		signIn: (email: string, password: string) => Promise<void>;
		signOut: () => Promise<void>;
	};
};

const useCurrentUserStore = create<CurrentUserState>((set, get) => ({
	currentUser: null,
	actions: {
		setCurrentUser: (user) => set({ currentUser: user }),
		updateCurrentUserById: async (id) => {
			// Retrieve user row from public.users table
			const { data: user, error } = await supabase
				.from("users")
				.select()
				.eq("id", id ?? "")
				.limit(1)
				.single();

			if (error) {
				throw error;
			}

			set({ currentUser: user });
		},
		signIn: async (email, password) => {
			// Attempt sign in
			const {
				data: { user: authUser },
				error: authError,
			} = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});

			if (authError || !authUser) {
				throw authError;
			}

			await get().actions.updateCurrentUserById(authUser?.id);
		},
		signOut: async () => {
			// Attempt to sign out
			const { error } = await supabase.auth.signOut();

			if (error) {
				throw error;
			}

			set({ currentUser: null });
		},
	},
}));

export const useCurrentUser = () =>
	useCurrentUserStore((state) => state.currentUser);
export const useCurrentUserActions = () =>
	useCurrentUserStore((state) => state.actions);
