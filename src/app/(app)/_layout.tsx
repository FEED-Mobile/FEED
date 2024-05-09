import CreatePostIcon from "@components/icons/CreatePostIcon";
import ExploreIcon from "@components/icons/ExploreIcon";
import HomeIcon from "@components/icons/HomeIcon";
import NotificationsIcon from "@components/icons/NotificationsIcon";
import Avatar from "@components/ui/Avatar";
import Styles from "@constants/Styles";
import useUserQuery from "@hooks/useUserQuery";
import { router, Tabs } from "expo-router";

export default function MainLayout() {
	const { data: user, isPending, error } = useUserQuery();

	if (isPending || error) {
		return <></>;
	}

	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 20,
					right: 20,
					height: 80,
					borderRadius: 35,
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 4,
					},
					shadowOpacity: 0.25,
					shadowRadius: 2,
					elevation: 5,
					paddingBottom: 0,
				},
				tabBarActiveTintColor: Styles.colors.lightgreen.primary,
				tabBarInactiveTintColor: Styles.colors.black.primary,
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => <ExploreIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="create"
				options={{
					tabBarIcon: ({ color }) => <CreatePostIcon color={color} />,
				}}
				listeners={() => ({
					tabPress: (e) => {
						// Navigate to post modal
						e.preventDefault();
						router.push("/create-post/");
					},
				})}
			/>
			<Tabs.Screen
				name="notifications"
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<NotificationsIcon color={color} />
					),
					tabBarBadge: 5,
					tabBarBadgeStyle: {
						marginTop: 16,
						marginRight: 4,
						color: Styles.colors.white.primary,
						backgroundColor: Styles.colors.lightgreen.primary,
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Avatar
							uri={user.avatar}
							style={{
								width: 30,
								height: 30,
								borderRadius: 15,
								borderWidth: 1,
								borderColor: color,
								backgroundColor:
									Styles.colors.darkgreen.primary,
							}}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
