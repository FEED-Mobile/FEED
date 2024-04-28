import Svg, { Circle } from "react-native-svg";

export default function ExploreIcon({ color }: { color: string }) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={25}
			height={27}
			fill="none"
		>
			<Circle cx={22} cy={24} r={2} stroke={color} strokeWidth={2} />
			<Circle cx={12} cy={12} r={10.5} stroke={color} strokeWidth={3} />
		</Svg>
	);
}
