/**
 * This file is required for the SVG component to contain the `xmlns` property.
 */

import "react-native-svg";

declare module "react-native-svg" {
	export interface SvgProps {
		xmlns?: string;
	}
}
