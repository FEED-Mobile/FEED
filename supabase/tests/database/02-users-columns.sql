/*
Test that public.users table should have correct columns
*/
begin;

select
	plan(1);

select
	columns_are(
		'public',
		'users',
		ARRAY [
			'id',
			'created_at',
			'email',
			'username',
			'avatar',
			'bio',
			'birthday',
			'location'
		],
		'Table public.users should have correct columns'
	);

select
	*
from
	finish();

rollback;