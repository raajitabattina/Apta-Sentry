import { Link } from 'react-router-dom'

const ENGAGEMENTS = [
  {
    title: 'Red Team Engagement',
    duration: '2–4 weeks',
    tag: 'tag-red',
    desc: 'Embedded red team exercises targeting your specific AI system, threat model, and deployment context. Produces prioritized vulnerability report with remediation roadmap.',
    deliverables: ['Executive threat brief', 'Technical vulnerability report', 'Remediation roadmap', 'Retesting credits'],
  },
  {
    title: 'AI Security Assessment',
    duration: '1–2 weeks',
    tag: 'tag-amber',
    desc: 'Comprehensive security posture review. Covers model evaluation, deployment configuration, integration security, and operational controls.',
    deliverables: ['Risk register', 'Control gap analysis', 'Architecture review', 'Prioritized findings'],
  },
  {
    title: 'Compliance Readiness',
    duration: '2–6 weeks',
    tag: 'tag-acid',
    desc: 'Structured readiness assessment for EU AI Act, NIST AI RMF, ISO 42001, or OWASP LLM Top 10. Produces evidence documentation for auditors.',
    deliverables: ['Gap assessment', 'Evidence package', 'Policy templates', 'Auditor briefing'],
  },
  {
    title: 'Custom Framework Design',
    duration: 'Scoped',
    tag: 'tag-blue',
    desc: 'Design and implement a bespoke evaluation framework for your specific model, use case, and risk tolerance. Includes integration engineering and team training.',
    deliverables: ['Custom evaluation suite', 'Integration engineering', 'Team training', 'Ongoing support'],
  },
]

export default function Consulting() {
  return (
    <div className="pt-14">
      <section className="py-20 border-b border-border grid-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-900 via-bg-900/90 to-bg-900/50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/products" className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors">Products</Link>
            <span className="text-text-muted">/</span>
            <span className="font-mono text-xs text-text-secondary">Consulting</span>
          </div>
          <span className="tag tag-acid mb-4 inline-flex">Enterprise</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Consulting</h1>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed mb-8">
            Expert-led engagements combining Duelist's platform capabilities with hands-on security expertise. For organizations that need more than tooling.
          </p>
          <Link to="/contact" className="btn-primary">Contact Sales</Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Engagement Types</p>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {ENGAGEMENTS.map(e => (
              <div key={e.title} className="bg-bg-900 p-8 hover:bg-bg-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className={`tag ${e.tag}`}>{e.duration}</span>
                </div>
                <h2 className="font-sans text-base font-semibold text-text-primary mb-3">{e.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{e.desc}</p>
                <div>
                  <p className="section-label mb-2">Deliverables</p>
                  <div className="space-y-1.5">
                    {e.deliverables.map(d => (
                      <div key={d} className="flex items-center gap-2">
                        <span className="text-acid-DEFAULT text-xs">—</span>
                        <span className="font-mono text-xs text-text-muted">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border bg-bg-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">Ready to get started?</h2>
          <p className="text-text-secondary text-sm mb-8">
            All engagements are scoped based on your specific requirements. Contact us to discuss your AI security needs.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-3">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  )
}
