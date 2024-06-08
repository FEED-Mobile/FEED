import { CameraCapturedPicture } from "expo-camera";

export type CameraCapturedVideo = {
	uri: string;
};

export type ImageVideo = CameraCapturedPicture | CameraCapturedVideo;
