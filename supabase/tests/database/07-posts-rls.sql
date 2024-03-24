/*
Test that public.postings table should have correct RLS policies
*/
begin;

select
	plan(1);

select
	policies_are(
		'public',
		'posts',
		ARRAY [
    'Enable delete for users based on user_id',
    'Enable insert for users based on user_id',
	'Enable read access for all users',
	'Enable update for users based on user_id'
  ],
		'Table public.posts should have correct policies'
	);

select
	*
from
	finish();

rollback;