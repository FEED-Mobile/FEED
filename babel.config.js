module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			// Required for expo-router
			["expo-router/babel"],
			[
				"module-resolver",
				{
					root: ["./"],
					alias: {
						"@assets": "./src/assets",
						"@components": "./src/components",
						"@constants": "./src/constants",
						"@lib": "./src/lib",
						"@type": "./src/types",
					},
				},
			],
		],
	};
};
