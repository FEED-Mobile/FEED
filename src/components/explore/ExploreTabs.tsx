import SearchFriendsIcon from "@components/icons/SearchFriendsIcon";
import SearchPostsIcon from "@components/icons/SearchPostsIcon";
import Styles from "@constants/Styles";
import Constants from "expo-constants";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const UserSearch = () => {
	return (
		<View>
			<Text>User Search</Text>
		</View>
	);
};

const PostSearch = () => {
	return (
		<View>
			<Text>Post Search</Text>
		</View>
	);
};

const renderScene = SceneMap({
	user: UserSearch,
	post: PostSearch,
});

export default function ExploreTabs() {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: "user", title: "User Search" },
		{ key: "post", title: "Post Search" },
	]);
	return (
		<TabView
			renderTabBar={(props) => (
				<TabBar
					{...props}
					style={{
						backgroundColor: "none",
					}}
					indicatorStyle={{
						backgroundColor: Styles.colors.black.primary,
					}}
					renderLabel={({ route }) =>
						route.key === "user" ? (
							<View style={styles.iconContainer}>
								<SearchFriendsIcon />
							</View>
						) : (
							<View style={styles.iconContainer}>
								<SearchPostsIcon />
							</View>
						)
					}
				/>
			)}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
		/>
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		marginTop: Constants.statusBarHeight,
	},
});
