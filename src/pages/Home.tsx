import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SYSTEMS = [
  {
    name: 'Seed', role: 'Threat Intelligence', color: 'brand',
    desc: 'Industry-categorized threat prompt generation with compliance mapping. Outputs structured seed corpora for downstream mutation.',
    tags: ['OWASP LLM Top 10', 'NIST AI RMF', 'ISO 42001'], stat: '48K+ threat seeds',
  },
  {
    name: 'Forge', role: 'Adversarial Mutation Engine', color: 'red',
    desc: 'Multi-strategy prompt mutation including injection, jailbreak templates, cross-lingual variants, and scenario-based escalation.',
    tags: ['Injection', 'Jailbreak', 'Multi-lang', 'Scenario'], stat: '200+ mutation ops',
  },
  {
    name: 'Nexus', role: 'Risk Evaluation', color: 'amber',
    desc: 'Multi-turn, multi-modal evaluation orchestration with classifier pipelines, scoring rubrics, and structured reporting outputs.',
    tags: ['Multi-turn', 'Multi-modal', 'Scoring', 'Reports'], stat: '99.2% eval accuracy',
  },
  {
    name: 'Blue', role: 'Synthetic Training Data', color: 'brand',
    desc: 'Domain-specific synthetic data generation for post-training pipelines. Red/blue signal synthesis for adversarial hardening.',
    tags: ['RLHF', 'DPO', 'Post-training', 'Domain-specific'], stat: '10M+ samples generated',
  },
  {
    name: 'Resolve', role: 'Remediation Engine', color: 'brand',
    desc: 'Automated remediation via red/blue signal synthesis. Produces hardening recommendations and patched prompt guardrails.',
    tags: ['Auto-patch', 'Guardrails', 'Signal fusion'], stat: '87% reduction rate',
  },
  {
    name: 'Signal', role: 'Runtime Monitoring', color: 'red',
    desc: 'Real-time behavioral monitoring with drift detection, anomaly classification, policy violation routing, and alerting workflows.',
    tags: ['Drift detection', 'Anomaly', 'Policy', 'Routing'], stat: '<50ms latency',
  },
]

const PRODUCTS = [
  { title: 'Red Teaming & Evaluation', href: '/products/red-teaming', tag: 'tag-red', tagLabel: 'Red Team', systems: ['Seed', 'Forge', 'Nexus'], desc: 'Systematic adversarial testing with automated attack generation, evaluation orchestration, and structured compliance reporting.' },
  { title: 'Model Security', href: '/products/model-security', tag: 'tag-acid', tagLabel: 'Security', systems: ['Forge', 'Nexus', 'Resolve'], desc: 'Deep model vulnerability analysis, jailbreak surface mapping, and automated hardening recommendations.' },
  { title: 'Code Scanning', href: '/products/code-scanning', tag: 'tag-amber', tagLabel: 'SAST/DAST', systems: ['Nexus', 'Signal'], desc: 'Static and dynamic analysis of LLM-integrated codebases. Detect prompt injection vectors, insecure model calls, data leakage paths.' },
  { title: 'Runtime Monitoring', href: '/products/runtime-monitoring', tag: 'tag-red', tagLabel: 'Runtime', systems: ['Signal', 'Resolve'], desc: 'Production model behavioral monitoring with real-time policy enforcement, anomaly detection, and incident response workflows.' },
  { title: 'Synthetic Data', href: '/products/synthetic-data', tag: 'tag-blue', tagLabel: 'ML Ops', systems: ['Blue', 'Seed'], desc: 'Adversarially-aware synthetic dataset generation for fine-tuning, RLHF, and DPO alignment post-training pipelines.' },
  { title: 'Consulting', href: '/products/consulting', tag: 'tag-acid', tagLabel: 'Enterprise', systems: ['All systems'], desc: 'Embedded red team engagements, AI security assessments, compliance readiness, and custom evaluation framework design.' },
]

const METRICS = [
  { value: '48K+', label: 'Threat Seeds' },
  { value: '200+', label: 'Mutation Operators' },
  { value: '< 50ms', label: 'Monitoring Latency' },
  { value: '99.2%', label: 'Eval Accuracy' },
]

