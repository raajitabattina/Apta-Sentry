import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const products = [
  { label: 'Red Teaming & Eval', href: '/products/red-teaming' },
  { label: 'Model Security', href: '/products/model-security' },
  { label: 'Code Scanning', href: '/products/code-scanning' },
  { label: 'Runtime Monitoring', href: '/products/runtime-monitoring' },
  { label: 'Synthetic Data', href: '/products/synthetic-data' },
  { label: 'Consulting', href: '/products/consulting' },
]

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-8 h-8 flex items-center justify-center transition-all duration-200"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--bg-700)',
        color: 'var(--text-secondary)',
      }}
    >
      {theme === 'dark' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [location])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg-900) 95%, transparent)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="1" width="18" height="18" stroke="var(--brand)" strokeWidth="1.5" />
            <path d="M5 10L8 13L15 6" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display text-sm font-bold tracking-wider" style={{ color: 'var(--text-primary)' }}>DUELIST</span>
          <span className="hidden sm:block font-mono text-xs" style={{ color: 'var(--text-muted)' }}>/ AI Security</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="font-mono text-xs flex items-center gap-1 transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Products
              <svg width="10" height="10" viewBox="0 0 10 10">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            {productsOpen && (
              <div className="absolute top-6 left-0 w-52 py-1 z-50" style={{ background: 'var(--bg-800)', border: '1px solid var(--border)' }}>
                {products.map(p => (
                  <Link key={p.href} to={p.href} className="block px-4 py-2 font-mono text-xs transition-colors" style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--bg-700)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="font-mono text-xs transition-colors" style={{ color: 'var(--text-secondary)' }}>About</Link>
          <Link to="/contact" className="font-mono text-xs transition-colors" style={{ color: 'var(--text-secondary)' }}>Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="font-mono text-xs transition-colors" style={{ color: 'var(--text-secondary)' }}>Docs</a>
          <ThemeToggle />
          <Link to="/contact" className="btn-primary text-xs py-2 px-4">Request Access</Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button style={{ color: 'var(--text-secondary)' }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? <path d="M4 4L16 16M4 16L16 4" strokeLinecap="round" /> : <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ background: 'var(--bg-800)', borderBottom: '1px solid var(--border)' }}>
          <div className="px-6 py-4 space-y-1">
            <div className="py-2">
              <p className="section-label mb-2">Products</p>
              {products.map(p => (
                <Link key={p.href} to={p.href} className="block py-2 pl-3 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{p.label}</Link>
              ))}
            </div>
            <Link to="/about" className="block py-2 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>About</Link>
            <Link to="/contact" className="block py-2 font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>Contact</Link>
            <div className="pt-3">
              <Link to="/contact" className="btn-primary inline-flex">Request Access</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}