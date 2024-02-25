begin;
select plan( 5 );

select has_table( 'users' );
select has_table( 'comments' );
select has_table( 'following' );
select has_table( 'likes' );
select has_table( 'postings' );

select * from finish();
rollback;
