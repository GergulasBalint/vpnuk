import React from 'react'
import Link from 'next/link'
import { NewsletterSignup } from '@/components/News/NewsletterSignup'
import { Facebook, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import { Separator } from '@/components/Navigation/ui/separator'

const FOOTER_LINKS = {
  vpnCategories: [
    { title: 'Best Overall VPNs', href: '/best-vpn' },
    { title: 'Streaming VPNs', href: '/streaming-vpn' },
    { title: 'Gaming VPNs', href: '/gaming-vpn' },
    { title: 'Privacy VPNs', href: '/privacy-vpn' },
    { title: 'Budget VPNs', href: '/cheap-vpn' }
  ],
  resources: [
    { title: 'VPN Guides', href: '/guides' },
    { title: 'News & Updates', href: '/news' },
    { title: 'How We Test', href: '/methodology' },
    { title: 'Expert Reviews', href: '/reviews' },
    { title: 'Compare VPNs', href: '/compare' }
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Editorial Policy', href: '/editorial-policy' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Use', href: '/terms' },
    { title: 'Contact Us', href: '/contact' }
  ]
}

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com/bestvpnuk' },
  { icon: Twitter, href: 'https://twitter.com/bestvpnuk' },
  { icon: Youtube, href: 'https://youtube.com/bestvpnuk' }
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* VPN Categories */}
          <div>
            <h3 className="font-semibold mb-4">VPN Categories</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.vpnCategories.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <NewsletterSignup />
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@bestvpnuk.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +44 20 1234 5678
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  London, United Kingdom
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BestVPNUK. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 