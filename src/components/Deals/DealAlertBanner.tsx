import React from 'react'
import { Bell, X } from 'lucide-react'
import { Button } from '@/components/Navigation/ui/button'
import { useDealAlerts } from '@/hooks/useDealAlerts'
import { motion, AnimatePresence } from 'framer-motion'

export function DealAlertBanner() {
  const { currentDeal, isVisible, dismiss } = useDealAlerts()

  if (!currentDeal || !isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-primary text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 animate-bounce" />
              <p className="text-sm font-medium">
                <span className="font-bold">{currentDeal.vpnName}</span>: {currentDeal.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                size="sm" 
                variant="secondary"
                asChild
              >
                <a href={currentDeal.url} target="_blank" rel="noopener noreferrer">
                  Get Deal
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={dismiss}
                className="text-primary-foreground hover:text-primary-foreground/80"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 