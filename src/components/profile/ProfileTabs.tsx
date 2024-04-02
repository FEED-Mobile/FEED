import Styles from "@constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import useUserPostsQuery from "@hooks/useUserPostsQuery";
import useUserQuery from "@hooks/useUserQuery";
import MasonryList from "@react-native-seoul/masonry-list";
import { Post } from "@type/supabase";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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

type PostItemProps = {
	post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
	const mediaWidth = 100,
		mediaHeight = 150;
	return (
		<View style={postItemStyles.container}>
			<Image
				source={{
					uri: post.media[0],
				}}
				width={mediaWidth}
				height={mediaHeight}
			/>
		</View>
	);
};

type PostGridProps = {
	posts: Post[];
};

const PostsGrid = ({ posts }: PostGridProps) => {
	return (
		<MasonryList
			data={posts}
			renderItem={(item) => <PostItem post={item.item} />}
			numColumns={3}
			// keyExtractor={(item) => item.}
		/>
	);
};

const YourPostsGrid = () => {
	const {
		data: user,
		isPending: isUserPending,
		error: userError,
	} = useUserQuery();

	if (isUserPending || userError) {
		return <></>;
	}

	const {
		data: posts,
		isPending: isPostsPending,
		error: postsError,
	} = useUserPostsQuery(user.id ?? "");

	if (isPostsPending || postsError) {
		return <></>;
	}

	if (posts.length) {
		return <PostsGrid posts={posts} />;
	}
};

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

const postItemStyles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: Styles.colors.black.primary,
	},
});
