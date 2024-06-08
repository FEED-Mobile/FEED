import UserProfile from "@components/profile/UserProfile";
import { useLocalSearchParams } from "expo-router";

export default function HomeUserPage() {
	const { userId } = useLocalSearchParams();
	if (!userId || Array.isArray(userId)) {
		return <></>;
	}

	return <UserProfile userId={userId} />;
}
