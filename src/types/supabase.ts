export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			comments: {
				Row: {
					content: string;
					created_at: string;
					id: number;
					user_id: string;
				};
				Insert: {
					content: string;
					created_at?: string;
					id?: number;
					user_id: string;
				};
				Update: {
					content?: string;
					created_at?: string;
					id?: number;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "comments_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			following: {
				Row: {
					created_at: string;
					followee: string;
					follower: string;
					id: number;
				};
				Insert: {
					created_at?: string;
					followee: string;
					follower: string;
					id?: number;
				};
				Update: {
					created_at?: string;
					followee?: string;
					follower?: string;
					id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "following_followee_fkey";
						columns: ["followee"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "following_follower_fkey";
						columns: ["follower"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			likes: {
				Row: {
					created_at: string;
					id: number;
					post_id: number;
					user_id: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					post_id: number;
					user_id: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					post_id?: number;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "likes_post_id_fkey";
						columns: ["post_id"];
						isOneToOne: false;
						referencedRelation: "postings";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "likes_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			postings: {
				Row: {
					created_at: string;
					description: string | null;
					id: number;
					images: string[];
					location: string | null;
					rating: number | null;
					title: string | null;
					user_id: string;
				};
				Insert: {
					created_at?: string;
					description?: string | null;
					id?: number;
					images: string[];
					location?: string | null;
					rating?: number | null;
					title?: string | null;
					user_id: string;
				};
				Update: {
					created_at?: string;
					description?: string | null;
					id?: number;
					images?: string[];
					location?: string | null;
					rating?: number | null;
					title?: string | null;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "postings_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			users: {
				Row: {
					avatar: string | null;
					bio: string | null;
					birthday: string | null;
					created_at: string;
					email: string;
					id: string;
					location: string | null;
					username: string;
				};
				Insert: {
					avatar?: string | null;
					bio?: string | null;
					birthday?: string | null;
					created_at?: string;
					email?: string;
					id: string;
					location?: string | null;
					username?: string;
				};
				Update: {
					avatar?: string | null;
					bio?: string | null;
					birthday?: string | null;
					created_at?: string;
					email?: string;
					id?: string;
					location?: string | null;
					username?: string;
				};
				Relationships: [
					{
						foreignKeyName: "users_id_fkey";
						columns: ["id"];
						isOneToOne: true;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (Database["public"]["Tables"] & Database["public"]["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
				Database["public"]["Views"])
		? (Database["public"]["Tables"] &
				Database["public"]["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof Database["public"]["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
		? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof Database["public"]["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
		? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof Database["public"]["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
		? Database["public"]["Enums"][PublicEnumNameOrOptions]
		: never;
