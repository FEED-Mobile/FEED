SET session_replication_role = replica;

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
	('00000000-0000-0000-0000-000000000000', 'ddbe32ae-2e30-4849-aa2c-6e1bae6ae55a', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-01-31 07:04:40.257736+00', ''),
	('00000000-0000-0000-0000-000000000000', '305baa40-72e3-492a-89a1-8a0ed584f285', '{"action":"user_signedup","actor_id":"3f716c7c-9df6-4586-846f-18f230dd6c8c","actor_username":"leluens25@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-02-24 05:49:53.528817+00', ''),
	('00000000-0000-0000-0000-000000000000', '76222034-e760-4352-9705-f95925d3e9d2', '{"action":"login","actor_id":"3f716c7c-9df6-4586-846f-18f230dd6c8c","actor_username":"leluens25@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-02-24 05:49:53.540328+00', ''),
	('00000000-0000-0000-0000-000000000000', '84462a85-1a38-4b7a-978d-0c31c3b17389', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-27 00:23:30.996646+00', ''),
	('00000000-0000-0000-0000-000000000000', '450d2211-a88a-4a2f-b847-a9d8ac0d730c', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-01 16:29:53.27201+00', ''),
	('00000000-0000-0000-0000-000000000000', '6be69768-c7d5-4ce6-8576-0e048c004fe0', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-28 03:56:42.076697+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c7fa99ad-d90b-48b3-831a-5ae8d7bc6f1d', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 15:56:54.791017+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f32808e7-f344-4a08-82e2-bfaaa82a2d53', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 15:56:54.792315+00', ''),
	('00000000-0000-0000-0000-000000000000', '07e72c40-16bd-4a41-83f7-12dd029864ce', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 16:55:20.786718+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e3ad1937-5047-45ea-8011-e3fb1740c010', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 16:55:20.787084+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a20e9b9d-c801-4c33-9422-97c0fa4c80ac', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 17:53:41.276681+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da50b024-c176-41d7-a69c-d9ae6282ca98', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 17:53:41.277287+00', ''),
	('00000000-0000-0000-0000-000000000000', '39bbc2db-017b-4877-bf98-e416f36d3130', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 18:52:01.055355+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f1ec2cb5-376d-4af2-a38e-703a75971bc5', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 18:52:01.056746+00', ''),
	('00000000-0000-0000-0000-000000000000', '909cb915-25cc-4ba5-bc67-323d51a7c07e', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 19:53:42.550783+00', ''),
	('00000000-0000-0000-0000-000000000000', '17bc9c3c-f8c3-4b5a-844b-0e788853dbd2', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-04-28 19:53:42.551515+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e46cc94-887e-41dc-9c71-47f721ab6268', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-10 02:15:24.7742+00', ''),
	('00000000-0000-0000-0000-000000000000', '5b8ea4be-5c66-41cf-9dcc-027f56e8e8d3', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 03:14:22.068898+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a660dbe-1584-4875-83fa-4c1f03c66dd3', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 03:14:22.091791+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd77b71e2-d60c-4944-a4db-0b3ec34eec4a', '{"action":"logout","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-10 03:14:30.159812+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4535680-e2d7-4341-8a8c-36a11ba07ae8', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-10 03:14:35.121112+00', ''),
	('00000000-0000-0000-0000-000000000000', '2e508097-665c-4baf-b592-0976bd0ad8c0', '{"action":"logout","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-10 03:16:32.713918+00', ''),
	('00000000-0000-0000-0000-000000000000', '06d931c3-7d31-4172-a852-c3ee85c42c1e', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-10 03:16:38.811823+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bde5538f-4ba5-4226-9504-f425e4bb33b4', '{"action":"logout","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-10 03:19:45.28124+00', ''),
	('00000000-0000-0000-0000-000000000000', '45b983de-ddcd-4167-8f4a-aa66a9ef8151', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-10 03:19:51.536673+00', ''),
	('00000000-0000-0000-0000-000000000000', '9afc69de-abf8-4ea4-ab85-ead0c89c86c3', '{"action":"logout","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-10 03:39:15.637011+00', ''),
	('00000000-0000-0000-0000-000000000000', '8a948899-e39f-4d29-aba9-b9710dc517e2', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-10 03:39:51.156272+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ecde140b-e2f9-4518-8adf-a01b2f7a5a76', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 15:22:00.707914+00', ''),
	('00000000-0000-0000-0000-000000000000', '2449c9af-0f0a-4953-aad9-358115dcc1f5', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 15:22:00.709528+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b447dce7-5e86-4930-a5e9-5e6f2b1810c2', '{"action":"token_refreshed","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 16:20:00.182672+00', ''),
	('00000000-0000-0000-0000-000000000000', '4036a0a0-89bc-46b2-8288-60be788661e9', '{"action":"token_revoked","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 16:20:00.183084+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e186ba0b-40e0-4d23-8c8e-5c1ccaa0b365', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 00:09:18.262654+00', ''),
	('00000000-0000-0000-0000-000000000000', '64670d59-fdc9-4aa8-a31d-cfb0dd2cbca6', '{"action":"logout","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-04 00:10:48.803517+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c73c886-08e2-4e77-82b9-b902cefd5339', '{"action":"user_signedup","actor_id":"d2c12003-205f-49e1-8979-1f17aa81a72d","actor_username":"gorda@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-04 00:11:25.329358+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ea6d658c-7f33-4e28-ae3c-355f48a486a5', '{"action":"login","actor_id":"d2c12003-205f-49e1-8979-1f17aa81a72d","actor_username":"gorda@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 00:11:25.332235+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0000e20-34a0-4a49-b691-7742c0c56912', '{"action":"logout","actor_id":"d2c12003-205f-49e1-8979-1f17aa81a72d","actor_username":"gorda@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-04 00:13:05.622517+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cd308b66-34d5-4a49-811e-c794057ad65e', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 00:13:11.531366+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b833e06d-5d9c-484d-b949-944776a2e383', '{"action":"logout","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-04 00:26:55.778584+00', ''),
	('00000000-0000-0000-0000-000000000000', '3bb2ff24-6dab-4f63-b3f1-8dd0332d2ec1', '{"action":"login","actor_id":"d2c12003-205f-49e1-8979-1f17aa81a72d","actor_username":"gorda@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 00:27:22.458159+00', ''),
	('00000000-0000-0000-0000-000000000000', '6a8ea8de-ba2f-4c27-b880-560b8f409d78', '{"action":"login","actor_id":"0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc","actor_username":"hansonhn369@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-08 01:00:44.918325+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '3f716c7c-9df6-4586-846f-18f230dd6c8c', 'authenticated', 'authenticated', 'leluens25@gmail.com', '$2a$10$CM6JJBRyiIFs6WBeXR/1suFKIqm7eAdYozE7iFu095hyrPhO//rrW', '2024-02-24 05:49:53.529475+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-02-24 05:49:53.540789+00', '{"provider": "email", "providers": ["email"]}', '{"username": "lawrence"}', NULL, '2024-02-24 05:49:53.523346+00', '2024-02-24 05:49:53.543483+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', 'd2c12003-205f-49e1-8979-1f17aa81a72d', 'authenticated', 'authenticated', 'gorda@gmail.com', '$2a$10$APZtnpz4tuPXmS6fc1auSuXVkvpqemRlhfgDAWgfKovjL3ufE3xKC', '2024-06-04 00:11:25.329914+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-04 00:27:22.459188+00', '{"provider": "email", "providers": ["email"]}', '{"username": " Gordan Ramsey"}', NULL, '2024-06-04 00:11:25.323074+00', '2024-06-04 00:27:22.461373+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 'authenticated', 'authenticated', 'hansonhn369@gmail.com', '$2a$10$UKtzvGU5sV3Ai.lz//eCG.iklNPnrUuGP9qGfCcnbVnTRMc6wOmZG', '2024-01-22 07:14:48.02853+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-08 01:00:44.919038+00', '{"provider": "email", "providers": ["email"]}', '{"username": "hanson"}', NULL, '2024-01-22 07:14:48.023579+00', '2024-06-08 01:00:44.92073+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '{"sub": "0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc", "email": "hansonhn369@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-01-22 07:14:48.027504+00', '2024-01-22 07:14:48.027525+00', '2024-01-22 07:14:48.027525+00', '34c5e596-09f1-4fdf-8bf9-fd91a66ab7d7'),
	('3f716c7c-9df6-4586-846f-18f230dd6c8c', '3f716c7c-9df6-4586-846f-18f230dd6c8c', '{"sub": "3f716c7c-9df6-4586-846f-18f230dd6c8c", "email": "leluens25@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-02-24 05:49:53.528047+00', '2024-02-24 05:49:53.528102+00', '2024-02-24 05:49:53.528102+00', 'b1c5f4b1-5eb7-4579-91d3-e27a5bcb715c'),
	('d2c12003-205f-49e1-8979-1f17aa81a72d', 'd2c12003-205f-49e1-8979-1f17aa81a72d', '{"sub": "d2c12003-205f-49e1-8979-1f17aa81a72d", "email": "gorda@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-04 00:11:25.328373+00', '2024-06-04 00:11:25.328417+00', '2024-06-04 00:11:25.328417+00', 'ae7c45e0-6f89-4b47-a192-ac955a7fbc2e');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('1357857b-b4c6-4bb1-a397-16c6c8367ba6', '3f716c7c-9df6-4586-846f-18f230dd6c8c', '2024-02-24 05:49:53.54088+00', '2024-02-24 05:49:53.54088+00', NULL, 'aal1', NULL, NULL, 'Expo/1017599 CFNetwork/1490.0.4 Darwin/23.2.0', '10.240.4.161', NULL),
	('4f2d3ad6-3a81-4616-815c-3d6ecd85859d', 'd2c12003-205f-49e1-8979-1f17aa81a72d', '2024-06-04 00:27:22.45926+00', '2024-06-04 00:27:22.45926+00', NULL, 'aal1', NULL, NULL, 'Expo/1017614 CFNetwork/1410.0.3 Darwin/22.6.0', '172.19.0.1', NULL),
	('5c573c85-5f88-4f9b-8841-e0c978001b8c', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '2024-06-08 01:00:44.919073+00', '2024-06-08 01:00:44.919073+00', NULL, 'aal1', NULL, NULL, 'Expo/1017614 CFNetwork/1410.0.3 Darwin/22.6.0', '172.19.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('1357857b-b4c6-4bb1-a397-16c6c8367ba6', '2024-02-24 05:49:53.543892+00', '2024-02-24 05:49:53.543892+00', 'password', '940ba319-553c-4627-bd25-84e61c9a277d'),
	('4f2d3ad6-3a81-4616-815c-3d6ecd85859d', '2024-06-04 00:27:22.461743+00', '2024-06-04 00:27:22.461743+00', 'password', '21cc8d2a-820c-40e3-a827-391052891731'),
	('5c573c85-5f88-4f9b-8841-e0c978001b8c', '2024-06-08 01:00:44.921278+00', '2024-06-08 01:00:44.921278+00', 'password', '01f4c7b1-beb2-49e1-a10c-45a5c5f3e488');


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
	('00000000-0000-0000-0000-000000000000', 12, '_RmLEyi7bpkOn-AE3p36Bg', '3f716c7c-9df6-4586-846f-18f230dd6c8c', false, '2024-02-24 05:49:53.542103+00', '2024-02-24 05:49:53.542103+00', NULL, '1357857b-b4c6-4bb1-a397-16c6c8367ba6'),
	('00000000-0000-0000-0000-000000000000', 32, 'FaUzj3zo0scZBFcz_x6mwQ', 'd2c12003-205f-49e1-8979-1f17aa81a72d', false, '2024-06-04 00:27:22.460138+00', '2024-06-04 00:27:22.460138+00', NULL, '4f2d3ad6-3a81-4616-815c-3d6ecd85859d'),
	('00000000-0000-0000-0000-000000000000', 33, 'kU4tdub6B3hwRqqnp9wZ3g', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', false, '2024-06-08 01:00:44.919856+00', '2024-06-08 01:00:44.919856+00', NULL, '5c573c85-5f88-4f9b-8841-e0c978001b8c');


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

INSERT INTO "public"."users" ("id", "created_at", "email", "username", "avatar", "bio", "birthday", "location", "full_name") VALUES
	('3f716c7c-9df6-4586-846f-18f230dd6c8c', '2024-04-01 04:44:30.773257+00', 'leluens25@gmail.com', 'lawrence', NULL, NULL, NULL, NULL, NULL),
	('0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', '2024-04-01 04:44:30.773257+00', 'hansonhn369@gmail.com', 'hanson', 'https://res.cloudinary.com/dgqxfulav/image/upload/v1714274434/hmqx0pesn31gtckq4ehq.jpg', 'yum yum in my tum tum', NULL, NULL, 'Hanson'),
	('d2c12003-205f-49e1-8979-1f17aa81a72d', '2024-06-04 00:11:25.32253+00', 'gorda@gmail.com', 'gramsey', NULL, 'i love food', NULL, NULL, 'Gordan Ramsey');


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."posts" ("id", "created_at", "media", "title", "description", "location", "rating", "user_id") VALUES
	(2, '2024-02-02 06:11:04.602129+00', '{https://res.cloudinary.com/dgqxfulav/image/upload/v1706854257/txc1nbywym3vkwgbjci9.jpg,https://res.cloudinary.com/dgqxfulav/image/upload/v1706854263/yggbvckzpwo2kgacgg0j.jpg}', 'Good eats right here', 'so yummy you have to try', 'Davis, CA', NULL, '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc'),
	(3, '2024-04-28 16:04:45.176213+00', '{https://res.cloudinary.com/dgqxfulav/image/upload/v1714320281/axnfs1fziaivgmygvsak.jpg,https://res.cloudinary.com/dgqxfulav/video/upload/v1714320284/u4fj1tshyf6jbxdishxk.mov}', 'Fake zyns', 'i think im addicted now', 'Davis, CA', NULL, '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc'),
	(4, '2024-05-10 16:20:15.759407+00', '{https://res.cloudinary.com/dgqxfulav/image/upload/v1715358013/v4yac2opgmkfbfxxfr2j.jpg,https://res.cloudinary.com/dgqxfulav/video/upload/v1715358015/jphlsl7nsuoktyiup8gb.mov}', 'cool', 'cool', 'cool', NULL, '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc'),
	(5, '2024-06-04 00:12:46.240748+00', '{https://res.cloudinary.com/dgqxfulav/image/upload/v1717459961/omcpjrbdgnivqmcrxasw.jpg}', 'cooking rn', 'i love richmond', 'Richmond, VA', NULL, 'd2c12003-205f-49e1-8979-1f17aa81a72d');


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."comments" ("id", "created_at", "content", "user_id", "post_id") VALUES
	(1, '2024-04-28 18:16:09.511827+00', 'such a cool post ik', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 3),
	(2, '2024-04-28 18:37:35.02895+00', 'i love this', '3f716c7c-9df6-4586-846f-18f230dd6c8c', 3),
	(3, '2024-04-28 20:09:04.463993+00', 'i agree', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 3),
	(4, '2024-04-28 20:09:22.598159+00', 'top 3 post oat', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 2);


--
-- Data for Name: following; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."following" ("id", "created_at", "follower", "followee") VALUES
	(10, '2024-06-08 01:06:06.611268+00', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 'd2c12003-205f-49e1-8979-1f17aa81a72d');


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."likes" ("id", "created_at", "user_id", "post_id") VALUES
	(5, '2024-04-28 18:03:14.718638+00', '3f716c7c-9df6-4586-846f-18f230dd6c8c', 3),
	(7, '2024-04-28 20:22:08.422337+00', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 3),
	(8, '2024-05-10 02:15:53.773098+00', '0fdb7f10-c7c8-4fbf-8130-bbc3f5fc9ecc', 2),
	(10, '2024-06-04 00:32:38.301514+00', 'd2c12003-205f-49e1-8979-1f17aa81a72d', 3);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: posts_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('posts', 'posts', NULL, '2024-01-30 17:56:20.348763+00', '2024-01-30 17:56:20.348763+00', true, false, NULL, NULL, NULL),
	('avatars', 'avatars', NULL, '2024-04-01 04:45:27.308587+00', '2024-04-01 04:45:27.308587+00', true, false, NULL, NULL, NULL);


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 33, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."comments_id_seq"', 4, true);


--
-- Name: following_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."following_id_seq"', 10, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."likes_id_seq"', 10, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 5, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tags_id_seq"', 1, false);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
