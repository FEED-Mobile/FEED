alter table "public"."users" drop constraint "users_name_check";

alter table "public"."users" drop column "name";

alter table "public"."users" add column "username" text not null default ''::text;

CREATE UNIQUE INDEX users_username_key ON public.users USING btree (username);

alter table "public"."users" add constraint "users_username_check" CHECK (((length(username) >= 2) AND (length(username) <= 30))) not valid;

alter table "public"."users" validate constraint "users_username_check";

alter table "public"."users" add constraint "users_username_key" UNIQUE using index "users_username_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  insert into public.users (id, email, username)
  values (new.id, new.email, new.raw_user_meta_data ->> 'username');
  return new;
end;$function$
;


