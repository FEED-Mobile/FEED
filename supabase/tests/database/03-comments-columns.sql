/*
Test that public.comments table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'comments',
		ARRAY [
			'id',
			'content',
			'user_id',
			'created_at'
		],
		'Table public.comments should have correct columns'
	);

select
	*
from
	finish();

rollback;