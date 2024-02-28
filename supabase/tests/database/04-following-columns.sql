/*
Test that public.following table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'following',
		ARRAY [
			'id',
			'follower',
			'followee',
			'created_at'
		],
		'Table public.following should have correct columns'
	);

select
	*
from
	finish();

rollback;