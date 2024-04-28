import Svg, { Path } from "react-native-svg";

export default function SaveIcon() {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={17}
			height={25}
			fill="none"
		>
			<Path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2.5}
				d="M13.292 2H3.958a2.333 2.333 0 0 0-2.333 2.333V23l7-3.5 7 3.5V4.333A2.333 2.333 0 0 0 13.292 2Z"
			/>
		</Svg>
	);
}
