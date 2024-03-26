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
    'Enable delete for posts based on user_id',
    'Enable insert for posts based on user_id',
	'Enable read access for all posts',
	'Enable update for posts based on user_id'
  ],
		'Table public.posts should have correct policies'
	);

select
	*
from
	finish();

rollback;