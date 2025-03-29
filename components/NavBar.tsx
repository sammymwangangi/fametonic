"use client"

import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"
import { Menu } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "#", label: "About us" },
  { href: "#", label: "Contact" },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 z-30">
      <div className="max-w-7xl mx-auto">
        {/* Mobile navbar with centered logo */}
        <div className="flex items-center justify-between bg-transparent md:hidden">
          {/* Empty div for layout balance */}
          <div className="w-6 bg-transparent"></div>

          {/* Centered logo */}
          <div className="flex-1 flex justify-center">
            <Image 
              src={Logo} 
              alt="Logo" 
              width={120} 
              height={52} 
              className="w-auto h-[40px] sm:h-[52px]" 
              priority 
            />
          </div>

          {/* Menu button - right aligned */}
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop navbar */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Image 
            src={Logo} 
            alt="Logo" 
            width={120} 
            height={52} 
            className="w-auto h-[64px] lg:h-[74px]" 
            priority 
          />

          {/* Navigation links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-[#A9A9A9] text-base lg:text-lg font-figtree font-semibold hover:text-[#00E7F9] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 border-t border-[#333333] md:hidden z-50 py-6 px-4">
            <div className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#A9A9A9] text-lg font-figtree font-semibold hover:text-[#00E7F9] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}