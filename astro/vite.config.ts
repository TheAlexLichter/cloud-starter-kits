import { getViteConfig } from 'astro/config';
import { defineConfig } from 'vite-plus';

export default getViteConfig(
    defineConfig({
        lint: {
            jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
            rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
            options: { typeAware: true, denyWarnings: true },
        },
        fmt: {
            singleQuote: true,
            tabWidth: 4,
            printWidth: 120,
            sortPackageJson: false,
            astro: {},
            associations: [
                {
                    files: ['*.astro'],
                    language: 'astro',
                },
            ],
            ignorePatterns: ['node_modules', 'package-lock.json', 'dist', '.astro', 'src/pages/index.astro'],
        },
    }),
);
