module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"arrow-body-style": "off",
		"react/function-component-definition": "off",
		"no-dupe-keys": "off",
		"react/prop-types": "off",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"no-noninteractive-tabindex": "off",
		"label-has-associated-control": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"jsx-a11y/no-noninteractive-tabindex": "off",
		"react/jsx-props-no-spreading": "off",
		"import/no-unresolved": "off",
	},
};
