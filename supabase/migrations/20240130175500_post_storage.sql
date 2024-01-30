INSERT INTO "storage"."buckets" ("id", "name", "created_at", "updated_at", "public", "avif_autodetection") VALUES
	('posts', 'posts', '2024-01-30 17:56:20.348763+00', '2024-01-30 17:56:20.348763+00', FALSE, FALSE);

create policy "Give users access to own folder 1rma4z_0"
on "storage"."objects"
as permissive
for insert
to public
with check (((bucket_id = 'posts'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));


create policy "Give users access to own folder 1rma4z_1"
on "storage"."objects"
as permissive
for select
to public
using (((bucket_id = 'posts'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));


create policy "Give users access to own folder 1rma4z_2"
on "storage"."objects"
as permissive
for update
to public
using (((bucket_id = 'posts'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));


create policy "Give users access to own folder 1rma4z_3"
on "storage"."objects"
as permissive
for delete
to public
using (((bucket_id = 'posts'::text) AND ((auth.uid())::text = (storage.foldername(name))[1])));



