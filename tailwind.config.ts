import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blobSpin: {
          from: { rotate: '0deg' },
          '50%': { scale: '1 1.5' },
          to: { rotate: '360deg' },
        },
      },
      animation: {
        'blob-spin': 'blobSpin 20s infinite',
      },
      colors: {
        'dark-bg': '#0F0514',
        'neon-red': '#FF1D53',
        'neon-blue': '#58E1FF',
      },
      dropShadow: {
        glow: '0 0 4px rgba(255,255,255,0.6)',
        'neon-blue': '0 0 8px #58E1FF',
        'neon-red': '0 0 8px #FF1D53',
      },
      boxShadow: {
        'neon-blue': '0 0 8px #58E1FF',
        'neon-red': '0 0 16px #FF1D53',
      },
      backgroundImage: {
        'br-flag': "url('/br.png')",
        'us-flag': "url('/us.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
