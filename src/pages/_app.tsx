import { ErrorBoundary } from '@/components/Common/ErrorBoundary'
import { AnalyticsProvider } from '@/components/Analytics/AnalyticsProvider'
import { CookieConsent } from '@/components/Common/CookieConsent'
import { ThemeProvider } from '@/components/Theme/ThemeProvider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AnalyticsProvider>
          <Component {...pageProps} />
          <CookieConsent />
        </AnalyticsProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
} 