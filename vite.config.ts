/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
    },
    plugins: [solidPlugin()],
    server: {
        port: 3000,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
    },
    build: {
        target: 'esnext',
    },
    resolve: {
        conditions: ['development', 'browser'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
