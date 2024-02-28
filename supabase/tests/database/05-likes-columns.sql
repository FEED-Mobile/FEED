/*
Test that public.likes table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'likes',
		ARRAY [
			'id',
			'user_id',
			'post_id',
			'created_at'
		],
		'Table public.likes should have correct columns'
	);

select
	*
from
	finish();

rollback;