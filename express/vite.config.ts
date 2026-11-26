import { defineConfig } from 'vite-plus';

export default defineConfig({
    lint: {
        jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
        rules: {
            'vite-plus/prefer-vite-plus-imports': 'error',
            'no-array-constructor': 'error',
            'no-case-declarations': 'error',
            'no-empty': 'error',
            'no-fallthrough': 'error',
            'no-prototype-builtins': 'error',
            'no-regex-spaces': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'preserve-caught-error': 'error',
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
        ignorePatterns: ['node_modules', 'package-lock.json', 'src/welcome.html'],
    },
});
