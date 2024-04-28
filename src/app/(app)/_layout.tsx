import HeaderBack from "@components/header/HeaderBack";
import HeaderSettings from "@components/header/HeaderSettings";
import HeaderTitle from "@components/header/HeaderTitle";
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
				name="home/index"
				options={{
					title: "Home",
					headerTitle: "Home",
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="explore/index"
				options={{
					title: "Explore",
					headerTitle: "Explore",
					tabBarIcon: ({ color }) => <ExploreIcon color={color} />,
				}}
			/>
			<Tabs.Screen
				name="create/index"
				options={{
					title: "Create",
					headerTitle: "Create",
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
				name="notifications/index"
				options={{
					title: "Notifications",
					headerTitle: "Notifications",
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
				name="profile/index"
				options={{
					title: user.username,
					headerTitle: ({ children }) => (
						<HeaderTitle
							children={children}
							style={{
								fontFamily: Styles.fonts.text.semibold,
								fontSize: 24,
							}}
						/>
					),
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
					headerRight: () => <HeaderSettings />,
				}}
			/>
			<Tabs.Screen
				name="post/[id]"
				options={{
					title: "Post",
					headerTitle: () => <HeaderTitle />,
					headerLeft: () => <HeaderBack />,
					href: null,
				}}
			/>
		</Tabs>
	);
}
