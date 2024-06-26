export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	graphql_public: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			graphql: {
				Args: {
					operationName?: string;
					query?: string;
					variables?: Json;
					extensions?: Json;
				};
				Returns: Json;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	public: {
		Tables: {
			comments: {
				Row: {
					content: string;
					created_at: string;
					id: number;
					post_id: number;
					user_id: string;
				};
				Insert: {
					content: string;
					created_at?: string;
					id?: number;
					post_id: number;
					user_id: string;
				};
				Update: {
					content?: string;
					created_at?: string;
					id?: number;
					post_id?: number;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "comments_post_id_fkey";
						columns: ["post_id"];
						isOneToOne: false;
						referencedRelation: "posts";
						referencedColumns: ["id"];
					},
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
						referencedRelation: "posts";
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
			posts: {
				Row: {
					created_at: string;
					description: string | null;
					id: number;
					location: string | null;
					media: string[];
					rating: number | null;
					title: string | null;
					user_id: string;
				};
				Insert: {
					created_at?: string;
					description?: string | null;
					id?: number;
					location?: string | null;
					media: string[];
					rating?: number | null;
					title?: string | null;
					user_id: string;
				};
				Update: {
					created_at?: string;
					description?: string | null;
					id?: number;
					location?: string | null;
					media?: string[];
					rating?: number | null;
					title?: string | null;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "posts_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			posts_tags: {
				Row: {
					created_at: string;
					post_id: number;
					tag_id: number;
				};
				Insert: {
					created_at?: string;
					post_id: number;
					tag_id: number;
				};
				Update: {
					created_at?: string;
					post_id?: number;
					tag_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "posts_tags_post_id_fkey";
						columns: ["post_id"];
						isOneToOne: false;
						referencedRelation: "posts";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "posts_tags_tag_id_fkey";
						columns: ["tag_id"];
						isOneToOne: false;
						referencedRelation: "tags";
						referencedColumns: ["id"];
					},
				];
			};
			tags: {
				Row: {
					created_at: string;
					id: number;
					name: string | null;
					user_id: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					name?: string | null;
					user_id: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					name?: string | null;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "tags_user_id_fkey";
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
					full_name: string | null;
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
					full_name?: string | null;
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
					full_name?: string | null;
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
			search_users_by_username_prefix: {
				Args: {
					prefix: string;
				};
				Returns: {
					avatar: string | null;
					bio: string | null;
					birthday: string | null;
					created_at: string;
					email: string;
					full_name: string | null;
					id: string;
					location: string | null;
					username: string;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	storage: {
		Tables: {
			buckets: {
				Row: {
					allowed_mime_types: string[] | null;
					avif_autodetection: boolean | null;
					created_at: string | null;
					file_size_limit: number | null;
					id: string;
					name: string;
					owner: string | null;
					owner_id: string | null;
					public: boolean | null;
					updated_at: string | null;
				};
				Insert: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id: string;
					name: string;
					owner?: string | null;
					owner_id?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Update: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id?: string;
					name?: string;
					owner?: string | null;
					owner_id?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			migrations: {
				Row: {
					executed_at: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Insert: {
					executed_at?: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Update: {
					executed_at?: string | null;
					hash?: string;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			objects: {
				Row: {
					bucket_id: string | null;
					created_at: string | null;
					id: string;
					last_accessed_at: string | null;
					metadata: Json | null;
					name: string | null;
					owner: string | null;
					owner_id: string | null;
					path_tokens: string[] | null;
					updated_at: string | null;
					version: string | null;
				};
				Insert: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					owner_id?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Update: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					owner_id?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "objects_bucketId_fkey";
						columns: ["bucket_id"];
						isOneToOne: false;
						referencedRelation: "buckets";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			can_insert_object: {
				Args: {
					bucketid: string;
					name: string;
					owner: string;
					metadata: Json;
				};
				Returns: undefined;
			};
			extension: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			filename: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			foldername: {
				Args: {
					name: string;
				};
				Returns: unknown;
			};
			get_size_by_bucket: {
				Args: Record<PropertyKey, never>;
				Returns: {
					size: number;
					bucket_id: string;
				}[];
			};
			search: {
				Args: {
					prefix: string;
					bucketname: string;
					limits?: number;
					levels?: number;
					offsets?: number;
					search?: string;
					sortcolumn?: string;
					sortorder?: string;
				};
				Returns: {
					name: string;
					id: string;
					updated_at: string;
					created_at: string;
					last_accessed_at: string;
					metadata: Json;
				}[];
			};
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

// Schema: graphql_public
// Functions
export type ArgsGraphql =
	Database["graphql_public"]["Functions"]["graphql"]["Args"];
export type ReturnTypeGraphql =
	Database["graphql_public"]["Functions"]["graphql"]["Returns"];

// Schema: public
// Tables
export type Comment = Database["public"]["Tables"]["comments"]["Row"];
export type InsertComment = Database["public"]["Tables"]["comments"]["Insert"];
export type UpdateComment = Database["public"]["Tables"]["comments"]["Update"];

export type Following = Database["public"]["Tables"]["following"]["Row"];
export type InsertFollowing =
	Database["public"]["Tables"]["following"]["Insert"];
export type UpdateFollowing =
	Database["public"]["Tables"]["following"]["Update"];

export type Like = Database["public"]["Tables"]["likes"]["Row"];
export type InsertLike = Database["public"]["Tables"]["likes"]["Insert"];
export type UpdateLike = Database["public"]["Tables"]["likes"]["Update"];

export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type InsertPost = Database["public"]["Tables"]["posts"]["Insert"];
export type UpdatePost = Database["public"]["Tables"]["posts"]["Update"];

export type PostTag = Database["public"]["Tables"]["posts_tags"]["Row"];
export type InsertPostTag =
	Database["public"]["Tables"]["posts_tags"]["Insert"];
export type UpdatePostTag =
	Database["public"]["Tables"]["posts_tags"]["Update"];

export type Tag = Database["public"]["Tables"]["tags"]["Row"];
export type InsertTag = Database["public"]["Tables"]["tags"]["Insert"];
export type UpdateTag = Database["public"]["Tables"]["tags"]["Update"];

export type User = Database["public"]["Tables"]["users"]["Row"];
export type InsertUser = Database["public"]["Tables"]["users"]["Insert"];
export type UpdateUser = Database["public"]["Tables"]["users"]["Update"];

// Functions
export type ArgsSearchUserByUsernamePrefix =
	Database["public"]["Functions"]["search_users_by_username_prefix"]["Args"];
export type ReturnTypeSearchUserByUsernamePrefix =
	Database["public"]["Functions"]["search_users_by_username_prefix"]["Returns"];

// Schema: storage
// Tables
export type Bucket = Database["storage"]["Tables"]["buckets"]["Row"];
export type InsertBucket = Database["storage"]["Tables"]["buckets"]["Insert"];
export type UpdateBucket = Database["storage"]["Tables"]["buckets"]["Update"];

export type Migration = Database["storage"]["Tables"]["migrations"]["Row"];
export type InsertMigration =
	Database["storage"]["Tables"]["migrations"]["Insert"];
export type UpdateMigration =
	Database["storage"]["Tables"]["migrations"]["Update"];

export type Object = Database["storage"]["Tables"]["objects"]["Row"];
export type InsertObject = Database["storage"]["Tables"]["objects"]["Insert"];
export type UpdateObject = Database["storage"]["Tables"]["objects"]["Update"];

// Functions
export type ArgsCanInsertObject =
	Database["storage"]["Functions"]["can_insert_object"]["Args"];
export type ReturnTypeCanInsertObject =
	Database["storage"]["Functions"]["can_insert_object"]["Returns"];

export type ArgsExtension =
	Database["storage"]["Functions"]["extension"]["Args"];
export type ReturnTypeExtension =
	Database["storage"]["Functions"]["extension"]["Returns"];

export type ArgsFilename = Database["storage"]["Functions"]["filename"]["Args"];
export type ReturnTypeFilename =
	Database["storage"]["Functions"]["filename"]["Returns"];

export type ArgsFoldername =
	Database["storage"]["Functions"]["foldername"]["Args"];
export type ReturnTypeFoldername =
	Database["storage"]["Functions"]["foldername"]["Returns"];

export type ArgsGetSizeByBucket =
	Database["storage"]["Functions"]["get_size_by_bucket"]["Args"];
export type ReturnTypeGetSizeByBucket =
	Database["storage"]["Functions"]["get_size_by_bucket"]["Returns"];

export type ArgsSearch = Database["storage"]["Functions"]["search"]["Args"];
export type ReturnTypeSearch =
	Database["storage"]["Functions"]["search"]["Returns"];
