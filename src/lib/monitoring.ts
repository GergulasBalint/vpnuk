import * as Sentry from '@sentry/nextjs'

interface MonitoringOptions {
  sampleRate?: number
  environment?: string
}

export function initializeMonitoring(options: MonitoringOptions = {}) {
  const { 
    sampleRate = 1.0,
    environment = process.env.NODE_ENV 
  } = options

  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: sampleRate,
    environment
  })
}

export function trackError(error: Error, context?: Record<string, any>) {
  Sentry.captureException(error, {
    extra: context
  })
}

export function trackEvent(name: string, data?: Record<string, any>) {
  Sentry.captureEvent({
    message: name,
    level: 'info',
    extra: data
  })
}

export function setUserContext(userId: string, data?: Record<string, any>) {
  Sentry.setUser({
    id: userId,
    ...data
  })
} 