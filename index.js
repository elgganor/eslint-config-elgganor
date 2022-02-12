module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint"
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	rules: {
		"indent": ["error", "tab"],
		"semi": ["error", "always"],
		"semi-spacing": "error",
		"curly": "error",
		"default-case": "error",
		"max-lines-per-function": ["error", 25],
		"max-params": ["error", 4],
		"no-console": ["warn"],
		"arrow-spacing": ["error", { "before": true, "after": true }],
		"arrow-parens": ["error", "always"],
		"comma-style": ["error", "last"],
		"object-curly-spacing": ["error", "always"],
		"no-unneeded-ternary": "error",
		"prefer-const": "error",
		"spaced-comment": ["error", "always"]
	}
}