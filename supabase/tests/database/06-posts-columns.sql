/*
Test that public.postings table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'posts',
		ARRAY [
			'id',
			'media',
			'title',
			'description',
			'location',
			'rating',
			'user_id',
			'created_at'
		],
		'Table public.posts should have correct columns'
	);

select
	*
from
	finish();

rollback;