const TERMINAL_LINES = [
  { t: 0, text: '$ duelist init --target gpt-4o --compliance=OWASP', type: 'code' },
  { t: 600, text: '> Loading threat seed corpus... [48,231 seeds]', type: 'secondary' },
  { t: 1100, text: '> Forge: generating adversarial mutations...', type: 'secondary' },
  { t: 1700, text: '  ├── prompt_injection      [127 variants]', type: 'muted' },
  { t: 2000, text: '  ├── jailbreak_templates    [89 variants]', type: 'muted' },
  { t: 2300, text: '  └── multilingual_attacks   [64 variants]', type: 'muted' },
  { t: 2700, text: '> Nexus: evaluating model responses...', type: 'secondary' },
  { t: 3200, text: '  ✓ CRITICAL: 3 vulnerabilities detected', type: 'red' },
  { t: 3700, text: '  ✓ HIGH: 11 policy violations logged', type: 'amber' },
  { t: 4200, text: '  ✓ Resolve: generating remediation patches', type: 'brand' },
  { t: 4700, text: '> Report exported: duelist_report_2025-01-15.json', type: 'code' },
]

function lineColor(type: string): string {
  if (type === 'red') return '#FF3A3A'
  if (type === 'amber') return '#FFAA00'
  if (type === 'brand') return 'var(--brand)'
  if (type === 'code') return 'var(--text-code)'
  if (type === 'muted') return 'var(--text-muted)'
  return 'var(--text-secondary)'
}

