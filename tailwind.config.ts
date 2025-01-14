import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        inContent: {
          "0%": { opacity: '0'},
          "75%": { opacity: '0'},
          "100%": { opacity: '1'}
        },
        outContent: {
          "0%": { opacity: '1'},
          "25%": { opacity: '0'},
          "100%": { opacity: '0'}
        },
        inMap: {
          "0%": { opacity: '0'},
          "75%": { opacity: '1'},
          "100%": { opacity: '1'}
        },
        outMap: {
          "0%": { opacity: '1'},
          "25%": { opacity: '1'},
          "100%": { opacity: '0'}
        }
      }
    },
    animation: {
      inContent: 'inContent 1.2s ease-in-out',
      outContent: 'outContent 1.2s ease-in-out',
      inMap: 'inMap 1.2s ease-in-out',
      outMap: 'outMap 1.2s ease-in-out',
    },
    colors: {
      transparent: 'transparent',
      "primary": "#1C4F82",
      "primary-focus": "#163D64",
      "primary-content": "#D2D9E5",
      "secondary": "#7D919B",
      "secondary-focus": "#6A808A",
      "secondary-content": "#1C1F21",
      "accent": "#EB6B47",
      "accent-focus": "#E75127",
      "accent-content": "#2E1A14",
      "neutral": "#23282F",
      "neutral-focus": "#14171A",
      "neutral-content": "#CDCED0",
      "base-100": "#212121",
      "base-200": "#0F0F0F",
      "base-300": "#000000",
      "base-content": "#CCCCCC",
      "info": "#0092D6",
      "info-content": "#D9E8F7",
      "success": "#6CB288",
      "success-content": "#1A231D",
      "warning": "#DAAD58",
      "warning-content": "#2B2317",
      "error": "#AB3D30",
      "error-content": "#F3D8D2",
      "white": "#FFFFFF"
    },
  },
  daisyui: {
    themes: ['business'],
  },
  plugins: [require("daisyui")],
}
export default config
