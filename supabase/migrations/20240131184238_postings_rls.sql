create policy "Enable delete for users based on user_id"
on "public"."postings"
as permissive
for delete
to authenticated
using ((auth.uid() = user_id));


create policy "Enable insert for users based on user_id"
on "public"."postings"
as permissive
for insert
to authenticated
with check ((auth.uid() = user_id));


create policy "Enable read access for all users"
on "public"."postings"
as permissive
for select
to public
using (true);


create policy "Enable update for users based on user_id"
on "public"."postings"
as permissive
for update
to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



