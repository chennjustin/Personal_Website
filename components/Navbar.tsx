'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/home', label: 'Home', icon: 'fa-home' },
    { href: '/about', label: 'About', icon: 'fa-user' },
    { href: '/travel', label: 'Travel', icon: 'fa-plane' },
    { href: '/contact', label: 'Contact', icon: 'fa-envelope' },
  ]

  const isActive = (href: string) => {
    if (href === '/home') {
      return pathname === '/home' || pathname === '/'
    }
    return pathname === href
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/home">chccc</Link>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <Link
                href={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className={`fas ${link.icon}`}></i>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <ThemeToggle />
          </li>
        </ul>
        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

