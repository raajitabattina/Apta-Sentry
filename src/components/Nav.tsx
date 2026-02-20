import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-black'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M2 2h6v2H4v4H2V2zm14 0h6v6h-2V4h-4V2zM2 16h2v4h4v2H2v-6zm20 6h-6v-2h4v-4h2v6zM10 10h4v4h-4v-4z"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-[0.25em] leading-none">DUELIST</span>
            <span className="text-[10px] text-gray-300 mt-1.5">A Check Point Company</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <button className="text-[15px] text-gray-100 hover:text-white transition-colors flex items-center gap-1.5">
            Products
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          <Link to="/research" className="text-[15px] text-gray-100 hover:text-white transition-colors">
            Research
          </Link>
          
          <button className="text-[15px] text-gray-100 hover:text-white transition-colors flex items-center gap-1.5">
            Resources
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          <button className="text-[15px] text-gray-100 hover:text-white transition-colors flex items-center gap-1.5">
            Company
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          {/* <Link to="/careers" className="text-[15px] text-gray-100 hover:text-white transition-colors flex items-center gap-2">
            Careers
            <span className="bg-[#0B3A82] text-white text-[11px] font-medium px-2 py-0.5 rounded">Hiring</span>
          </Link> */}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="btn-secondary">
            Log in
          </Link>
          <Link to="/demo" className="btn-primary">
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  )
}

// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const products = [
//   { label: 'Red Teaming & Eval', href: '/products/red-teaming' },
//   { label: 'Model Security', href: '/products/model-security' },
//   { label: 'Code Scanning', href: '/products/code-scanning' },
//   { label: 'Runtime Monitoring', href: '/products/runtime-monitoring' },
//   { label: 'Synthetic Data', href: '/products/synthetic-data' },
//   { label: 'Consulting', href: '/products/consulting' },
// ]

// export default function Nav() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [productsOpen, setProductsOpen] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handler)
//     return () => window.removeEventListener('scroll', handler)
//   }, [])

//   useEffect(() => {
//     setMobileOpen(false)
//     setProductsOpen(false)
//   }, [location])

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-bg-900/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2 group">
//           <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//             <rect x="1" y="1" width="18" height="18" stroke="#00FF88" strokeWidth="1.5" />
//             <path d="M5 10L8 13L15 6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//           <span className="font-display text-sm font-bold text-text-primary tracking-wider">DUELIST</span>
//           <span className="hidden sm:block font-mono text-xs text-text-muted">/ AI Security</span>
//         </Link>

//         <nav className="hidden md:flex items-center gap-6">
//           <div
//             className="relative"
//             onMouseEnter={() => setProductsOpen(true)}
//             onMouseLeave={() => setProductsOpen(false)}
//           >
//             <button className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1">
//               Products
//               <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
//                 <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
//               </svg>
//             </button>
//             {productsOpen && (
//               <div className="absolute top-6 left-0 w-52 bg-bg-800 border border-border py-1 z-50">
//                 {products.map(p => (
//                   <Link
//                     key={p.href}
//                     to={p.href}
//                     className="block px-4 py-2 font-mono text-xs text-text-secondary hover:text-text-primary hover:bg-bg-700 transition-colors"
//                   >
//                     {p.label}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//           <Link to="/about" className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors">About</Link>
//           <Link to="/contact" className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors">Contact</Link>
//         </nav>

//         <div className="hidden md:flex items-center gap-3">
//           <a href="#" className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors">Docs</a>
//           <Link to="/contact" className="btn-primary text-xs py-2 px-4">
//             Request Access
//           </Link>
//         </div>

//         <button
//           className="md:hidden text-text-secondary hover:text-text-primary"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
//             {mobileOpen ? (
//               <path d="M4 4L16 16M4 16L16 4" strokeLinecap="round" />
//             ) : (
//               <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="md:hidden bg-bg-800 border-b border-border">
//           <div className="px-6 py-4 space-y-1">
//             <div className="py-2">
//               <p className="section-label mb-2">Products</p>
//               {products.map(p => (
//                 <Link
//                   key={p.href}
//                   to={p.href}
//                   className="block py-2 pl-3 font-mono text-xs text-text-secondary hover:text-text-primary"
//                 >
//                   {p.label}
//                 </Link>
//               ))}
//             </div>
//             <Link to="/about" className="block py-2 font-mono text-xs text-text-secondary hover:text-text-primary">About</Link>
//             <Link to="/contact" className="block py-2 font-mono text-xs text-text-secondary hover:text-text-primary">Contact</Link>
//             <div className="pt-3">
//               <Link to="/contact" className="btn-primary inline-flex">Request Access</Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }
