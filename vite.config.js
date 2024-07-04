import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['three']
  },
  build: {
    rollupOptions: {
      external: [
        'three'
      ],
      output: {
        globals: {
          three: 'THREE'
        }
      }
    }
  }
});
