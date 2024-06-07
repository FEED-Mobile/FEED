import ExploreTabs from "@components/explore/ExploreTabs";
import { StyleSheet, View } from "react-native";

export default function CollectionsPage() {
	return (
		<View style={styles.container}>
			<ExploreTabs />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
