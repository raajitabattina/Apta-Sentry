import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface Feature {
  title: string
  desc: string
}

interface Spec {
  label: string
  value: string
}

interface Props {
  tagLabel: string
  tagClass: string
  title: string
  systems: string[]
  desc: string
  features: Feature[]
  specs: Spec[]
  codeExample?: string
  children?: ReactNode
}

export default function ProductPageLayout({
  tagLabel, tagClass, title, systems, desc, features, specs, codeExample, children
}: Props) {
  return (
    <div className="pt-14">
      {/* Header */}
      <section className="py-20 grid-bg relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-900), color-mix(in srgb, var(--bg-900) 90%, transparent), color-mix(in srgb, var(--bg-900) 50%, transparent))' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/products" className="font-mono text-xs transition-colors" style={{ color: 'var(--text-muted)' }}>Products</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>{title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className={`tag ${tagClass} mb-4 inline-flex`}>{tagLabel}</span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{title}</h1>
              <p className="text-base leading-relaxed mb-6 max-w-lg" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {systems.map(s => (
                  <span key={s} className="font-mono text-xs px-2 py-1" style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>{s}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <a href="#" className="btn-secondary">Documentation</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs mb-3" style={{ color: 'var(--text-muted)' }}>// Specifications</p>
              <div className="grid grid-cols-2 gap-3">
                {specs.map(s => (
                  <div key={s.label} className="p-3" style={{ border: '1px solid var(--border)', background: 'var(--bg-800)' }}>
                    <p className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
                    <p className="font-mono text-sm" style={{ color: 'var(--brand)' }}>{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Capabilities</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
            {features.map(f => (
              <div key={f.title} className="p-6 transition-colors" style={{ background: 'var(--bg-900)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-800)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-900)')}
              >
                <h3 className="font-mono text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      {codeExample && (
        <section className="py-16" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-800)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-6">Quick Start</p>
            <div style={{ background: 'var(--bg-900)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-700)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-threat opacity-50"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-warn opacity-50"></div>
                  <div className="w-2 h-2 rounded-full opacity-50" style={{ background: 'var(--brand)' }}></div>
                </div>
                <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>example.py</span>
              </div>
              <pre className="p-6 font-mono text-xs leading-relaxed overflow-x-auto" style={{ color: 'var(--text-code)' }}>
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </section>
      )}

      {children}

      {/* CTA */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Ready to evaluate your models?
          </h2>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            Request access to start running adversarial evaluations in minutes.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-3">Schedule a Demo</Link>
        </div>
      </section>
    </div>
  )
}