begin;
select plan( 1 );

select policies_are(
  'public',
  'postings',
  ARRAY [
    'Enable delete for users based on user_id',
    'Enable insert for users based on user_id',
	'Enable read access for all users',
	'Enable update for users based on user_id'
  ]
);

select * from finish();
rollback;