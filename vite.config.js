import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.', // Root is the current directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'docs/index.html'),
        gettingStarted: resolve(__dirname, 'docs/getting-started.html'),
        core: resolve(__dirname, 'docs/core.html'),
        ifOperators: resolve(__dirname, 'docs/if-operators.html'),
        switchWhile: resolve(__dirname, 'docs/switch-while.html'),
        functions: resolve(__dirname, 'docs/functions.html'),
        codeParsing: resolve(__dirname, 'docs/code-parsing.html'),
        array: resolve(__dirname, 'docs/array.html'),
        object: resolve(__dirname, 'docs/object.html'),
      }
    }
  }
});
