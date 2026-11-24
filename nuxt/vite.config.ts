import { defineConfig } from 'vite-plus';

export default defineConfig({
    test: {
        include: ['tests/**/*.test.ts'],
        environment: 'node',
        testTimeout: 60_000,
        hookTimeout: 120_000,
    },
    lint: {
        plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'vue'],
        jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
        rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
        options: { typeAware: true, denyWarnings: true },
    },
    fmt: {
        singleQuote: true,
        tabWidth: 4,
        printWidth: 120,
        sortPackageJson: false,
        ignorePatterns: ['node_modules', 'package-lock.json', '.nuxt', '.output', '.data', 'app/pages/index.vue'],
    },
});
