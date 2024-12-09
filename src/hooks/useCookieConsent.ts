import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

interface CookiePreferences {
  analytics: boolean
  marketing: boolean
}

export function useCookieConsent() {
  const [isOpen, setIsOpen] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const saved = Cookies.get('cookie-preferences')
    if (!saved) {
      setIsOpen(true)
    } else {
      setPreferences(JSON.parse(saved))
    }
  }, [])

  const updatePreferences = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  const savePreferences = () => {
    Cookies.set('cookie-preferences', JSON.stringify(preferences))
    setIsOpen(false)
  }

  const acceptAll = () => {
    const allEnabled = { analytics: true, marketing: true }
    Cookies.set('cookie-preferences', JSON.stringify(allEnabled))
    setPreferences(allEnabled)
    setIsOpen(false)
  }

  return { isOpen, preferences, updatePreferences, savePreferences, acceptAll }
} 