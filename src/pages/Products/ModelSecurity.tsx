import ProductPageLayout from '../../components/ProductPageLayout'

const FEATURES = [
  { title: 'Jailbreak surface mapping', desc: 'Systematic enumeration of all jailbreak attack surfaces. Generates a behavioral fingerprint of model refusal boundaries and bypass susceptibility.' },
  { title: 'Vulnerability scoring', desc: 'CVSS-inspired severity scoring for model vulnerabilities. Track scores across model versions to measure security regression or improvement.' },
  { title: 'Behavioral fingerprinting', desc: 'Generate a reproducible behavioral signature for a model checkpoint. Detect unauthorized fine-tuning or model substitution in production.' },
  { title: 'Automated patch generation', desc: 'Resolve synthesizes hardened system prompts, guardrail configurations, and fine-tuning signals to remediate detected vulnerabilities.' },
  { title: 'Benchmark comparison', desc: 'Compare model security posture against industry benchmarks. Track your model against anonymized peer comparisons across the Duelist network.' },
  { title: 'Version delta analysis', desc: 'Automated diff between model versions. Surface new attack surfaces introduced by fine-tuning, RLHF updates, or base model upgrades.' },
]

const SPECS = [
  { label: 'Attack surfaces', value: '340+ mapped' },
  { label: 'Patch accuracy', value: '87% reduction' },
  { label: 'Fingerprint size', value: '< 1KB' },
  { label: 'Scan time', value: '< 4 min' },
]

const CODE = `import duelist

client = duelist.Client(api_key="sk-...")

fp = client.security.fingerprint(
    model="your-fine-tuned-model",
    baseline="openai/gpt-4o",
)

print(f"Jailbreak susceptibility: {fp.jailbreak_score:.1f}/10")
print(f"Injection surface: {fp.injection_surface}")
print(f"Deviation from baseline: {fp.delta:.2%}")

scan = client.security.scan(
    model="your-fine-tuned-model",
    depth="comprehensive",
)

for vuln in scan.vulnerabilities:
    print(f"[{vuln.cvss_score:.1f}] {vuln.title}")

patches = scan.remediate()
patches.export("security_patches.json")`

export default function ModelSecurity() {
  return (
    <ProductPageLayout
      tagLabel="Model Security"
      tagClass="tag-acid"
      title="Model Security"
      systems={['Forge', 'Nexus', 'Resolve']}
      desc="Deep model vulnerability analysis, jailbreak surface mapping, and automated hardening recommendations. Understand your model's security posture before deployment."
      features={FEATURES}
      specs={SPECS}
      codeExample={CODE}
    />
  )
}