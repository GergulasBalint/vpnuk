import React from 'react'
import { Button } from '@/components/Navigation/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/Navigation/ui/dialog'
import { Switch } from '@/components/Navigation/ui/switch'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export function CookieConsent() {
  const { 
    isOpen,
    preferences,
    updatePreferences,
    acceptAll,
    savePreferences 
  } = useCookieConsent()

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            We use cookies to enhance your browsing experience and analyze our traffic.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Essential Cookies</div>
              <div className="text-sm text-muted-foreground">
                Required for the website to function properly
              </div>
            </div>
            <Switch checked disabled />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Analytics Cookies</div>
              <div className="text-sm text-muted-foreground">
                Help us understand how visitors interact with our website
              </div>
            </div>
            <Switch
              checked={preferences.analytics}
              onCheckedChange={(checked) =>
                updatePreferences('analytics', checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Marketing Cookies</div>
              <div className="text-sm text-muted-foreground">
                Used to deliver relevant advertisements
              </div>
            </div>
            <Switch
              checked={preferences.marketing}
              onCheckedChange={(checked) =>
                updatePreferences('marketing', checked)
              }
            />
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={savePreferences}
            className="sm:w-full"
          >
            Save Preferences
          </Button>
          <Button 
            onClick={acceptAll}
            className="sm:w-full"
          >
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 