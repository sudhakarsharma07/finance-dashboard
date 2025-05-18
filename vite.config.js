// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Add the base path here
export default defineConfig({
  plugins: [react()], // Replace with your repository name
});
