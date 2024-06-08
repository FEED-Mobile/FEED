import { Text, View } from "@components/Themed";
import { useState, useEffect, useRef } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Button } from "react-native";
import Constants from "expo-constants";
import { Platform } from "react-native";

export interface PushNotificationState {
	pushToken?: Notifications.ExpoPushToken;
	notification?: Notifications.Notification;
}

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

	const notificationListener = useRef<Notifications.Subscription>();
	const responseListener = useRef<Notifications.Subscription>();

	async function registerForPushNotification() {
		let token;
		if (Device.isDevice) {
			const { status: currStatus } =
				await Notifications.getPermissionsAsync();
			let finalStatus = currStatus;

			if (currStatus !== "granted") {
				const { status } =
					await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			token = await Notifications.getExpoPushTokenAsync({
				projectId: Constants.expoConfig?.extra?.eas.projectId,
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
			Notifications.addNotificationResponseReceivedListener(
				(notification) => {
					setNotification(notification);
				}
			);
		responseListener.current =
			Notifications.addNotificationReceivedListener((response) => {
				//do something
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current!
			);

			Notifications.removeNotificationSubscription(
				responseListener.current!
			);
		};
	});

	return {
		pushToken,
		notification,
	};
};
