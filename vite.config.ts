import { defineConfig } from 'vite';
import { name } from './package.json';

export default defineConfig({
  build: {
    lib: {
      name,
      entry: './index.js',
    },
  },
});
