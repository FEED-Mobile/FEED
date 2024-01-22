CREATE TRIGGER create_user_trigger AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION create_user();


