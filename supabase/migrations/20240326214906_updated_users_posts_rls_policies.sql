drop policy "Enable delete for users based on user_id" on "public"."posts";

drop policy "Enable insert for users based on user_id" on "public"."posts";

drop policy "Enable read access for all users" on "public"."posts";

drop policy "Enable update for users based on user_id" on "public"."posts";

create policy "Enable delete for posts based on user_id"
on "public"."posts"
as permissive
for delete
to authenticated
using ((auth.uid() = user_id));


create policy "Enable insert for posts based on user_id"
on "public"."posts"
as permissive
for insert
to authenticated
with check ((auth.uid() = user_id));


create policy "Enable read access for all posts"
on "public"."posts"
as permissive
for select
to public
using (true);


create policy "Enable update for posts based on user_id"
on "public"."posts"
as permissive
for update
to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));


create policy "Enable read access for all users"
on "public"."users"
as permissive
for select
to public
using (true);


create policy "Enable update for users based on user_id"
on "public"."users"
as permissive
for update
to authenticated
using ((auth.uid() = id))
with check ((auth.uid() = id));



