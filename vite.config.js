import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify('service_lq318z8'),
    'process.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify('template_ac9j0rl'),
    'process.env.REACT_APP_EMAILJS_USERID': JSON.stringify('gHd-3YkfOLfZpTicy'),
  },
});
