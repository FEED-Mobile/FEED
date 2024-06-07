create or replace function search_users_by_username_prefix(prefix text)
returns setof users AS $$
begin
  return query
  select * from users where to_tsvector(username) @@ to_tsquery(prefix || ':*');
end;
$$ language plpgsql;
