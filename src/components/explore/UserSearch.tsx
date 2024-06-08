import UserList from "@components/explore/UserList";
import Styles from "@constants/Styles";
import { useState } from "react";
import {
	Keyboard,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";

export default function UserSearch() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<TextInput
					onChangeText={(text) => setSearchQuery(text)}
					value={searchQuery}
					placeholder="Enter username to search"
					style={styles.searchbar}
				></TextInput>
				{searchQuery && <UserList searchQuery={searchQuery} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchbar: {
		width: "90%",
		marginTop: 24,
		marginHorizontal: "auto",
		padding: 8,
		borderRadius: 8,
		backgroundColor: "#ededed",
		fontFamily: Styles.fonts.text.regular,
	},
});
