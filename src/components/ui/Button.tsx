import React from "react";
import { Pressable, PressableProps, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Button(props: PressableProps, ref: React.ForwardedRef<View>) {
	const opacity = useSharedValue(1);
	const scale = useSharedValue(1);

	const handlePressIn = () => {
		opacity.value = withSpring(0.8);
		scale.value = withSpring(0.95);
	};

	const handlePressOut = () => {
		opacity.value = withSpring(1);
		scale.value = withSpring(1);
	};

	return (
		<AnimatedPressable
			{...props}
			ref={ref}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
			style={[props.style, { opacity, transform: [{ scale }] }]}
		>
			{props.children}
		</AnimatedPressable>
	);
}

export default React.forwardRef<View, PressableProps>(Button);
