/*
Test that public.postings table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'postings',
		ARRAY [
			'id',
			'images',
			'title',
			'description',
			'location',
			'rating',
			'user_id',
			'created_at'
		],
		'Table public.postings should have correct columns'
	);

select
	*
from
	finish();

rollback;