import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function NotificationsIcon({ color }: { color: string }) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={23}
			height={29}
			fill="none"
		>
			<Path
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={3}
				d="M20.76 19.158c-1.385-1.777-2.363-2.682-2.363-7.582 0-4.487-2.185-6.085-3.984-6.862a.99.99 0 0 1-.537-.596C13.561 2.992 12.676 2 11.501 2c-1.176 0-2.061.992-2.373 2.119a.98.98 0 0 1-.537.595c-1.8.778-3.984 2.37-3.984 6.862-.003 4.9-.98 5.805-2.365 7.582-.574.736-.072 1.842.932 1.842h16.659c.998 0 1.497-1.109.927-1.842Z"
			/>
			<Circle
				cx={11.5}
				cy={25.5}
				r={2.5}
				stroke={color}
				strokeWidth={2}
			/>
		</Svg>
	);
}
