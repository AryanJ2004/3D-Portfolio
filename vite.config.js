import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./3D-Portfolio", // Adjust the base URL to your repository name
  plugins: [react()],
});
