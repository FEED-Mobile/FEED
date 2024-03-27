import { isAuthError, PostgrestError } from "@supabase/supabase-js";
import { ImageVideo } from "@type/types";
import { decode } from "base64-arraybuffer";
import { CameraCapturedPicture } from "expo-camera";
import * as FileSystem from "expo-file-system";

import { supabase } from "./supabase";

/**
 * Type guard to check if media is image or video
 * @param media
 * @returns
 */
export const isCameraCapturedPicture = (
	media: ImageVideo
): media is CameraCapturedPicture => {
	if ("width" in media && "height" in media) {
		return true;
	}
	return false;
};

/**
 * Type guard to check if error is a PostgrestError from Supabase
 * @param error
 * @returns
 */
const isPostgrestError = (error: unknown): error is PostgrestError => {
	return (
		typeof error === "object" &&
		error !== null &&
		"code" in error &&
		"details" in error &&
		"hint" in error &&
		"message" in error
	);
};

/**
 * Return appropriate error message depending on type of error
 * @param error
 * @returns
 */
export const handleError = (error: unknown) => {
	if (isAuthError(error) || isPostgrestError(error)) {
		return error.message;
	}

	return "An unknown error has occurred. Please try again.";
};

/**
 * Upload an image or video to Cloudinary through a POST request
 * @param fileName
 * @param fileExt
 * @param mediaType
 * @param mediaFile
 * @returns null if error, otherwise public URL to media file
 */
export const uploadToCloudinary = async (
	fileName: string,
	fileExt: string,
	mediaType: string,
	mediaFile: ImageVideo
): Promise<string | null> => {
	if (!fileName || !fileExt || !mediaType || !mediaFile) {
		return null;
	}

	// Build Formdata to send in request
	const filedata = {
		uri: mediaFile.uri,
		type: `${mediaType}/${fileExt}`,
		name: fileName ?? "",
	};
	const form = new FormData();
	form.append("file", filedata);
	form.append(
		"upload_preset",
		process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? ""
	);

	// Attempt upload to Cloudinary
	try {
		const res = await fetch(
			`${process.env.EXPO_PUBLIC_CLOUDINARY_URL}/${mediaType}/upload`,
			{
				method: "post",
				body: form,
			}
		);
		const resJSON = await res.json();

		// Return URL for image
		return resJSON["secure_url"];
	} catch (e) {
		return null;
	}
};

/**
 * Upload and image or video to Supabase
 * @param userId
 * @param fileName
 * @param fileExt
 * @param mediaType
 * @param mediaFile
 * @returns null if error, otherwise public URL to media file
 */
export const uploadToSupabase = async (
	userId: string,
	fileName: string,
	fileExt: string,
	mediaType: string,
	mediaFile: ImageVideo
): Promise<string | null> => {
	const base64 = await FileSystem.readAsStringAsync(mediaFile.uri, {
		encoding: "base64",
	});
	const destinationPath = `${userId}/${fileName}`;
	const contentType = `${mediaType}/${fileExt}`;
	const { data: uploadResponse, error: storageError } = await supabase.storage
		.from("posts")
		.upload(destinationPath, decode(base64), { contentType });

	if (!uploadResponse || storageError) {
		console.log(
			"An error occurred in uploading the media file: ",
			storageError
		);
		return null;
	}

	// Get URL for image
	const {
		data: { publicUrl },
	} = supabase.storage.from("posts").getPublicUrl(uploadResponse.path);

	return publicUrl;
};
