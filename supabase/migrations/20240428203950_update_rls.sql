drop policy "Enable insert for posts based on user_id" on "public"."posts";

create policy "Enable delete for comments based on user_id"
on "public"."comments"
as permissive
for delete
to authenticated
using ((auth.uid() = user_id));


create policy "Enable insert for authenticated users only"
on "public"."comments"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all comments"
on "public"."comments"
as permissive
for select
to public
using (true);


create policy "Enable update for comments based on user_id"
on "public"."comments"
as permissive
for update
to authenticated
using ((auth.uid() = user_id));


create policy "Enable delete for likes based on user_id"
on "public"."likes"
as permissive
for delete
to authenticated
using ((auth.uid() = user_id));


create policy "Enable insert for authenticated users only"
on "public"."likes"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all likes"
on "public"."likes"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."posts"
as permissive
for insert
to authenticated
with check (true);



