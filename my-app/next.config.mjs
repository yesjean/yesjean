import nextra from 'nextra'
 
const withNextra = nextra({
  theme: './theme.tsx',
  themeConfig: './theme.config.jsx'
})
 
export default withNextra()
 
// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })