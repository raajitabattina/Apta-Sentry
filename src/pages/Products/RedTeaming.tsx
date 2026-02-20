import ProductPageLayout from '../../components/ProductPageLayout'

const FEATURES = [
  { title: 'Automated seed generation', desc: 'Industry-categorized threat prompts mapped to OWASP LLM Top 10, NIST AI RMF, and ISO 42001. 48K+ curated seeds updated continuously.' },
  { title: 'Multi-strategy mutation', desc: 'Forge applies 200+ mutation operators: direct injection, indirect injection, role-playing jailbreaks, multi-lingual variants, and scenario-based escalation chains.' },
  { title: 'Multi-turn evaluation', desc: 'Nexus simulates complete conversation flows to catch vulnerabilities that only emerge across turn sequences. Configurable turn depth and branching.' },
  { title: 'Multi-modal testing', desc: 'Evaluate vision-language models with adversarial image-text pairs. Test audio, document, and structured data inputs where supported.' },
  { title: 'Classifier pipeline', desc: 'Multi-layer response classifiers with customizable rubrics. Per-attack confidence scoring with false positive rate controls.' },
  { title: 'Compliance reporting', desc: 'Structured JSON/PDF reports with compliance framework mappings. Evidence packages ready for SOC 2, ISO 42001, and EU AI Act audits.' },
]

const SPECS = [
  { label: 'Seed corpus', value: '48K+ seeds' },
  { label: 'Mutation ops', value: '200+' },
  { label: 'Eval accuracy', value: '99.2%' },
  { label: 'API latency', value: 'p50 < 2s' },
]

const CODE = `import duelist

client = duelist.Client(api_key="sk-...")

# Initialize evaluation
eval = client.evaluations.create(
    target="openai/gpt-4o",
    seed_corpus="owasp-llm-top10",
    mutation_strategies=[
        "prompt_injection",
        "jailbreak_roleplay",
        "multilingual",
    ],
    turns=5,
    compliance=["OWASP_LLM", "NIST_AI_RMF"],
)

# Run and stream results
for result in eval.run(stream=True):
    if result.severity in ["CRITICAL", "HIGH"]:
        print(f"[{result.severity}] {result.attack_id}")
        print(f"  Score: {result.score:.2f}")
        print(f"  Strategy: {result.strategy}")

# Export compliance report
report = eval.report(format="pdf")
report.save("duelist_eval_report.pdf")`

export default function RedTeaming() {
  return (
    <ProductPageLayout
      tagLabel="Red Teaming & Evaluation"
      tagClass="tag-red"
      title="Red Teaming & Evaluation"
      systems={['Seed', 'Forge', 'Nexus']}
      desc="Automated adversarial testing using structured threat seed generation, mutation-based attack synthesis, and multi-turn risk evaluation with compliance-mapped reporting."
      features={FEATURES}
      specs={SPECS}
      codeExample={CODE}
    />
  )
}
