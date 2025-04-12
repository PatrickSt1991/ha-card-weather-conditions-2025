import { defineConfig } from 'vite';
import string from 'vite-plugin-string';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/HaCardWeatherConditions.ts',
      name: 'HaCardWeatherConditions',
      fileName: 'ha-card-weather-conditions',
      formats: ['es'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
    rollupOptions: {
      output: {
        assetFileNames: undefined,
      },
    },
  },
  plugins: [
    string({
      include: ['**/translations/*.json', '**/icons/**/*.svg'], // updated this line
    }),
  ],
});