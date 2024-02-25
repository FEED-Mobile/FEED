module.exports = {
	env: {
		browser: true,
		es2021: true,
		"react-native/react-native": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"prettier",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
		"react",
		"react-native",
		"simple-import-sort",
	],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/no-children-prop": "off",
		"@typescript-eslint/no-var-requires": 0,
		"react/prop-types": [
			"error",
			{ ignore: ["navigation", "navigation.navigate"] },
		],
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
