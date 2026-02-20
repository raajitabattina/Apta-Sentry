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
  tagLabel, tagClass, title, systems, desc,
  features, specs, codeExample, children
}: Props) {
  return (
    <div className="pt-14">
      <section className="py-20 border-b border-border grid-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-900 via-bg-900/90 to-bg-900/50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/products" className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors">Products</Link>
            <span className="text-text-muted">/</span>
            <span className="font-mono text-xs text-text-secondary">{title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className={`tag ${tagClass} mb-4 inline-flex`}>{tagLabel}</span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">{title}</h1>
              <p className="text-text-secondary text-base leading-relaxed mb-6 max-w-lg">{desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {systems.map(s => (
                  <span key={s} className="font-mono text-xs text-text-secondary border border-border px-2 py-1">{s}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <a href="#" className="btn-secondary">Documentation</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-text-muted mb-3">// Specifications</p>
              <div className="grid grid-cols-2 gap-3">
                {specs.map(s => (
                  <div key={s.label} className="border border-border p-3">
                    <p className="font-mono text-xs text-text-muted mb-1">{s.label}</p>
                    <p className="font-mono text-sm text-acid-DEFAULT">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Capabilities</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {features.map(f => (
              <div key={f.title} className="bg-bg-900 p-6 hover:bg-bg-800 transition-colors">
                <h3 className="font-mono text-xs font-semibold text-text-primary mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {codeExample && (
        <section className="py-16 border-b border-border bg-bg-800">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-6">Quick Start</p>
            <div className="bg-bg-900 border border-border overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-threat opacity-50"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-warn opacity-50"></div>
                  <div className="w-2 h-2 rounded-full bg-acid-DEFAULT opacity-50"></div>
                </div>
                <span className="font-mono text-xs text-text-muted">example.py</span>
              </div>
              <pre className="p-6 font-mono text-xs text-text-code leading-relaxed overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </section>
      )}

      {children}

      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
            Ready to evaluate your models?
          </h2>
          <p className="text-text-secondary text-sm mb-8">
            Request access to start running adversarial evaluations in minutes.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-3">Schedule a Demo</Link>
        </div>
      </section>
    </div>
  )
}
