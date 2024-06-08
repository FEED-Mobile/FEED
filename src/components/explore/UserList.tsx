import Avatar from "@components/ui/Avatar";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import useSearchUserQuery from "@hooks/useSearchUserQuery";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type UserListProps = {
	searchQuery: string;
};

export default function UserList({ searchQuery }: UserListProps) {
	const { data: users, isPending, error } = useSearchUserQuery(searchQuery);

	if (isPending || error) {
		return <></>;
	}

	return (
		<View style={styles.container}>
			{users.length ? (
				<View style={styles.listContainer}>
					<Text style={styles.peopleText}>People</Text>
					{users.map((user, index) => (
						<Button
							key={user.id}
							style={[
								styles.userContainer,
								index === 0 ? { paddingTop: 32 } : null,
							]}
							onPress={() => router.push(`/explore/${user.id}`)}
						>
							<Avatar
								uri={user.avatar}
								style={{
									width: 48,
									height: 48,
									borderRadius: 24,
									borderWidth: 1,
									backgroundColor:
										Styles.colors.darkgreen.primary,
								}}
							/>
							<Text style={styles.username}>{user.username}</Text>
						</Button>
					))}
				</View>
			) : (
				<Text style={styles.noUsersText}>No users found.</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	userContainer: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	listContainer: {
		padding: 16,
	},
	peopleText: {
		fontSize: 18,
		fontFamily: Styles.fonts.text.semibold,
	},
	username: {
		fontSize: 18,
		fontFamily: Styles.fonts.text.regular,
	},
	noUsersText: {
		textAlign: "center",
		marginTop: 48,
		fontSize: 24,
		fontFamily: Styles.fonts.text.semibold,
	},
});
