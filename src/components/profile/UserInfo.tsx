import Avatar from "@components/ui/Avatar";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import useFollowMutation from "@hooks/useFollowMutation";
import useUserStats from "@hooks/useUserStats";
import { User } from "@type/supabase";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type UserInfoProps = {
	user: User;
	isLoggedInUser: boolean;
};

export default function UserInfo({ user, isLoggedInUser }: UserInfoProps) {
	const {
		data: userStats,
		isPending: isUserStatsPending,
		error: userStatsError,
	} = useUserStats(user.id);
	const { updateUserFollow } = useFollowMutation(user.id);

	if (isUserStatsPending || userStatsError) {
		return <></>;
	}

	return (
		<View style={styles.headerContainer}>
			<View style={styles.content}>
				<Avatar uri={user.avatar} style={styles.profilePic} />
				<View style={styles.statsContainer}>
					<TouchableOpacity
						onPress={() => console.log("Num posts pressed...")}
					>
						<View style={styles.statContainer}>
							<Text style={styles.statNum}>
								{userStats.postCount}
							</Text>
							<Text style={styles.statTitle}>Posts</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => console.log("Followers pressed...")}
					>
						<View style={styles.statContainer}>
							<Text style={styles.statNum}>
								{userStats.followerCount}
							</Text>
							<Text style={styles.statTitle}>Followers</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => console.log("Following pressed...")}
					>
						<View style={styles.statContainer}>
							<Text style={styles.statNum}>
								{userStats.followingCount}
							</Text>
							<Text style={styles.statTitle}>Following</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.bioContainer}>
				<Text style={styles.actualName}>{user.full_name}</Text>
				<Text style={styles.bio}>{user.bio}</Text>
			</View>
			<View style={styles.buttonContainer}>
				{isLoggedInUser ? (
					<Button
						style={[styles.button, styles.editButton]}
						onPress={() => router.push("/editProfile/")}
					>
						<Text style={styles.buttonText}>Edit</Text>
					</Button>
				) : (
					<Button
						style={[styles.button, styles.editButton]}
						onPress={() =>
							updateUserFollow.mutate(!userStats.userFollowed)
						}
					>
						<Text style={styles.buttonText}>
							{userStats.userFollowed ? "Unfollow" : "Follow"}
						</Text>
					</Button>
				)}
				<Button
					style={[styles.button, styles.shareButton]}
					onPress={() => console.log("Share pressed...")}
				>
					<Text style={[styles.buttonText, styles.shareButtonText]}>
						Share
					</Text>
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		padding: 30,
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
	},
	profilePic: {
		height: 100,
		width: 100,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: "purple",
		marginRight: 30,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Styles.colors.darkgreen.primary,
	},
	statsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	statContainer: {
		alignItems: "center",
		marginRight: 20,
	},
	statNum: {
		fontSize: 16,
		fontFamily: Styles.fonts.text.semibold,
	},
	statTitle: {
		color: Styles.colors.gray.primary,
		fontFamily: Styles.fonts.text.regular,
	},
	bioContainer: {
		marginVertical: 10,
	},
	actualName: {
		fontSize: 18,
		fontFamily: Styles.fonts.text.semibold,
	},
	bio: {
		marginTop: 5,
		fontFamily: Styles.fonts.text.regular,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 12,
	},
	button: {
		borderRadius: 12,
		paddingVertical: 8,
		width: 180,
		height: 36,
	},
	buttonText: {
		color: Styles.colors.white.primary,
		fontFamily: Styles.fonts.text.regular,
		textAlign: "center",
	},
	shareButtonText: {
		color: Styles.colors.black.primary,
	},
	editButton: {
		backgroundColor: Styles.colors.black.primary,
	},
	shareButton: {
		borderColor: Styles.colors.black.primary,
		borderWidth: 1,
	},
});
