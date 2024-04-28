import "react-native-svg";

// FormData
interface FormDataValue {
	uri: string;
	name: string;
	type: string;
}

interface FormData {
	append(name: string, value: FormDataValue, fileName?: string): void;
	set(name: string, value: FormDataValue, fileName?: string): void;
}

// Images in assets file
declare module "*.jpg";

// React Native SVG
declare module "react-native-svg" {
	export interface SvgProps {
		xmlns?: string;
	}
}
