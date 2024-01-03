--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.4 (Ubuntu 15.4-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '81db9614-68bf-404a-9a65-afe2f8540bcd', '{"action":"user_signedup","actor_id":"84905bc3-8150-44d6-a4de-7b75d0ac1141","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-01-03 04:29:20.073133+00', ''),
	('00000000-0000-0000-0000-000000000000', '6f06252b-1c1f-4a89-a4f3-392bbcf095f5', '{"action":"login","actor_id":"84905bc3-8150-44d6-a4de-7b75d0ac1141","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-03 04:29:20.075401+00', ''),
	('00000000-0000-0000-0000-000000000000', '6d38a504-8491-4396-805b-ffe7cd69fec6', '{"action":"user_signedup","actor_id":"d0f63cca-ce73-4b03-920a-6f8105eb0131","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-01-03 05:51:02.210138+00', ''),
	('00000000-0000-0000-0000-000000000000', '8a3d2ea4-963a-47f8-8413-9488a7ec57b7', '{"action":"login","actor_id":"d0f63cca-ce73-4b03-920a-6f8105eb0131","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-03 05:51:02.213536+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b77c0bc2-5b60-4f7a-954c-be0ce0788154', '{"action":"user_repeated_signup","actor_id":"d0f63cca-ce73-4b03-920a-6f8105eb0131","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-01-03 05:51:04.639141+00', ''),
	('00000000-0000-0000-0000-000000000000', '67930064-775c-49d5-87d1-1f5a6a536522', '{"action":"user_signedup","actor_id":"4d0683c4-30a4-4037-8ae4-b87c0c511d60","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-01-03 05:51:37.327791+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c70bb9cb-4477-4ac0-a5f9-875bda1d3bcd', '{"action":"login","actor_id":"4d0683c4-30a4-4037-8ae4-b87c0c511d60","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-03 05:51:37.330783+00', ''),
	('00000000-0000-0000-0000-000000000000', '3abb9fb2-cf54-4459-8dea-e82ca0d48b03', '{"action":"user_signedup","actor_id":"b0fc0d87-df45-45de-abf9-7ca9904affec","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-01-03 05:52:49.480501+00', ''),
	('00000000-0000-0000-0000-000000000000', '46b79d4e-bd11-4b01-8a9f-50f300fa389d', '{"action":"login","actor_id":"b0fc0d87-df45-45de-abf9-7ca9904affec","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-03 05:52:49.483176+00', ''),
	('00000000-0000-0000-0000-000000000000', '0d7879e3-6bd6-4f26-bd09-3028cae051b5', '{"action":"login","actor_id":"b0fc0d87-df45-45de-abf9-7ca9904affec","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-03 06:20:41.149029+00', ''),
	('00000000-0000-0000-0000-000000000000', '778de9e1-2bce-4437-89cf-46dfa5545561', '{"action":"login","actor_id":"b0fc0d87-df45-45de-abf9-7ca9904affec","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-03 06:23:09.906915+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', 'b0fc0d87-df45-45de-abf9-7ca9904affec', 'authenticated', 'authenticated', 'hansonhn369@gmail.com', '$2a$10$SlCro7YhRbbxdnwbX4OSo.KDPtcU2e68JI2A93xf3v6HNRB7o00IG', '2024-01-03 05:52:49.481098+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-01-03 06:23:09.907554+00', '{"provider": "email", "providers": ["email"]}', '{"username": "hanson"}', NULL, '2024-01-03 05:52:49.47755+00', '2024-01-03 06:23:09.909318+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('b0fc0d87-df45-45de-abf9-7ca9904affec', 'b0fc0d87-df45-45de-abf9-7ca9904affec', '{"sub": "b0fc0d87-df45-45de-abf9-7ca9904affec", "email": "hansonhn369@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-01-03 05:52:49.480019+00', '2024-01-03 05:52:49.480041+00', '2024-01-03 05:52:49.480041+00', '88278271-1edf-4f43-9f37-5e862fab655c');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('bfda6fd8-7759-45c0-bd50-634e57c00b38', 'b0fc0d87-df45-45de-abf9-7ca9904affec', '2024-01-03 05:52:49.483567+00', '2024-01-03 05:52:49.483567+00', NULL, 'aal1', NULL, NULL, 'Expo/1017565 CFNetwork/1410.0.3 Darwin/22.6.0', '172.23.0.1', NULL),
	('83a915c5-cf50-4d56-a06e-bc82dcfffe65', 'b0fc0d87-df45-45de-abf9-7ca9904affec', '2024-01-03 06:20:41.149978+00', '2024-01-03 06:20:41.149978+00', NULL, 'aal1', NULL, NULL, 'Expo/1017565 CFNetwork/1410.0.3 Darwin/22.6.0', '172.23.0.1', NULL),
	('af7977bd-88f3-46c4-96ea-a2008eda427b', 'b0fc0d87-df45-45de-abf9-7ca9904affec', '2024-01-03 06:23:09.907592+00', '2024-01-03 06:23:09.907592+00', NULL, 'aal1', NULL, NULL, 'Expo/1017565 CFNetwork/1410.0.3 Darwin/22.6.0', '172.23.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('bfda6fd8-7759-45c0-bd50-634e57c00b38', '2024-01-03 05:52:49.484687+00', '2024-01-03 05:52:49.484687+00', 'password', 'ff7da010-a10b-4c32-87c5-9341368b1af2'),
	('83a915c5-cf50-4d56-a06e-bc82dcfffe65', '2024-01-03 06:20:41.151769+00', '2024-01-03 06:20:41.151769+00', 'password', '05efa16b-a0ac-421a-a656-872c755e744c'),
	('af7977bd-88f3-46c4-96ea-a2008eda427b', '2024-01-03 06:23:09.909698+00', '2024-01-03 06:23:09.909698+00', 'password', '846a937f-5dc9-49ec-8357-c8fa75925ea4');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 4, 'GIZqjQwnGxCmcw103ZGWEQ', 'b0fc0d87-df45-45de-abf9-7ca9904affec', false, '2024-01-03 05:52:49.48399+00', '2024-01-03 05:52:49.48399+00', NULL, 'bfda6fd8-7759-45c0-bd50-634e57c00b38'),
	('00000000-0000-0000-0000-000000000000', 5, 'Stp2ERY81uw7QO4Xw9jlSg', 'b0fc0d87-df45-45de-abf9-7ca9904affec', false, '2024-01-03 06:20:41.150718+00', '2024-01-03 06:20:41.150718+00', NULL, '83a915c5-cf50-4d56-a06e-bc82dcfffe65'),
	('00000000-0000-0000-0000-000000000000', 6, 'EqlTz3hDERbPe3Ayl0nLzg', 'b0fc0d87-df45-45de-abf9-7ca9904affec', false, '2024-01-03 06:23:09.908576+00', '2024-01-03 06:23:09.908576+00', NULL, 'af7977bd-88f3-46c4-96ea-a2008eda427b');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."users" ("id", "created_at", "username", "email") VALUES
	('b0fc0d87-df45-45de-abf9-7ca9904affec', '2024-01-03 05:52:49.477225+00', 'hanson', 'hansonhn369@gmail.com');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 6, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
