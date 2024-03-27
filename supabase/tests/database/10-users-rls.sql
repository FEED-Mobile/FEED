/*
Test that public.users table should have correct RLS policies
*/
begin;

select
	plan(1);

select
	policies_are(
		'public',
		'users',
		ARRAY [
	'Enable read access for all users',
	'Enable update for users based on user_id'
  ],
		'Table public.users should have correct policies'
	);

select
	*
from
	finish();

rollback;