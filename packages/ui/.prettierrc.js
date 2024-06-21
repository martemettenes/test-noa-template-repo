module.exports = {
	plugins: [
		require.resolve("@trivago/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-svelte"),
	],
	printWidth: 110,
	semi: true,
	arrowParens: "always",
	singleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	useTabs: true,
	tabWidth: 4,
	importOrder: ["<THIRD_PARTY_MODULES>", "^@/studio/(.*)$", "^@/lib/(.*)$", "^@/components/(.*)$", "^[./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};
