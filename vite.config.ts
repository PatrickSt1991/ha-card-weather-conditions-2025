import { defineConfig } from 'vite';

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
});
