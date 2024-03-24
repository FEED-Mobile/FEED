import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Styles from "@constants/Styles";

export default function ProfilePage() {
	return (
		<View style={styles.container}>
			{/* add other tings/settings and arrow button etc */}
			<Text style={styles.username}>hanson</Text>

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
						"N-Guy-En"
					</Text>
				</View>
			</View>
			<TouchableOpacity
				style={styles.editButton}
				onPress={() => console.log("wyd")}
			>
				<Text style={styles.editButtonText}>Edit Profile</Text>
			</TouchableOpacity>
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
	username: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 10,
		fontFamily: Styles.fonts.title,
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
		fontWeight: "bold",
		fontFamily: Styles.fonts.text,
	},
	statTitle: {
		color: Styles.colors.gray.primary,
		fontFamily: Styles.fonts.text,
	},
	bioContainer: {
		marginTop: 10,
		marginBottom: 10,
	},
	actualName: {
		fontSize: 24,
		fontWeight: "bold",
		fontFamily: Styles.fonts.title,
	},
	bioThing: {
		marginTop: 5,
	},
	bio: {
		fontFamily: Styles.fonts.text,
	},
	editButtonContainer: {
		alignSelf: "stretch",
		marginTop: 25,
		marginBottom: 15,
	},
	editButton: {
		borderWidth: 2,
		borderColor: Styles.colors.black.primary,
		borderRadius: 5,
		paddingVertical: 8,
		alignItems: "center",
	},
	editButtonText: {
		color: Styles.colors.black.primary,
		fontFamily: Styles.fonts.text,
	},
});
