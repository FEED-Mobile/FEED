/*
Test that public schema should have all the correct tables
*/
begin;

select
	plan(1);

select
	tables_are(
		'public',
		ARRAY [
			'users',
			'comments',
			'following',
			'likes',
			'posts',
			'tags',
			'posts_tags'
		],
		'Public schema should have correct tables'
	);

select
	*
from
	finish();

rollback;