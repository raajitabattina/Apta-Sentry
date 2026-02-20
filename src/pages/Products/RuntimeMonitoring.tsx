import ProductPageLayout from '../../components/ProductPageLayout'

const FEATURES = [
  { title: 'Real-time policy enforcement', desc: 'In-line request/response interception with configurable policy rules. Block, redact, or flag policy violations with sub-50ms overhead.' },
  { title: 'Behavioral drift detection', desc: 'Continuous baseline modeling of model behavior. Detect statistically significant drift in response patterns, refusal rates, or topic distributions.' },
  { title: 'Anomaly classification', desc: 'ML-based anomaly detection trained on adversarial patterns. Classify unusual model behavior as jailbreak attempt, data extraction, or benign outlier.' },
  { title: 'Policy violation routing', desc: 'Configurable workflow routing for violations. Route to Slack, PagerDuty, SIEM, or custom webhooks based on severity and violation type.' },
  { title: 'Session analysis', desc: 'Multi-turn session tracking with context-aware anomaly detection. Detect slow-burn attacks that spread attack payload across multiple turns.' },
  { title: 'Dashboards and reporting', desc: 'Real-time dashboards with violation timelines, user risk scores, and model health metrics. Exportable to Datadog, Grafana, or custom BI tools.' },
]

const SPECS = [
  { label: 'Detection latency', value: 'p50 < 50ms' },
  { label: 'Throughput', value: '50K req/s' },
  { label: 'Uptime SLA', value: '99.99%' },
  { label: 'Retention', value: '90 days' },
]

const CODE = `import duelist

monitor = duelist.Monitor(
    api_key="sk-...",
    model="gpt-4o",
    policies=[
        duelist.Policy.no_pii_in_output(),
        duelist.Policy.block_jailbreak_attempts(),
        duelist.Policy.max_topic_drift(threshold=0.3),
    ],
    on_violation=lambda v: alert_slack(v),
)

@monitor.watch
def call_llm(prompt: str) -> str:
    return openai_client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    ).choices[0].message.content

response = call_llm(user_input)`

export default function RuntimeMonitoring() {
  return (
    <ProductPageLayout
      tagLabel="Runtime Monitoring"
      tagClass="tag-red"
      title="Runtime Monitoring"
      systems={['Signal', 'Resolve']}
      desc="Real-time behavioral monitoring with policy enforcement, drift detection, anomaly classification, and incident response workflows for production language models."
      features={FEATURES}
      specs={SPECS}
      codeExample={CODE}
    />
  )
}