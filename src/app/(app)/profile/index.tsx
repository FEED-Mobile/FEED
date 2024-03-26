import Button from "@components/ui/Button";
import Styles from "@constants/Styles";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfilePage() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					source={{
						uri: "https://hansonn.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_pic.6b4f19f1.jpg&w=1920&q=75",
					}}
					style={styles.profilePic}
				/>

				<View style={styles.statsContainer}>
					<TouchableOpacity onPress={() => console.log("hi")}>
						<View style={styles.stat}>
							<Text style={styles.statNum}>90</Text>
							<Text style={styles.statTitle}>Posts</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log("hey")}>
						<View style={styles.stat}>
							<Text style={styles.statNum}>987</Text>
							<Text style={styles.statTitle}>Followers</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => console.log("hyd")}>
						<View style={styles.stat}>
							<Text style={styles.statNum}>560</Text>
							<Text style={styles.statTitle}>Following</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.bioContainer}>
				<View>
					<Text style={styles.actualName}>Hanson Nguyen</Text>
				</View>
				<View style={styles.bioThing}>
					<Text style={styles.bio}>
						hi my names hanson and my last name is pronounced
						N-Guy-En
					</Text>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					style={[styles.button, styles.editButton]}
					onPress={() => console.log("wyd")}
				>
					<Text style={styles.buttonText}>Edit Profile</Text>
				</Button>
				<Button
					style={[styles.button, styles.shareButton]}
					onPress={() => console.log("wyd")}
				>
					<Text style={styles.buttonText}>Share</Text>
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	},
	statsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	stat: {
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
		marginTop: 10,
		marginBottom: 10,
	},
	actualName: {
		fontFamily: Styles.fonts.text.semibold,
	},
	bioThing: {
		marginTop: 5,
	},
	bio: {
		fontFamily: Styles.fonts.text.regular,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		borderRadius: 5,
		paddingVertical: 8,
		alignItems: "center",
		width: 180,
		height: 36,
	},
	buttonText: {
		color: Styles.colors.white.primary,
		fontFamily: Styles.fonts.text.regular,
	},
	editButton: {
		backgroundColor: Styles.colors.black.primary,
	},
	shareButton: {
		backgroundColor: Styles.colors.gray.primary,
	},
});
