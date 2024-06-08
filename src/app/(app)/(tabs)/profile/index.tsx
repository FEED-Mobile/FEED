import UserProfile from "@components/profile/UserProfile";
import useUserQuery from "@hooks/useUserQuery";

export default function ProfilePage() {
	const { data: user, isPending, error } = useUserQuery();

	if (isPending || error) {
		return <></>;
	}

	return <UserProfile userId={user.id} />;
}
