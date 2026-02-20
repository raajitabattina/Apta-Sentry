import ProductPageLayout from '../../components/ProductPageLayout'

const FEATURES = [
  { title: 'Adversarially-aware generation', desc: 'Generate training pairs that explicitly model adversarial inputs and ideal model responses. Produces data that teaches refusal without capability degradation.' },
  { title: 'Domain-specific corpora', desc: 'Domain-tuned generation for finance, healthcare, legal, and enterprise verticals. Corpus respects domain-specific compliance constraints.' },
  { title: 'RLHF/DPO ready output', desc: 'Outputs structured preference pairs (chosen/rejected) ready for DPO fine-tuning, or scalar reward labels for RLHF. Compatible with TRL and Axolotl.' },
  { title: 'Red/blue labeling', desc: 'Each sample labeled with attack strategy, severity, and correct model behavior. Use blue samples for alignment, red samples for adversarial robustness.' },
  { title: 'Deduplication and quality filtering', desc: 'Automated deduplication using MinHash LSH. Quality filtering via perplexity scoring and diversity metrics. Configurable quality thresholds.' },
  { title: 'Export formats', desc: 'Export as Hugging Face Datasets, JSONL, Parquet, or direct upload to Hugging Face Hub, AWS S3, or GCS.' },
]

const SPECS = [
  { label: 'Generation rate', value: '10K/min' },
  { label: 'Domains', value: '8 verticals' },
  { label: 'Dedup accuracy', value: '99.7%' },
  { label: 'Max dataset size', value: '100M rows' },
]

const CODE = `import duelist

client = duelist.Client(api_key="sk-...")

# Generate adversarial training dataset
dataset = client.data.generate(
    domain="financial_services",
    size=50_000,
    strategies=[
        "prompt_injection",
        "jailbreak",
        "social_engineering",
    ],
    format="dpo",  # chosen/rejected pairs
    compliance=["FINRA", "SOX"],
)

# Push to Hugging Face Hub
dataset.push_to_hub(
    "your-org/adversarial-finance-dpo",
    token=HF_TOKEN,
)

# Or export locally as Parquet
dataset.to_parquet("./adversarial_training_data/")`

export default function SyntheticData() {
  return (
    <ProductPageLayout
      tagLabel="Synthetic Data"
      tagClass="tag-blue"
      title="Synthetic Data"
      systems={['Blue', 'Seed']}
      desc="Domain-specific adversarial training data generation for post-training alignment. RLHF/DPO-ready outputs that improve robustness without sacrificing capability."
      features={FEATURES}
      specs={SPECS}
      codeExample={CODE}
    />
  )
}
