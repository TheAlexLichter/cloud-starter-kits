import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';

export default defineConfig({
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
    },
    test: {
        environment: 'jsdom',
    },
    lint: {
        plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'react', 'jsx-a11y', 'nextjs', 'import'],
        jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
        env: { browser: true, node: true },
        ignorePatterns: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
        rules: {
            'vite-plus/prefer-vite-plus-imports': 'error',
            'import/no-anonymous-default-export': 'error',
            'no-array-constructor': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'react/display-name': 'error',
            'react/jsx-no-comment-textnodes': 'error',
            'react/no-unescaped-entities': 'error',
            'react/rules-of-hooks': 'error',
            'react/unsupported-syntax': 'error',
            'typescript/ban-ts-comment': 'error',
            'typescript/no-empty-object-type': 'error',
            'typescript/no-explicit-any': 'error',
            'typescript/no-namespace': 'error',
            'typescript/no-require-imports': 'error',
            'typescript/no-unnecessary-type-constraint': 'error',
            'typescript/no-unsafe-function-type': 'error',
        },
        options: { typeAware: true, typeCheck: true, denyWarnings: true },
    },
    fmt: {
        singleQuote: true,
        tabWidth: 4,
        printWidth: 120,
        sortPackageJson: false,
        ignorePatterns: ['node_modules', 'package-lock.json', '.next', 'next-env.d.ts', 'app/page.tsx'],
    },
});
