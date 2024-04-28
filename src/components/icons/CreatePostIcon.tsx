import Svg, { Path, Rect } from "react-native-svg";

export default function CreatePostIcon({ color }: { color: string }) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={29}
			height={29}
			fill="none"
		>
			<Rect
				width={26}
				height={26}
				x={1.5}
				y={1.5}
				stroke={color}
				strokeWidth={3}
				rx={11.5}
			/>
			<Path
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2.5}
				d="M9 14.5h6m0 0h6m-6 0V8m0 6.5V21"
			/>
		</Svg>
	);
}
