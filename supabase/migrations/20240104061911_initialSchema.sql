create table "public"."comments" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "content" text not null,
    "user_id" uuid not null
);


alter table "public"."comments" enable row level security;

create table "public"."following" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "follower" uuid not null,
    "followee" uuid not null
);


alter table "public"."following" enable row level security;

create table "public"."likes" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "user_id" uuid not null,
    "post_id" bigint not null
);


alter table "public"."likes" enable row level security;

create table "public"."postings" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "images" text[] not null,
    "caption" text,
    "location" text,
    "rating" real,
    "user_id" uuid not null
);


alter table "public"."postings" enable row level security;

alter table "public"."users" add column "avatar" text;

alter table "public"."users" add column "bio" text;

alter table "public"."users" add column "birthday" date not null;

alter table "public"."users" add column "followers" text[];

alter table "public"."users" add column "location" text;

alter table "public"."users" add column "username" text not null;

CREATE UNIQUE INDEX comments_pkey ON public.comments USING btree (id);

CREATE UNIQUE INDEX following_pkey ON public.following USING btree (id);

CREATE UNIQUE INDEX likes_pkey ON public.likes USING btree (id);

CREATE UNIQUE INDEX postings_pkey ON public.postings USING btree (id);

CREATE UNIQUE INDEX users_username_key ON public.users USING btree (username);

alter table "public"."comments" add constraint "comments_pkey" PRIMARY KEY using index "comments_pkey";

alter table "public"."following" add constraint "following_pkey" PRIMARY KEY using index "following_pkey";

alter table "public"."likes" add constraint "likes_pkey" PRIMARY KEY using index "likes_pkey";

alter table "public"."postings" add constraint "postings_pkey" PRIMARY KEY using index "postings_pkey";

alter table "public"."comments" add constraint "comments_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."comments" validate constraint "comments_user_id_fkey";

alter table "public"."following" add constraint "following_followee_fkey" FOREIGN KEY (followee) REFERENCES users(id) not valid;

alter table "public"."following" validate constraint "following_followee_fkey";

alter table "public"."following" add constraint "following_follower_fkey" FOREIGN KEY (follower) REFERENCES users(id) not valid;

alter table "public"."following" validate constraint "following_follower_fkey";

alter table "public"."likes" add constraint "likes_post_id_fkey" FOREIGN KEY (post_id) REFERENCES postings(id) not valid;

alter table "public"."likes" validate constraint "likes_post_id_fkey";

alter table "public"."likes" add constraint "likes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."likes" validate constraint "likes_user_id_fkey";

alter table "public"."postings" add constraint "postings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id) not valid;

alter table "public"."postings" validate constraint "postings_user_id_fkey";

alter table "public"."users" add constraint "users_username_key" UNIQUE using index "users_username_key";

grant delete on table "public"."comments" to "anon";

grant insert on table "public"."comments" to "anon";

grant references on table "public"."comments" to "anon";

grant select on table "public"."comments" to "anon";

grant trigger on table "public"."comments" to "anon";

grant truncate on table "public"."comments" to "anon";

grant update on table "public"."comments" to "anon";

grant delete on table "public"."comments" to "authenticated";

grant insert on table "public"."comments" to "authenticated";

grant references on table "public"."comments" to "authenticated";

grant select on table "public"."comments" to "authenticated";

grant trigger on table "public"."comments" to "authenticated";

grant truncate on table "public"."comments" to "authenticated";

grant update on table "public"."comments" to "authenticated";

grant delete on table "public"."comments" to "service_role";

grant insert on table "public"."comments" to "service_role";

grant references on table "public"."comments" to "service_role";

grant select on table "public"."comments" to "service_role";

grant trigger on table "public"."comments" to "service_role";

grant truncate on table "public"."comments" to "service_role";

grant update on table "public"."comments" to "service_role";

grant delete on table "public"."following" to "anon";

grant insert on table "public"."following" to "anon";

grant references on table "public"."following" to "anon";

grant select on table "public"."following" to "anon";

grant trigger on table "public"."following" to "anon";

grant truncate on table "public"."following" to "anon";

grant update on table "public"."following" to "anon";

grant delete on table "public"."following" to "authenticated";

grant insert on table "public"."following" to "authenticated";

grant references on table "public"."following" to "authenticated";

grant select on table "public"."following" to "authenticated";

grant trigger on table "public"."following" to "authenticated";

grant truncate on table "public"."following" to "authenticated";

grant update on table "public"."following" to "authenticated";

grant delete on table "public"."following" to "service_role";

grant insert on table "public"."following" to "service_role";

grant references on table "public"."following" to "service_role";

grant select on table "public"."following" to "service_role";

grant trigger on table "public"."following" to "service_role";

grant truncate on table "public"."following" to "service_role";

grant update on table "public"."following" to "service_role";

grant delete on table "public"."likes" to "anon";

grant insert on table "public"."likes" to "anon";

grant references on table "public"."likes" to "anon";

grant select on table "public"."likes" to "anon";

grant trigger on table "public"."likes" to "anon";

grant truncate on table "public"."likes" to "anon";

grant update on table "public"."likes" to "anon";

grant delete on table "public"."likes" to "authenticated";

grant insert on table "public"."likes" to "authenticated";

grant references on table "public"."likes" to "authenticated";

grant select on table "public"."likes" to "authenticated";

grant trigger on table "public"."likes" to "authenticated";

grant truncate on table "public"."likes" to "authenticated";

grant update on table "public"."likes" to "authenticated";

grant delete on table "public"."likes" to "service_role";

grant insert on table "public"."likes" to "service_role";

grant references on table "public"."likes" to "service_role";

grant select on table "public"."likes" to "service_role";

grant trigger on table "public"."likes" to "service_role";

grant truncate on table "public"."likes" to "service_role";

grant update on table "public"."likes" to "service_role";

grant delete on table "public"."postings" to "anon";

grant insert on table "public"."postings" to "anon";

grant references on table "public"."postings" to "anon";

grant select on table "public"."postings" to "anon";

grant trigger on table "public"."postings" to "anon";

grant truncate on table "public"."postings" to "anon";

grant update on table "public"."postings" to "anon";

grant delete on table "public"."postings" to "authenticated";

grant insert on table "public"."postings" to "authenticated";

grant references on table "public"."postings" to "authenticated";

grant select on table "public"."postings" to "authenticated";

grant trigger on table "public"."postings" to "authenticated";

grant truncate on table "public"."postings" to "authenticated";

grant update on table "public"."postings" to "authenticated";

grant delete on table "public"."postings" to "service_role";

grant insert on table "public"."postings" to "service_role";

grant references on table "public"."postings" to "service_role";

grant select on table "public"."postings" to "service_role";

grant trigger on table "public"."postings" to "service_role";

grant truncate on table "public"."postings" to "service_role";

grant update on table "public"."postings" to "service_role";


