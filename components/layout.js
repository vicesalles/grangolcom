import { GoogleTagManager } from '@next/third-parties/google'
import CookieConsentBanner from './CookieConsentBanner'
 
export default function RootLayout({ children }) {
  return (
    <html>
      <CookieConsentBanner/>
      <body>{children}</body>
    </html>
  )
}