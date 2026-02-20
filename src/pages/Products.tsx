import { Link } from 'react-router-dom'

const PRODUCTS = [
  {
    title: 'Red Teaming & Evaluation',
    href: '/products/red-teaming',
    tag: 'tag-red',
    tagLabel: 'Core',
    systems: ['Seed', 'Forge', 'Nexus'],
    desc: 'Automated adversarial testing with structured threat seed generation, mutation-based attack synthesis, and multi-turn risk evaluation with compliance-mapped reporting.',
    features: ['OWASP LLM Top 10 coverage', 'Multi-strategy mutation', 'CI/CD integration', 'Compliance reporting'],
  },
  {
    title: 'Model Security',
    href: '/products/model-security',
    tag: 'tag-acid',
    tagLabel: 'Security',
    systems: ['Forge', 'Nexus', 'Resolve'],
    desc: 'Deep vulnerability analysis of model behavior, jailbreak surface mapping, and automated hardening via red/blue signal synthesis.',
    features: ['Jailbreak surface mapping', 'Automated patch generation', 'Behavioral fingerprinting', 'Benchmark comparison'],
  },
  {
    title: 'Code Scanning',
    href: '/products/code-scanning',
    tag: 'tag-amber',
    tagLabel: 'SAST/DAST',
    systems: ['Nexus', 'Signal'],
    desc: 'Static and dynamic analysis of LLM-integrated codebases. Detect prompt injection vectors, insecure model calls, and data leakage paths.',
    features: ['Prompt injection detection', 'Insecure model calls', 'Data flow analysis', 'IDE plugins'],
  },
  {
    title: 'Runtime Monitoring',
    href: '/products/runtime-monitoring',
    tag: 'tag-red',
    tagLabel: 'Runtime',
    systems: ['Signal', 'Resolve'],
    desc: 'Production behavioral monitoring with real-time policy enforcement, drift detection, anomaly classification, and incident response routing.',
    features: ['<50ms detection latency', 'Policy enforcement', 'Drift detection', 'SIEM integration'],
  },
  {
    title: 'Synthetic Data',
    href: '/products/synthetic-data',
    tag: 'tag-blue',
    tagLabel: 'ML Ops',
    systems: ['Blue', 'Seed'],
    desc: 'Adversarially-aware synthetic dataset generation for fine-tuning, RLHF, and DPO post-training alignment pipelines.',
    features: ['RLHF/DPO ready', 'Domain-specific', 'Red/blue labeled', 'Deduplication'],
  },
  {
    title: 'Consulting',
    href: '/products/consulting',
    tag: 'tag-acid',
    tagLabel: 'Enterprise',
    systems: ['All Systems'],
    desc: 'Embedded red team engagements, AI security assessments, compliance readiness reviews, and custom evaluation framework design.',
    features: ['Embedded red team', 'Compliance advisory', 'Custom frameworks', 'Incident response'],
  },
]

export default function Products() {
  return (
    <div className="pt-14">
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Products</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Security across the AI lifecycle
          </h1>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            From pre-deployment evaluation to production monitoring. Each product maps to one or more of Duelist's six core subsystems.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {PRODUCTS.map(p => (
              <Link
                key={p.href}
                to={p.href}
                className="bg-bg-900 p-8 group hover:bg-bg-800 transition-colors block"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`tag ${p.tag}`}>{p.tagLabel}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#4A6278" strokeWidth="1.5" className="group-hover:stroke-acid-DEFAULT transition-colors mt-1">
                    <path d="M3 7h8M8 4l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-sans text-base font-semibold text-text-primary mb-2 group-hover:text-acid-DEFAULT transition-colors">
                  {p.title}
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="space-y-1.5 mb-5">
                  {p.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="text-acid-DEFAULT text-xs">—</span>
                      <span className="font-mono text-xs text-text-muted">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.systems.map(s => (
                    <span key={s} className="font-mono text-xs text-text-muted border border-border px-2 py-0.5">{s}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
