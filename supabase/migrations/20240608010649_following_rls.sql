create policy "Enable delete for users based on follower"
on "public"."following"
as permissive
for delete
to public
using ((auth.uid() = follower));


create policy "Enable insert for authenticated users only"
on "public"."following"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."following"
as permissive
for select
to public
using (true);



