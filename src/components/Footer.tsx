import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success'

const INTERESTS = ['Red Teaming & Evaluation', 'Model Security', 'Code Scanning', 'Runtime Monitoring', 'Synthetic Data', 'Consulting / Enterprise', 'General Inquiry']

const inputStyle = {
  width: '100%',
  background: 'var(--bg-800)',
  border: '1px solid var(--border)',
  padding: '10px 12px',
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '0.75rem',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.15s ease',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '', interest: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setTimeout(() => setState('success'), 1200)
  }

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <div className="pt-14">
      <section className="py-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Contact</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Request Access</h1>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Duelist is available by request. Fill out the form and our team will follow up within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              {[
                { label: 'Sales', value: 'sales@duelist.dev', desc: 'Enterprise pricing, licensing, and procurement' },
                { label: 'Security', value: 'security@duelist.dev', desc: 'Vulnerability disclosure and security questions' },
                { label: 'Support', value: 'support@duelist.dev', desc: 'Technical support for existing customers' },
              ].map(c => (
                <div key={c.label}>
                  <p className="section-label mb-1">{c.label}</p>
                  <p className="font-mono text-sm mb-1" style={{ color: 'var(--brand)' }}>{c.value}</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
                </div>
              ))}
              <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="section-label mb-3">Compliance</p>
                <div className="flex flex-wrap gap-2">
                  {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'CCPA'].map(c => (
                    <span key={c} className="tag tag-acid">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {state === 'success' ? (
                <div className="p-8 text-center" style={{ border: '1px solid var(--brand)', background: 'var(--brand-faint)' }}>
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ border: '1px solid var(--brand)' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message received</h2>
                  <p className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                    We'll follow up at <span style={{ color: 'var(--brand)' }}>{form.email}</span> within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Name', type: 'text', placeholder: 'Jane Smith', required: true },
                      { name: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@company.com', required: true },
                      { name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp', required: true },
                      { name: 'role', label: 'Role', type: 'text', placeholder: 'Security Engineer', required: false },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block section-label mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          value={form[field.name as keyof typeof form]}
                          onChange={update(field.name)}
                          placeholder={field.placeholder}
                          required={field.required}
                          style={inputStyle}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--brand)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block section-label mb-1.5">Area of Interest</label>
                    <select
                      value={form.interest}
                      onChange={update('interest')}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--brand)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    >
                      <option value="">Select...</option>
                      {INTERESTS.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block section-label mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Describe your use case, model stack, and key security concerns..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--brand)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <button type="submit" disabled={state === 'loading'} className="btn-primary w-full justify-center py-3">
                    {state === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="font-mono text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                    No spam. We respect your privacy. See our{' '}
                    <a href="#" style={{ color: 'var(--brand)' }}>privacy policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}