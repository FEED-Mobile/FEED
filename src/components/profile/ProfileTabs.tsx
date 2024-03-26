import Styles from "@constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const NoPosts = () => {
	return (
		<View style={noPostsStyles.container}>
			<View style={noPostsStyles.noPostsIconContainer}>
				<AntDesign
					name="camerao"
					size={48}
					color={Styles.colors.black.primary}
				/>
			</View>
			<Text style={noPostsStyles.noPostsText}>No Posts Yet</Text>
		</View>
	);
};

const YourPostsGrid = () => <NoPosts />;

const SavedPostsGrid = () => <NoPosts />;

const renderScene = SceneMap({
	posts: YourPostsGrid,
	saved: SavedPostsGrid,
});

export default function ProfileTabs() {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: "posts", title: "Your Posts" },
		{ key: "saved", title: "Saved" },
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
					renderLabel={({ route }) => (
						<Text
							style={{
								color: Styles.colors.black.primary,
								margin: 8,
							}}
						>
							{route.title}
						</Text>
					)}
				/>
			)}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
		/>
	);
}

const noPostsStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	noPostsIconContainer: {
		borderWidth: 2,
		borderColor: Styles.colors.black.primary,
		borderRadius: 48,
		width: 96,
		height: 96,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	noPostsText: {
		fontFamily: Styles.fonts.text.semibold,
		fontSize: 36,
		marginTop: 8,
	},
});
