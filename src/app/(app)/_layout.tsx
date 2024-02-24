import Styles from "@constants/Styles";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";

export default function MainLayout() {
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
						<AntDesign name="search1" size={size} color={color} />
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
					title: "Profile",
					headerTitle: "Profile",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="user" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
