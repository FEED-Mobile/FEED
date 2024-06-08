import IndividualPost from "@components/post/Post";
import useFeedQuery from "@hooks/useFeedQuery";
import { useMemo } from "react";
import { FlatList, View } from "react-native";

export default function HomePage() {
	const { data, isPending, error, fetchNextPage, isFetching } =
		useFeedQuery();
	const posts = useMemo(() => data?.pages.flatMap((page) => page), [data]);

	if (isPending || error || !posts) {
		return <></>;
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={posts}
				renderItem={({ item }) => {
					return <IndividualPost id={item.id} />;
				}}
				onRefresh={fetchNextPage}
				refreshing={isFetching}
			/>
		</View>
	);
}
