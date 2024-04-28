/*
Test that public.postings table should have correct RLS policies
*/
begin;

select
	plan(1);

select
	policies_are(
		'public',
		'likes',
		ARRAY [
    'Enable delete for likes based on user_id',
    'Enable insert for authenticated users only',
	'Enable read access for all likes'
  ],
		'Table public.likes should have correct policies'
	);

select
	*
from
	finish();

rollback;