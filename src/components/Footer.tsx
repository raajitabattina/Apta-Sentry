import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="1" width="18" height="18" stroke="#00FF88" strokeWidth="1.5" />
                <path d="M5 10L8 13L15 6" stroke="#00FF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-sm font-bold tracking-wider">DUELIST</span>
            </div>
            <p className="font-mono text-xs text-text-muted leading-relaxed mb-4">
              Adversarial AI testing and runtime security for production language models.
            </p>
            <div className="flex gap-3">
              <a href="#" className="tag tag-acid">GitHub</a>
              <a href="#" className="tag tag-blue">Discord</a>
            </div>
          </div>

          <div>
            <p className="section-label mb-4">Products</p>
            <ul className="space-y-2">
              {[
                { label: 'Red Teaming', href: '/products/red-teaming' },
                { label: 'Model Security', href: '/products/model-security' },
                { label: 'Code Scanning', href: '/products/code-scanning' },
                { label: 'Runtime Monitoring', href: '/products/runtime-monitoring' },
                { label: 'Synthetic Data', href: '/products/synthetic-data' },
                { label: 'Consulting', href: '/products/consulting' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href} className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Platform</p>
            <ul className="space-y-2">
              {[
                { name: 'Seed', desc: 'Threat Intel' },
                { name: 'Forge', desc: 'Mutation Engine' },
                { name: 'Nexus', desc: 'Risk Evaluation' },
                { name: 'Blue', desc: 'Synthetic Data' },
                { name: 'Resolve', desc: 'Remediation' },
                { name: 'Signal', desc: 'Monitoring' },
              ].map(l => (
                <li key={l.name}>
                  <span className="font-mono text-xs text-text-muted">
                    <span className="text-acid-DEFAULT">{l.name}</span> — {l.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Company</p>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Docs', href: '#' },
                { label: 'Security', href: '#' },
                { label: 'Privacy', href: '#' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">© 2025 Duelist. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="tag tag-acid">SOC 2 Type II</span>
            <span className="tag tag-blue">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
