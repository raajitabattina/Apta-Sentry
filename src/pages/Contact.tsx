import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success'

const INTERESTS = [
  'Red Teaming & Evaluation',
  'Model Security',
  'Code Scanning',
  'Runtime Monitoring',
  'Synthetic Data',
  'Consulting / Enterprise',
  'General Inquiry',
]

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
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Contact</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Request Access</h1>
          <p className="text-text-secondary text-base max-w-lg leading-relaxed">
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
                  <p className="font-mono text-sm text-acid-DEFAULT mb-1">{c.value}</p>
                  <p className="font-mono text-xs text-text-muted">{c.desc}</p>
                </div>
              ))}
              <div className="border-t border-border pt-6">
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
                <div className="border border-acid-DEFAULT p-8 text-center" style={{ background: 'rgba(0,255,136,0.03)' }}>
                  <div className="w-12 h-12 border border-acid-DEFAULT flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="font-display text-lg font-bold text-text-primary mb-2">Message received</h2>
                  <p className="font-mono text-xs text-text-secondary">
                    We'll follow up at <span className="text-acid-DEFAULT">{form.email}</span> within one business day.
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
                          className="w-full bg-bg-800 border border-border px-3 py-2.5 font-mono text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-acid-DEFAULT transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block section-label mb-1.5">Area of Interest</label>
                    <select
                      value={form.interest}
                      onChange={update('interest')}
                      className="w-full bg-bg-800 border border-border px-3 py-2.5 font-mono text-xs text-text-primary focus:outline-none focus:border-acid-DEFAULT transition-colors"
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
                      className="w-full bg-bg-800 border border-border px-3 py-2.5 font-mono text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-acid-DEFAULT transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="btn-primary w-full justify-center py-3 disabled:opacity-60"
                  >
                    {state === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="font-mono text-xs text-text-muted text-center">
                    No spam. We respect your privacy. See our{' '}
                    <a href="#" className="text-acid-DEFAULT hover:underline">privacy policy</a>.
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
