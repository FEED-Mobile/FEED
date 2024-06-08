/*
Test that public.following table should have correct RLS policies
*/
begin;

select
	plan(1);

select
	policies_are(
		'public',
		'following',
		ARRAY [
    'Enable delete for users based on follower',
    'Enable insert for authenticated users only',
	'Enable read access for all users'
  ],
		'Table public.following should have correct policies'
	);

select
	*
from
	finish();

rollback;