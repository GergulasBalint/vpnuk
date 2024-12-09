interface BrowserSupport {
  name: string
  version: number
}

const MINIMUM_BROWSERS: BrowserSupport[] = [
  { name: 'chrome', version: 80 },
  { name: 'firefox', version: 75 },
  { name: 'safari', version: 13 },
  { name: 'edge', version: 80 }
]

export function checkBrowserSupport(): boolean {
  const ua = navigator.userAgent.toLowerCase()
  
  for (const browser of MINIMUM_BROWSERS) {
    if (ua.includes(browser.name)) {
      const version = parseInt(
        ua.match(new RegExp(`${browser.name}\\/([\\d.]+)`))?.[1] || '0'
      )
      return version >= browser.version
    }
  }
  
  return false
}

export function showBrowserWarning() {
  if (!checkBrowserSupport()) {
    console.warn(
      'Your browser might not support all features. Please update to a modern browser.'
    )
  }
} 