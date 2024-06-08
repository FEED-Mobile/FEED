/**
 * Global store for media that is about to be posted
 */

import { ImageVideo } from "@type/types";
import { create } from "zustand";

type MediaState = {
	media: ImageVideo[];
	actions: {
		addMedia: (newImage: ImageVideo) => void;
		removeMedia: (imageToRemove: ImageVideo) => void;
		resetMedia: () => void;
	};
};

const useMediaStore = create<MediaState>((set) => ({
	media: [],
	actions: {
		addMedia: (newMedia) =>
			set((state) => ({ media: [...state.media, newMedia] })),
		removeMedia: (mediaToRemove) =>
			set((state) => ({
				media: state.media.filter((media) => {
					return media.uri !== mediaToRemove.uri;
				}),
			})),
		resetMedia: () => set({ media: [] }),
	},
}));

export const useMedia = () => useMediaStore((state) => state.media);
export const useMediaActions = () => useMediaStore((state) => state.actions);
