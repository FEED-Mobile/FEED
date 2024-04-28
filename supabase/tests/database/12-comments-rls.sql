/*
Test that public.postings table should have correct RLS policies
*/
begin;

select
	plan(1);

select
	policies_are(
		'public',
		'comments',
		ARRAY [
    'Enable delete for comments based on user_id',
    'Enable insert for authenticated users only',
	'Enable read access for all comments',
	'Enable update for comments based on user_id'
  ],
		'Table public.comments should have correct policies'
	);

select
	*
from
	finish();

rollback;