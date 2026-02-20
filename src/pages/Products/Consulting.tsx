import { Link } from 'react-router-dom'

const ENGAGEMENTS = [
  { title: 'Red Team Engagement', duration: '2–4 weeks', tag: 'tag-red', desc: 'Embedded red team exercises targeting your specific AI system, threat model, and deployment context. Produces prioritized vulnerability report with remediation roadmap.', deliverables: ['Executive threat brief', 'Technical vulnerability report', 'Remediation roadmap', 'Retesting credits'] },
  { title: 'AI Security Assessment', duration: '1–2 weeks', tag: 'tag-amber', desc: 'Comprehensive security posture review. Covers model evaluation, deployment configuration, integration security, and operational controls.', deliverables: ['Risk register', 'Control gap analysis', 'Architecture review', 'Prioritized findings'] },
  { title: 'Compliance Readiness', duration: '2–6 weeks', tag: 'tag-acid', desc: 'Structured readiness assessment for EU AI Act, NIST AI RMF, ISO 42001, or OWASP LLM Top 10. Produces evidence documentation for auditors.', deliverables: ['Gap assessment', 'Evidence package', 'Policy templates', 'Auditor briefing'] },
  { title: 'Custom Framework Design', duration: 'Scoped', tag: 'tag-blue', desc: 'Design and implement a bespoke evaluation framework for your specific model, use case, and risk tolerance. Includes integration engineering and team training.', deliverables: ['Custom evaluation suite', 'Integration engineering', 'Team training', 'Ongoing support'] },
]

export default function Consulting() {
  return (
    <div className="pt-14">
      <section className="py-20 grid-bg relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'none' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/products" className="font-mono text-xs transition-colors" style={{ color: 'var(--text-muted)' }}>Products</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>Consulting</span>
          </div>
          <span className="tag tag-acid mb-4 inline-flex">Enterprise</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Consulting</h1>
          <p className="text-base max-w-2xl leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            Expert-led engagements combining Duelist's platform capabilities with hands-on security expertise. For organizations that need more than tooling.
          </p>
          <Link to="/contact" className="btn-primary">Contact Sales</Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Engagement Types</p>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
            {ENGAGEMENTS.map(e => (
              <div key={e.title} className="p-8 transition-colors" style={{ background: 'var(--bg-900)' }}
                onMouseEnter={el => (el.currentTarget.style.background = 'var(--bg-800)')}
                onMouseLeave={el => (el.currentTarget.style.background = 'var(--bg-900)')}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`tag ${e.tag}`}>{e.duration}</span>
                </div>
                <h2 className="font-sans text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{e.title}</h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{e.desc}</p>
                <div>
                  <p className="section-label mb-2">Deliverables</p>
                  <div className="space-y-1.5">
                    {e.deliverables.map(d => (
                      <div key={d} className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: 'var(--brand)' }}>—</span>
                        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-800)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Ready to get started?</h2>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            All engagements are scoped based on your specific requirements. Contact us to discuss your AI security needs.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-3">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  )
}