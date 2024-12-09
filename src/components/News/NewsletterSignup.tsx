import React from 'react'
import { Button } from '@/components/Navigation/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/Navigation/ui/dialog'
import { Input } from '@/components/Navigation/ui/input'
import { toast } from 'sonner'

export function NewsletterSignup() {
  const [email, setEmail] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      
      if (!response.ok) throw new Error()
      
      toast.success('Successfully subscribed to newsletter!')
      setOpen(false)
      setEmail('')
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Subscribe to Newsletter</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Stay Updated</DialogTitle>
          <DialogDescription>
            Get the latest VPN news and security updates delivered to your inbox.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 