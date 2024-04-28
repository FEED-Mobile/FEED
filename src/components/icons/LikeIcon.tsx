import Svg, { Path } from "react-native-svg";

export default function LikeIcon() {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={21}
			fill="none"
		>
			<Path
				stroke="#000"
				strokeWidth={2.5}
				d="M17.085 1.25a5.296 5.296 0 0 1 5.29 5.29l-5.29-5.29Zm0 0c-1.812 0-3.337.773-4.273 2.02l-1 1.331-1-1.33C9.878 2.022 8.353 1.25 6.54 1.25a5.296 5.296 0 0 0-5.29 5.29c0 3.106 2.347 6.122 5.105 8.537a34.142 34.142 0 0 0 5.457 3.861c.691-.386 3.1-1.796 5.458-3.86 2.758-2.416 5.104-5.432 5.105-8.538l-5.29-5.29Z"
			/>
		</Svg>
	);
}
