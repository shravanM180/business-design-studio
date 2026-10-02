export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0f172a',
          secondary: '#2563eb',
          background: '#f8fafc',
          surface: '#ffffff',
          text: '#0f172a',
          muted: '#64748b',
          success: '#16a34a',
          warning: '#f59e0b',
          danger: '#ef4444'
        }
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
