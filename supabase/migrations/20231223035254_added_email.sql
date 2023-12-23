alter table "public"."users" add column "email" text not null default ''::text;

alter table "public"."users" alter column "name" set default ''::text;

alter table "public"."users" alter column "name" set data type text using "name"::text;

alter table "public"."users" add constraint "users_name_check" CHECK ((length(name) < 30)) not valid;

alter table "public"."users" validate constraint "users_name_check";


