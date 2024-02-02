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
	('00000000-0000-0000-0000-000000000000', '778de9e1-2bce-4437-89cf-46dfa5545561', '{"action":"login","actor_id":"b0fc0d87-df45-45de-abf9-7ca9904affec","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-03 06:23:09.906915+00', ''),
	('00000000-0000-0000-0000-000000000000', '92eb630a-3b1f-4bbb-813e-acea16bb7423', '{"action":"user_signedup","actor_id":"9528de67-2b62-42c8-b448-1043326baef6","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-01-22 07:10:04.086285+00', ''),
	('00000000-0000-0000-0000-000000000000', '438f9eab-51b4-4d67-bb14-17aec5d4da0b', '{"action":"login","actor_id":"9528de67-2b62-42c8-b448-1043326baef6","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-22 07:10:04.088297+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b59d84c9-9ff1-4c1f-a6f3-c95879fa4260', '{"action":"user_signedup","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-01-22 07:14:48.028155+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a667bb99-9054-40ca-8459-e06184e55fd5', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-22 07:14:48.030354+00', ''),
	('00000000-0000-0000-0000-000000000000', '0d79fce2-8a75-4b29-836e-a94929703947', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-22 07:19:00.260768+00', ''),
	('00000000-0000-0000-0000-000000000000', '1310a807-a8f4-4f67-80bd-cfd55630eb22', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-22 07:20:33.186011+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ddbe32ae-2e30-4849-aa2c-6e1bae6ae55a', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-31 07:04:40.257736+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 'authenticated', 'authenticated', 'hansonhn369@gmail.com', '$2a$10$UKtzvGU5sV3Ai.lz//eCG.iklNPnrUuGP9qGfCcnbVnTRMc6wOmZG', '2024-01-22 07:14:48.02853+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-01-31 07:04:40.258525+00', '{"provider": "email", "providers": ["email"]}', '{"username": "hanson"}', NULL, '2024-01-22 07:14:48.023579+00', '2024-01-31 07:04:40.260708+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '{"sub": "0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc", "email": "hansonhn369@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-01-22 07:14:48.027504+00', '2024-01-22 07:14:48.027525+00', '2024-01-22 07:14:48.027525+00', '34c5e596-09f1-4fdf-8bf9-fd91a66ab7d7');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('4bde6720-0154-4ea4-97a6-b4e06bcb1b16', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '2024-01-22 07:14:48.03081+00', '2024-01-22 07:14:48.03081+00', NULL, 'aal1', NULL, NULL, 'Expo/1017593 CFNetwork/1410.0.3 Darwin/22.6.0', '172.18.0.1', NULL),
	('1cedc3a9-74bb-4241-ad57-1cffffe9e917', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '2024-01-22 07:19:00.26155+00', '2024-01-22 07:19:00.26155+00', NULL, 'aal1', NULL, NULL, 'Expo/1017593 CFNetwork/1410.0.3 Darwin/22.6.0', '172.18.0.1', NULL),
	('8e993f70-ae12-4aad-ae80-d99a8450edda', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '2024-01-22 07:20:33.186604+00', '2024-01-22 07:20:33.186604+00', NULL, 'aal1', NULL, NULL, 'Expo/1017593 CFNetwork/1410.0.3 Darwin/22.6.0', '172.18.0.1', NULL),
	('c9367da0-720e-4872-8e21-c70b5d48230e', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '2024-01-31 07:04:40.258568+00', '2024-01-31 07:04:40.258568+00', NULL, 'aal1', NULL, NULL, 'Expo/1017597 CFNetwork/1410.0.3 Darwin/22.6.0', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('4bde6720-0154-4ea4-97a6-b4e06bcb1b16', '2024-01-22 07:14:48.032056+00', '2024-01-22 07:14:48.032056+00', 'password', '04991669-aaec-4c62-96a9-674ad3b4b38a'),
	('1cedc3a9-74bb-4241-ad57-1cffffe9e917', '2024-01-22 07:19:00.263402+00', '2024-01-22 07:19:00.263402+00', 'password', '31d94c6f-7ba5-45d7-aaae-c4c7a8a9878c'),
	('8e993f70-ae12-4aad-ae80-d99a8450edda', '2024-01-22 07:20:33.188168+00', '2024-01-22 07:20:33.188168+00', 'password', '6aee493e-8188-498e-8c82-3949f4a82a8e'),
	('c9367da0-720e-4872-8e21-c70b5d48230e', '2024-01-31 07:04:40.26128+00', '2024-01-31 07:04:40.26128+00', 'password', 'ea7455cc-d66d-4110-8e29-c788121fa635');


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
	('00000000-0000-0000-0000-000000000000', 8, 'hhB88wtnKODa9Yl2Er97Fw', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', false, '2024-01-22 07:14:48.03129+00', '2024-01-22 07:14:48.03129+00', NULL, '4bde6720-0154-4ea4-97a6-b4e06bcb1b16'),
	('00000000-0000-0000-0000-000000000000', 9, 'tGD9nbljAAINF_QwhvomaA', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', false, '2024-01-22 07:19:00.262184+00', '2024-01-22 07:19:00.262184+00', NULL, '1cedc3a9-74bb-4241-ad57-1cffffe9e917'),
	('00000000-0000-0000-0000-000000000000', 10, 'vm5MGkuwP3q9p6n3h5BJ7Q', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', false, '2024-01-22 07:20:33.187436+00', '2024-01-22 07:20:33.187436+00', NULL, '8e993f70-ae12-4aad-ae80-d99a8450edda'),
	('00000000-0000-0000-0000-000000000000', 11, 'wA63qrl1nku9k7A_FWkrMw', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', false, '2024-01-31 07:04:40.259648+00', '2024-01-31 07:04:40.259648+00', NULL, 'c9367da0-720e-4872-8e21-c70b5d48230e');


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



--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: following; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: postings; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."postings" ("id", "created_at", "images", "title", "description", "location", "rating", "user_id") VALUES
	(2, '2024-02-02 06:11:04.602129+00', '{https://res.cloudinary.com/dgqxfulav/image/upload/v1706854257/txc1nbywym3vkwgbjci9.jpg,https://res.cloudinary.com/dgqxfulav/image/upload/v1706854263/yggbvckzpwo2kgacgg0j.jpg}', 'Good eats right here', 'Good eats right here', 'Davis, CA', NULL, '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc');


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('posts', 'posts', NULL, '2024-01-30 17:56:20.348763+00', '2024-01-30 17:56:20.348763+00', true, false, NULL, NULL, NULL);


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 11, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."comments_id_seq"', 1, false);


--
-- Name: following_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."following_id_seq"', 1, false);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."likes_id_seq"', 1, false);


--
-- Name: postings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."postings_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
