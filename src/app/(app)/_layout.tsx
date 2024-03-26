import HeaderSettings from "@components/Header/HeaderSettings";
import HeaderTitle from "@components/Header/HeaderTitle";
import Styles from "@constants/Styles";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { supabase } from "@lib/supabase";
import { Database } from "@type/supabase";
import { router, Tabs } from "expo-router";
import { useEffect, useState } from "react";

export default function MainLayout() {
	const [user, setUser] = useState<
		Database["public"]["Tables"]["users"]["Row"] | null
	>(null);

	useEffect(() => {
		// Get user information
		const getUser = async () => {
			const {
				data: { user: authUser },
			} = await supabase.auth.getUser();

			const { data: user, error } = await supabase
				.from("users")
				.select()
				.eq("id", authUser?.id ?? "")
				.limit(1)
				.single();

			if (!user || error) {
				return;
			}

			setUser(user);
		};

		getUser();
	}, []);

	return (
		<Tabs
			screenOptions={{
				tabBarStyle: { height: 110 },
				tabBarActiveTintColor: Styles.colors.green.primary,
				tabBarInactiveTintColor: Styles.colors.gray.primary,
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="home/index"
				options={{
					title: "Home",
					headerTitle: "Home",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5
							name="utensils"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore/index"
				options={{
					title: "Explore",
					headerTitle: "Explore",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="search" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="create/index"
				options={{
					title: "Post",
					headerTitle: "Post",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="plus" size={size} color={color} />
					),
				}}
				listeners={() => ({
					tabPress: (e) => {
						// Navigate to post modal
						e.preventDefault();
						router.push("/post/");
					},
				})}
			/>
			<Tabs.Screen
				name="notifications/index"
				options={{
					title: "Notifications",
					headerTitle: "Notifications",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="notifications"
							size={size}
							color={color}
						/>
					),
					tabBarBadge: 5,
					tabBarBadgeStyle: {
						marginTop: 16,
						marginRight: 4,
						color: Styles.colors.white.primary,
						backgroundColor: Styles.colors.green.primary,
					},
				}}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{
					title: user?.username,
					headerTitle: ({ children }) => (
						<HeaderTitle
							children={children}
							style={{
								fontFamily: Styles.fonts.text.semibold,
								fontSize: 24,
							}}
						/>
					),
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="user" size={size} color={color} />
					),
					headerRight: () => <HeaderSettings />,
				}}
			/>
		</Tabs>
	);
}
