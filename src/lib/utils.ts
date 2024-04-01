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
 * Log in to Supabase with email and password
 * @param email
 * @param password
 */
export const signInToSupabase = async (email: string, password: string) => {
	const {
		data: { user: authUser },
		error: authError,
	} = await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});

	if (authError || !authUser) {
		throw authError;
	}
};

/**
 * Retrieve the filename and extension from a URI
 * @param uri
 * @returns
 */
const getFileInfoFromUri = (uri: string) => {
	const fileName = uri.split("/").pop() ?? "";
	const fileExt = uri.split(".").pop() ?? "";

	return {
		fileName,
		fileExt,
	};
};

/**
 * Uploading images to Cloudinary when running development.
 * In production, images will be uploaded to Supabase Storage.
 * @param userId
 * @param uri
 * @param mediaType
 * @param bucket
 * @returns null if error, otherwise public URL to media file
 */
export const uploadMedia = async (
	userId: string,
	uri: string,
	mediaType: "image" | "video",
	bucket: "posts" | "avatars"
) => {
	let publicUrl;
	if (__DEV__) {
		publicUrl = await uploadMediaToCloudinary(uri, mediaType);
	} else {
		publicUrl = await uploadMediaToSupabase(userId, uri, mediaType, bucket);
	}

	return publicUrl;
};

/**
 * Upload an image or video to Cloudinary through a POST request
 * @param uri
 * @param mediaType
 * @returns null if error, otherwise public URL to media file
 */
const uploadMediaToCloudinary = async (
	uri: string,
	mediaType: "image" | "video"
): Promise<string | null> => {
	if (!uri || !mediaType) {
		console.error("URI/Media Type cannot be empty.");
		return null;
	}

	// Extract file name and extension from URI
	const { fileName, fileExt } = getFileInfoFromUri(uri);

	// Build Formdata to send in request
	const filedata = {
		uri: uri,
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
 * Upload an image or video to Supabase
 * @param userId
 * @param uri
 * @param mediaType
 * @returns null if error, otherwise public URL to media file
 */
const uploadMediaToSupabase = async (
	userId: string,
	uri: string,
	mediaType: "image" | "video",
	bucket: "posts" | "avatars"
): Promise<string | null> => {
	if (!userId || !uri || !mediaType || !bucket) {
		return null;
	}

	// Extract file name and extension from URI
	const { fileName, fileExt } = getFileInfoFromUri(uri);

	const base64 = await FileSystem.readAsStringAsync(uri, {
		encoding: "base64",
	});
	const destinationPath = `${userId}/${fileName}`;
	const contentType = `${mediaType}/${fileExt}`;
	const { data: uploadResponse, error: storageError } = await supabase.storage
		.from(bucket)
		.upload(destinationPath, decode(base64), { contentType });

	if (!uploadResponse || storageError) {
		console.error(
			"An error occurred in uploading the media file: ",
			storageError
		);
		return null;
	}

	// Get URL for image
	const {
		data: { publicUrl },
	} = supabase.storage.from(bucket).getPublicUrl(uploadResponse.path);

	return publicUrl;
};
