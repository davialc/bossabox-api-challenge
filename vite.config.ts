import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		testTimeout: 1000 * 15, // 15 seconds
	},
});
