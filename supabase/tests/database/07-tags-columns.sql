/*
Test that public.tags table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'tags',
		ARRAY [
			'id',
			'created_at',
			'name',
			'user_id'
		],
		'Table public.tags should have correct columns'
	);

select
	*
from
	finish();

rollback;