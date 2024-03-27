/*
Test that public.posts_tags table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'posts_tags',
		ARRAY [
			'post_id',
			'tag_id',
			'created_at'
		],
		'Table public.posts_tags should have correct columns'
	);

select
	*
from
	finish();

rollback;