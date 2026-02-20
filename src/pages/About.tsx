const TEAM = [
  { name: 'Dr. Alina Marchetti', role: 'Co-founder & CEO', focus: 'AI safety research, adversarial ML' },
  { name: 'James Okafor', role: 'Co-founder & CTO', focus: 'Security engineering, red teaming' },
  { name: 'Priya Sundaram', role: 'Head of Research', focus: 'NLP, evaluation methodology' },
  { name: 'Marcus Veth', role: 'Head of Engineering', focus: 'Distributed systems, ML Ops' },
]

const PRINCIPLES = [
  {
    title: 'Technical depth over marketing',
    desc: 'Every product decision is grounded in real attack research. We build what the security community actually needs, not what looks good on a slide deck.',
  },
  {
    title: 'Evaluation should be reproducible',
    desc: 'Red team results are only useful if you can reproduce them. All Duelist evaluations produce deterministic, auditable outputs.',
  },
  {
    title: 'Security without capability sacrifice',
    desc: "Hardening a model should not degrade its usefulness. Duelist's remediation approach is designed to preserve model capability while reducing attack surface.",
  },
  {
    title: 'Transparent methodology',
    desc: 'We publish our evaluation methodology, threat taxonomy, and benchmark datasets. Security through obscurity is not security.',
  },
]

export default function About() {
  return (
    <div className="pt-14">
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">About</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Built by security researchers.<br />
            <span className="text-acid-DEFAULT">For AI engineers.</span>
          </h1>
          <p className="text-text-secondary text-base leading-relaxed max-w-2xl">
            Duelist was founded in 2023 by a team of adversarial ML researchers and security engineers. We saw a gap between academic red teaming research and the practical tooling needed by engineering teams shipping production AI systems.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Principles</p>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {PRINCIPLES.map(p => (
              <div key={p.title} className="bg-bg-900 p-8 hover:bg-bg-800 transition-colors">
                <h3 className="font-mono text-sm font-semibold text-text-primary mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border bg-bg-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-8">Team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {TEAM.map(t => (
              <div key={t.name} className="bg-bg-800 p-6">
                <div className="w-10 h-10 border border-border mb-4 flex items-center justify-center bg-bg-700">
                  <span className="font-display text-sm text-acid-DEFAULT">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="font-sans text-sm font-semibold text-text-primary">{t.name}</p>
                <p className="font-mono text-xs text-acid-DEFAULT mt-0.5 mb-2">{t.role}</p>
                <p className="font-mono text-xs text-text-muted">{t.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {[
              { label: 'Founded', value: '2023' },
              { label: 'HQ', value: 'San Francisco, CA' },
              { label: 'Certifications', value: 'SOC 2 Type II · ISO 27001' },
            ].map(s => (
              <div key={s.label} className="bg-bg-900 p-8">
                <p className="section-label mb-2">{s.label}</p>
                <p className="font-mono text-sm text-text-primary">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