function Terminal() {
  const [visible, setVisible] = useState<number[]>([])
  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => setVisible(v => [...v, i]), line.t)
      return () => clearTimeout(t)
    })
  }, [])
  return (
    <div className="font-mono text-xs overflow-hidden" style={{ background: 'var(--bg-800)', border: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-700)' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-threat opacity-60"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-warn opacity-60"></div>
        <div className="w-2.5 h-2.5 rounded-full opacity-60" style={{ background: 'var(--brand)' }}></div>
        <span className="ml-2" style={{ color: 'var(--text-muted)' }}>duelist — threat evaluation</span>
      </div>
      <div className="p-4 space-y-1 min-h-[224px]">
        {TERMINAL_LINES.map((line, i) => (
          <div key={`terminal-${i}`} className="transition-opacity duration-300" style={{ color: lineColor(line.type), opacity: visible.includes(i) ? 1 : 0 }}>
            {line.text}
            {i === TERMINAL_LINES.length - 1 && visible.includes(i) && (
              <span className="inline-block w-1.5 h-3 ml-0.5 animate-blink align-middle" style={{ background: 'var(--brand)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ArchDiagram() {
  return (
    <svg viewBox="0 0 900 300" className="w-full" style={{ maxHeight: 300 }} aria-label="Platform architecture">
      <defs>
        <pattern id="archgrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--grid-line)" strokeWidth="0.5" />
        </pattern>
        <marker id="arr1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#4a6997" opacity="0.7" />
        </marker>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="#7A90A8" opacity="0.8" />
        </marker>
      </defs>
      <rect width="900" height="300" fill="url(#archgrid)" />
      <text x="20" y="55" fill="var(--text-muted)" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="2">INPUT</text>
      <text x="20" y="155" fill="var(--text-muted)" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="2">PROCESS</text>
      <text x="20" y="260" fill="var(--text-muted)" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="2">OUTPUT</text>

      <rect x="100" y="35" width="120" height="48" fill="var(--bg-800)" stroke="#4a6997" strokeWidth="1" />
      <text x="160" y="56" textAnchor="middle" fill="#4a6997" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">SEED</text>
      <text x="160" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="JetBrains Mono">Threat Intel</text>

      <rect x="340" y="35" width="120" height="48" fill="var(--bg-800)" stroke="#FF3A3A" strokeWidth="1" />
      <text x="400" y="56" textAnchor="middle" fill="#FF3A3A" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">FORGE</text>
      <text x="400" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="JetBrains Mono">Mutation Engine</text>

      <rect x="660" y="35" width="120" height="48" fill="var(--bg-800)" stroke="#FF3A3A" strokeWidth="1" />
      <text x="720" y="56" textAnchor="middle" fill="#FF3A3A" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">SIGNAL</text>
      <text x="720" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="JetBrains Mono">Runtime Monitor</text>

      <rect x="340" y="135" width="120" height="48" fill="var(--bg-800)" stroke="#FFAA00" strokeWidth="1.5" />
      <text x="400" y="156" textAnchor="middle" fill="#FFAA00" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">NEXUS</text>
      <text x="400" y="172" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="JetBrains Mono">Risk Evaluation</text>

      <rect x="100" y="248" width="120" height="48" fill="var(--bg-800)" stroke="#4a6997" strokeWidth="1" />
      <text x="160" y="269" textAnchor="middle" fill="#4a6997" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">BLUE</text>
      <text x="160" y="285" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="JetBrains Mono">Synthetic Data</text>

      <rect x="660" y="248" width="120" height="48" fill="var(--bg-800)" stroke="#4a6997" strokeWidth="1" />
      <text x="720" y="269" textAnchor="middle" fill="#4a6997" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">RESOLVE</text>
      <text x="720" y="285" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="JetBrains Mono">Remediation</text>

      <line x1="220" y1="59" x2="338" y2="59" stroke="var(--text-muted)" strokeWidth="1" markerEnd="url(#arr2)" />
      <line x1="400" y1="83" x2="400" y2="133" stroke="#FFAA00" strokeWidth="1" markerEnd="url(#arr1)" opacity="0.6" />
      <line x1="720" y1="83" x2="522" y2="152" stroke="var(--text-muted)" strokeWidth="1" markerEnd="url(#arr2)" strokeDasharray="4,3" />
      <line x1="400" y1="183" x2="222" y2="258" stroke="#4a6997" strokeWidth="1" markerEnd="url(#arr2)" opacity="0.6" />
      <line x1="460" y1="183" x2="658" y2="258" stroke="#4a6997" strokeWidth="1" markerEnd="url(#arr1)" opacity="0.6" />
      <path d="M 720 248 C 720 210 620 210 620 120 C 620 80 530 59 462 59" fill="none" stroke="#4a6997" strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arr1)" opacity="0.35" />
    </svg>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 50); return () => clearTimeout(t) }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-14 grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'none' }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center gap-3 mb-6">
                <span className="tag tag-acid">v2.4.0</span>
                <span className="tag tag-red">SOC 2 Type II</span>
                <span className="section-label">Production-ready</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                Adversarial AI<br />
                <span style={{ color: 'var(--brand)' }}>Security &</span><br />
                Evaluation
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                Automated red teaming, adversarial mutation, risk evaluation, and runtime monitoring for production language models. Built for security teams and ML engineers.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="btn-primary">
                  Request Access
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h8M8 4l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a href="#" className="btn-secondary">View Docs</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {METRICS.map(m => (
                  <div key={m.label}>
                    <p className="font-display text-lg font-bold" style={{ color: 'var(--brand)' }}>{m.value}</p>
                    <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Terminal />
              <p className="font-mono text-xs mt-3 text-right" style={{ color: 'var(--text-muted)' }}>// Full evaluation in under 90 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="section-label mb-2">Core Systems</p>
              <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Six Integrated Subsystems</h2>
            </div>
            <Link to="/products" className="btn-secondary hidden sm:inline-flex">All Products</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
            {SYSTEMS.map(sys => (
              <div key={sys.name} className="p-6 transition-colors" style={{ background: 'var(--bg-900)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-800)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-900)')}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display text-base font-bold" style={{ color: sys.color === 'red' ? '#FF3A3A' : sys.color === 'amber' ? '#FFAA00' : 'var(--brand)' }}>
                        {sys.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: sys.color === 'red' ? '#FF3A3A' : sys.color === 'amber' ? '#FFAA00' : 'var(--brand)' }}></span>
                    </div>
                    <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{sys.role}</p>
                  </div>
                  <span className="font-mono text-xs" style={{ color: sys.color === 'red' ? '#FF3A3A' : sys.color === 'amber' ? '#FFAA00' : 'var(--brand)' }}>{sys.stat}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{sys.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {sys.tags.map(t => (
                    <span key={`${sys.name}-${t}`} className={`tag ${sys.color === 'red' ? 'tag-red' : sys.color === 'amber' ? 'tag-amber' : 'tag-acid'}`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-800)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="section-label mb-2">Architecture</p>
            <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Platform Data Flow</h2>
            <p className="text-sm mt-2 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              A composable evaluation pipeline. Each subsystem operates independently or is orchestrated end-to-end via the Nexus evaluation layer.
            </p>
          </div>
          <div className="p-6" style={{ border: '1px solid var(--border)', background: 'var(--bg-900)' }}>
            <ArchDiagram />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-6">
            {[
              { name: 'Seed', c: 'var(--brand)' },
              { name: 'Forge', c: '#FF3A3A' },
              { name: 'Nexus', c: '#FFAA00' },
              { name: 'Blue', c: 'var(--brand)' },
              { name: 'Resolve', c: 'var(--brand)' },
              { name: 'Signal', c: '#FF3A3A' },
            ].map(s => (
              <div key={s.name} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm" style={{ background: s.c }}></span>
                <span className="font-mono text-xs" style={{ color: s.c }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label mb-2">Products</p>
            <h2 className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Security Across the ML Lifecycle</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
            {PRODUCTS.map(card => (
              <Link key={card.href} to={card.href} className="p-6 group transition-colors block" style={{ background: 'var(--bg-900)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-800)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-900)')}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`tag ${card.tag}`}>{card.tagLabel}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" strokeWidth="1.5" className="mt-1" style={{ stroke: 'var(--text-muted)' }}>
                    <path d="M3 7h8M8 4l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-sans text-sm font-semibold mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{card.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {card.systems.map(s => (
                    <span key={`${card.title}-${s}`} className="font-mono text-xs px-1.5 py-0.5" style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}>{s}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-800)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Evaluation Engine</p>
              <h2 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Technical-grade adversarial evaluation
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Seed corpus generation', desc: 'OWASP LLM Top 10, NIST AI RMF, and ISO 42001 mapped threat prompts. Categorized by industry vertical and compliance framework.' },
                  { title: 'Multi-strategy mutation', desc: '200+ mutation operators: direct injection, indirect injection, roleplay jailbreaks, cross-lingual variants, and scenario escalation.' },
                  { title: 'Structured evaluation', desc: 'Multi-turn, multi-modal evaluation with classifier pipelines. Per-attack scoring with confidence intervals. Full audit trail.' },
                  { title: 'Automated remediation', desc: 'Red/blue signal synthesis produces patched system prompts, guardrail configurations, and RLHF training signals for hardening.' },
                ].map(f => (
                  <div key={f.title} className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center" style={{ border: '1px solid var(--brand)' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{f.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-3">Integration</p>
              <h2 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Fits your existing workflow</h2>
              <div className="space-y-3">
                {[
                  { label: 'REST API', desc: 'Full evaluation pipeline via REST. CI/CD-ready with GitHub Actions and Jenkins plugins.' },
                  { label: 'Python SDK', desc: 'Native async Python client. Direct integration with LangChain, LlamaIndex, and Hugging Face.' },
                  { label: 'CLI', desc: 'Command-line interface for local runs, batch evaluation, and pipeline scripting.' },
                  { label: 'SIEM/SOAR', desc: 'Splunk, Datadog, and PagerDuty integrations for alert routing and incident management.' },
                  { label: 'SSO/SCIM', desc: 'SAML 2.0, OIDC, and SCIM provisioning. Role-based access with full audit logging.' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 p-4 transition-colors" style={{ border: '1px solid var(--border)' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <span className="font-mono text-xs flex-shrink-0 w-20" style={{ color: 'var(--brand)' }}>{item.label}</span>
                    <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="tag tag-acid mb-6 inline-flex">Enterprise</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Deploy in your infrastructure.<br />
            <span style={{ color: 'var(--brand)' }}>Own your evaluation data.</span>
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            On-premises deployment, air-gapped environments, VPC isolation, and custom compliance reporting. SOC 2 Type II certified. GDPR and CCPA compliant. Enterprise SLA with dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-3">
              Schedule a Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h8M8 4l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a href="#" className="btn-secondary px-8 py-3">Read Case Studies</a>
          </div>
          <p className="font-mono text-xs mt-8" style={{ color: 'var(--text-muted)' }}>
            Used by security teams at Fortune 500 companies and AI-native startups.
          </p>
        </div>
      </section>
    </div>
  )
}