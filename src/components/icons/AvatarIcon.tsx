import useUserQuery from "@hooks/useUserQuery";
import { Image } from "react-native";

export default function AvatarIcon({ color }: { color: string }) {
	const { data: user, isPending, error } = useUserQuery();

	if (isPending || error) {
		return <></>;
	}

	return (
		<Image
			source={{ uri: user.avatar ?? "" }}
			width={30}
			height={30}
			style={{ borderRadius: 15, borderWidth: 1, borderColor: color }}
		/>
	);
}
