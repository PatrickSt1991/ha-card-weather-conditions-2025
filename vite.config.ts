import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/icons',
          dest: '.', // Copies to dist/icons
        },
        {
          src: 'src/assets/transl',
          dest: '.', // => dist/transl/
        },
      ],
    }),
  ],
});
