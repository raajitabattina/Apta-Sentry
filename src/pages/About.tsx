const TEAM = [
  { name: 'Dr. Alina Marchetti', role: 'Co-founder & CEO', focus: 'AI safety research, adversarial ML' },
  { name: 'James Okafor', role: 'Co-founder & CTO', focus: 'Security engineering, red teaming' },
  { name: 'Priya Sundaram', role: 'Head of Research', focus: 'NLP, evaluation methodology' },
  { name: 'Marcus Veth', role: 'Head of Engineering', focus: 'Distributed systems, ML Ops' },
]

const PRINCIPLES = [
  { title: 'Technical depth over marketing', desc: 'Every product decision is grounded in real attack research. We build what the security community actually needs, not what looks good on a slide deck.' },
  { title: 'Evaluation should be reproducible', desc: 'Red team results are only useful if you can reproduce them. All Duelist evaluations produce deterministic, auditable outputs.' },
  { title: 'Security without capability sacrifice', desc: "Hardening a model should not degrade its usefulness. Duelist's remediation approach preserves model capability while reducing attack surface." },
  { title: 'Transparent methodology', desc: 'We publish our evaluation methodology, threat taxonomy, and benchmark datasets. Security through obscurity is not security.' },
]

export default function About() {
  return (
    <div className="pt-14">
      <section className="py-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">About</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Built by security researchers.<br />
            <span style={{ color: 'var(--brand)' }}>For AI engineers.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Duelist was founded in 2023 by a team of adversarial ML researchers and security engineers. We saw a gap between academic red teaming research and the practical tooling needed by engineering teams shipping production AI systems.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Principles</p>
          <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
            {PRINCIPLES.map(p => (
              <div key={p.title} className="p-8 transition-colors" style={{ background: 'var(--bg-900)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-800)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-900)')}
              >
                <h3 className="font-mono text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-800)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--border)' }}>
            {TEAM.map(t => (
              <div key={t.name} className="p-6" style={{ background: 'var(--bg-800)' }}>
                <div className="w-10 h-10 mb-4 flex items-center justify-center" style={{ border: '1px solid var(--border)', background: 'var(--bg-700)' }}>
                  <span className="font-display text-sm" style={{ color: 'var(--brand)' }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="font-sans text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                <p className="font-mono text-xs mt-0.5 mb-2" style={{ color: 'var(--brand)' }}>{t.role}</p>
                <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{t.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
            {[
              { label: 'Founded', value: '2023' },
              { label: 'HQ', value: 'San Francisco, CA' },
              { label: 'Certifications', value: 'SOC 2 Type II · ISO 27001' },
            ].map(s => (
              <div key={s.label} className="p-8" style={{ background: 'var(--bg-900)' }}>
                <p className="section-label mb-2">{s.label}</p>
                <p className="font-mono text-sm" style={{ color: 'var(--text-primary)' }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}