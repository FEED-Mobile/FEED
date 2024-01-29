import { Text, View } from "@components/Themed";
import { useState } from "react";
import { Image, TouchableOpacity, useWindowDimensions, FlatList} from "react-native";


export default function ProfilePage() {
	const hanson = { uri: 'https://hansonn.com/assets/profile-pic.e5322a2a.jpg'}
	return (
		<View>
			<Text>this is the profile page</Text>

			<Image
				source={hanson}
				resizeMode="cover"
				style={{
					height: 155,
					width: 155,
					borderRadius: 999,
					borderWidth: 2,
					marginTop: -90,
				}}
				/>
		</View>
	);
}
