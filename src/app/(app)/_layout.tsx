import { Tabs } from "expo-router";

export default function MainLayout() {
    return (
		<Tabs>
			<Tabs.Screen 
				name="(home)/index"
				options={{
					title: "Home",
					headerTitle: "Home"
				}}
			/>
			<Tabs.Screen 
				name="(collections)/index"
				options={{
					title: "Collections",
					headerTitle: "Collections"
				}}
			/>
			<Tabs.Screen 
				name="(post)/index"
				options={{
					title: "Post",
					headerTitle: "Post"
				}}
			/>
			<Tabs.Screen 
				name="(notifications)/index"
				options={{
					title: "Notifications",
					headerTitle: "Notifications"
				}}
			/>
			<Tabs.Screen 
				name="(profile)/index"
				options={{
					title: "Profile",
					headerTitle: "Profile"
				}}
			/>
		</Tabs>
	);
}
