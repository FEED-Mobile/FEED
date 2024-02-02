import { Tabs, router } from "expo-router";

export default function MainLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="home/index"
				options={{
					title: "Home",
					headerTitle: "Home",
				}}
			/>
			<Tabs.Screen
				name="explore/index"
				options={{
					title: "Explore",
					headerTitle: "Explore",
				}}
			/>
			<Tabs.Screen
				name="create/index"
				options={{
					title: "Post",
					headerTitle: "Post",
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
				}}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{
					title: "Profile",
					headerTitle: "Profile",
				}}
			/>
		</Tabs>
	);
}
