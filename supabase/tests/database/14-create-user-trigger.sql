/*
Test that auth.users.create_user_trigger should create new user entry in public.users table
*/
begin;

select
	plan(2);

select
	trigger_is(
		'auth',
		'users',
		'create_user_trigger',
		'public',
		'create_user',
		'auth.users.create_user_trigger should call public.create_user function'
	);

insert into
	auth.users (id, email, raw_user_meta_data)
values
	(
		uuid_generate_v4(),
		'testuser@example.com',
		'{"username": "testusername"}'
	);

select results_eq(
		'select username, email from public.users where id = (select id from auth.users order by created_at desc limit 1)',
		$$VALUES('testusername', 'testuser@example.com')$$,
		'Table public.users should have email and username corresponding to inserted row in auth.users'
	);

select
	*
from
	finish();

rollback;