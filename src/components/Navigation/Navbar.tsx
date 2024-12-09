import { useState } from 'react'
import { Button } from '../Navigation/ui/button'
import { ModeToggle } from "@/components/Navigation/ui/mode-toggle"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-cyber text-2xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              BestVPNUK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vpn-reviews" className="text-muted-foreground hover:text-primary transition">
              VPN Reviews
            </Link>
            <Link href="/guides" className="text-muted-foreground hover:text-primary transition">
              Guides
            </Link>
            <Link href="/news" className="text-muted-foreground hover:text-primary transition">
              News
            </Link>
            <Link href="/compare" className="text-muted-foreground hover:text-primary transition">
              Compare
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Find Best VPN
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            <Link href="/vpn-reviews" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              VPN Reviews
            </Link>
            <Link href="/guides" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Guides
            </Link>
            <Link href="/news" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              News
            </Link>
            <Link href="/compare" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Compare
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Find Best VPN
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 