import HeaderTitle from "@components/header/HeaderTitle";
import ProfileTabs from "@components/profile/ProfileTabs";
import UserInfo from "@components/profile/UserInfo";
import Styles from "@constants/Styles";
import useUserQuery from "@hooks/useUserQuery";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

type UserProfileProps = {
	userId: string;
};

export default function UserProfile({ userId }: UserProfileProps) {
	const {
		data: loggedInUser,
		isPending: isLoggedInUserPending,
		error: loggedInUserError,
	} = useUserQuery();
	const {
		data: userBasedOnId,
		isPending: isUserBasedOnIdPending,
		error: userBasedOnIdError,
	} = useUserQuery(userId);
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			title: userBasedOnId?.username,
			headerTitle: ({ children }: { children: string }) => (
				<HeaderTitle
					children={children}
					style={{
						fontFamily: Styles.fonts.text.semibold,
						fontSize: 24,
					}}
				/>
			),
		});
	}, [navigation, userBasedOnId]);

	if (
		isLoggedInUserPending ||
		loggedInUserError ||
		isUserBasedOnIdPending ||
		userBasedOnIdError
	) {
		return <></>;
	}

	// Determine which user to use
	const isLoggedInUser = loggedInUser.id === userId;
	const user = isLoggedInUser ? loggedInUser : userBasedOnId;

	return (
		<View style={styles.container}>
			<UserInfo user={user} isLoggedInUser={isLoggedInUser} />
			<ProfileTabs isLoggedInUser={isLoggedInUser} userId={user.id} />
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
