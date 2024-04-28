import { isCameraCapturedPicture, isStringArray } from "@lib/utils";
import { ImageVideo } from "@type/types";
import { ResizeMode, Video } from "expo-av";
import { FlatList, Image } from "react-native";

type MediaFlatlistProps = {
	media: ImageVideo[] | string[];
};

export default function MediaFlatlist({ media }: MediaFlatlistProps) {
	if (isStringArray(media)) {
		return (
			<FlatList
				horizontal
				data={media}
				renderItem={(item) => {
					const mediaWidth = 350,
						mediaHeight = 450;
					if (item.item.includes(".jpg")) {
						return (
							<Image
								source={{ uri: item.item }}
								width={mediaWidth}
								height={mediaHeight}
								style={{ marginHorizontal: 4 }}
							/>
						);
					}
					return (
						<Video
							source={{ uri: item.item }}
							useNativeControls
							resizeMode={ResizeMode.COVER}
							style={{
								marginHorizontal: 4,
								width: mediaWidth,
								height: mediaHeight,
							}}
						/>
					);
				}}
				keyExtractor={(item) => item}
			/>
		);
	}

	return (
		<FlatList
			horizontal
			data={media}
			renderItem={(item) => {
				const mediaWidth = 350,
					mediaHeight = 450;
				if (isCameraCapturedPicture(item.item)) {
					return (
						<Image
							source={{ uri: item.item.uri }}
							width={mediaWidth}
							height={mediaHeight}
							style={{ marginHorizontal: 4 }}
						/>
					);
				}
				return (
					<Video
						source={{ uri: item.item.uri }}
						useNativeControls
						resizeMode={ResizeMode.COVER}
						style={{
							marginHorizontal: 4,
							width: mediaWidth,
							height: mediaHeight,
						}}
					/>
				);
			}}
			keyExtractor={(item) => item.uri}
		/>
	);
}
