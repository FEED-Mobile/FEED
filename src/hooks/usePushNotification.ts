import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";

export type PushNotificationState = {
	pushToken?: Notifications.ExpoPushToken;
	notification?: Notifications.Notification;
};

export const usePushNotifications = (): PushNotificationState => {
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldPlaySound: false,
			shouldShowAlert: true,
			shouldSetBadge: false,
		}),
	});

	const [pushToken, setPushToken] = useState<
		Notifications.ExpoPushToken | undefined
	>();

	const [notification, setNotification] = useState<
		Notifications.Notification | undefined
	>();

	const responseListener = useRef<Notifications.Subscription>();
	const notificationListener = useRef<Notifications.Subscription>();

	async function registerForPushNotification() {
		let token;
		if (Device.isDevice) {
			const { status: existingStatus } =
				await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;

			if (existingStatus !== "granted") {
				const { status } =
					await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}

			if (finalStatus !== "granted") {
				alert("Failed to get push token.");
				return;
			}
			console.log(
				"Project ID:",
				Constants?.expoConfig?.extra?.eas?.projectId ??
					Constants?.easConfig?.projectId
			);
			token = await Notifications.getExpoPushTokenAsync({
				projectId:
					Constants?.expoConfig?.extra?.eas?.projectId ??
					Constants?.easConfig?.projectId,
			});
		} else {
			alert("Must be using a physical device for Push Notifications");
		}

		if (Platform.OS === "android") {
			Notifications.setNotificationChannelAsync("default", {
				name: "Push Notification",
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: "#FF231F",
			});
		}

		return token;
	}

	useEffect(() => {
		registerForPushNotification().then((token) => {
			setPushToken(token);
		});

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});
		responseListener.current =
			Notifications.addNotificationResponseReceivedListener(
				(response) => {
					console.log(response);
				}
			);
		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current!
			);

			Notifications.removeNotificationSubscription(
				responseListener.current!
			);
		};
	}, []);

	return {
		pushToken,
		notification,
	};
};
