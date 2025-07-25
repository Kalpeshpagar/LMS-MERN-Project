import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme: {
    extends: {
      fontSize: {
        'course-deatails-heading-small':['26px','36px'],
        'course-deatails-heading-large':['36px','44px'],
        'home-heading-small':['24px','34px'],
        'home-heading-large':['48px','56px'],
        'default':['15px','21px']
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [
    tailwindcss(),
  ],
})