import ProfileTabs from "@components/profile/ProfileTabs";
import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import useUserQuery from "@hooks/useUserQuery";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfilePage() {
	const { data: user, isPending, error } = useUserQuery();

	if (isPending || error) {
		return <></>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.content}>
					{user.avatar ? (
						<Image
							source={{
								uri: user.avatar,
							}}
							style={styles.profilePic}
						/>
					) : (
						<View style={styles.profilePic}>
							<Ionicons
								name="fast-food"
								size={64}
								color={Styles.colors.lightgreen.primary}
							/>
						</View>
					)}

					<View style={styles.statsContainer}>
						<TouchableOpacity
							onPress={() => console.log("Num posts pressed...")}
						>
							<View style={styles.statContainer}>
								<Text style={styles.statNum}>90</Text>
								<Text style={styles.statTitle}>Posts</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => console.log("Followers pressed...")}
						>
							<View style={styles.statContainer}>
								<Text style={styles.statNum}>987</Text>
								<Text style={styles.statTitle}>Followers</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => console.log("Following pressed...")}
						>
							<View style={styles.statContainer}>
								<Text style={styles.statNum}>560</Text>
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
					<Button
						style={[styles.button, styles.editButton]}
						onPress={() => router.push("/editProfile/")}
					>
						<Text style={styles.buttonText}>Edit Profile</Text>
					</Button>
					<Button
						style={[styles.button, styles.shareButton]}
						onPress={() => console.log("Share pressed...")}
					>
						<Text style={styles.buttonText}>Share</Text>
					</Button>
				</View>
			</View>
			<ProfileTabs />
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
		fontSize: 22,
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
		borderRadius: 5,
		padding: 8,
		width: 180,
		height: 36,
	},
	buttonText: {
		color: Styles.colors.white.primary,
		fontFamily: Styles.fonts.text.regular,
		textAlign: "center",
	},
	editButton: {
		backgroundColor: Styles.colors.black.primary,
	},
	shareButton: {
		backgroundColor: Styles.colors.gray.primary,
	},
});
