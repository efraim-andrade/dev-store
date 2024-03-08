import type { Config } from 'tailwindcss'

const config: Config = {
  plugins: [],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extends: {
      fontFamily: {
        sans: 'var(--font-inter)'
      },
      gridTemplateRows: {
        app: 'min-content max-content'
      }
    }
  }
}
export default config
