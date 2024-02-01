import { CameraCapturedPicture } from "expo-camera";
import { create } from "zustand";

type ImagesState = {
	images: CameraCapturedPicture[];
	addImage: (newImage: CameraCapturedPicture) => void;
	removeImage: (imageToRemove: CameraCapturedPicture) => void;
	resetImages: () => void;
};

const useImagesStore = create<ImagesState>((set) => ({
	images: [],
	addImage: (newImage) =>
		set((state) => ({ images: [...state.images, newImage] })),
	removeImage: (imageToRemove) =>
		set((state) => ({
			images: state.images.filter((image) => {
				return image.uri !== imageToRemove.uri;
			}),
		})),
	resetImages: () => set({ images: [] }),
}));

export default useImagesStore;
