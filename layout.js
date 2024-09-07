import { GoogleTagManager } from '@next/third-parties/google'
 
export default function RootLayout({ children }) {
  return (
    <html>
      <GoogleTagManager gtmId="G-WSSRG343P3" />
      <body>{children}</body>
    </html>
  )
}
