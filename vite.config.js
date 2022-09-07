import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://greatandrewhan.github.io/darkmode-frame/',
  plugins: [react()],
});
