import ProductPageLayout from '../../components/ProductPageLayout'

const FEATURES = [
  { title: 'Prompt injection detection', desc: 'Static analysis of all string paths that reach LLM API calls. Detects user-controlled data reaching prompts without sanitization.' },
  { title: 'Insecure model call patterns', desc: 'Identify unsafe temperature settings, missing output validation, excessive token limits, and other insecure API usage patterns.' },
  { title: 'Data flow analysis', desc: 'Taint analysis tracking sensitive data from source to model input. Detect potential data leakage through model inference.' },
  { title: 'Dynamic testing', desc: 'Runtime instrumentation of LLM calls during integration testing. Inject adversarial inputs and observe application behavior.' },
  { title: 'Framework-aware rules', desc: 'Specialized rules for LangChain, LlamaIndex, Semantic Kernel, and Haystack. Understands framework abstractions and common misuse patterns.' },
  { title: 'IDE and CI integration', desc: 'VS Code extension with inline findings. GitHub Actions and Jenkins plugins. SARIF output for GitHub Security Dashboard.' },
]

const SPECS = [
  { label: 'Rule count', value: '180+ rules' },
  { label: 'False positive rate', value: '< 3%' },
  { label: 'Scan speed', value: '50K LOC/s' },
  { label: 'Frameworks', value: '12 supported' },
]

const CODE = `# .github/workflows/ai-security.yml
name: Duelist Code Scan

on: [push, pull_request]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: duelist-dev/scan-action@v2
        with:
          api-key: \${{ secrets.DUELIST_API_KEY }}
          path: ./src
          frameworks: langchain,llama-index
          severity-threshold: HIGH
          output: sarif

      - uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: duelist-results.sarif`

export default function CodeScanning() {
  return (
    <ProductPageLayout
      tagLabel="Code Scanning"
      tagClass="tag-amber"
      title="Code Scanning"
      systems={['Nexus', 'Signal']}
      desc="Static and dynamic analysis for LLM-integrated codebases. Detect prompt injection vectors, insecure model calls, and data leakage paths in your application code."
      features={FEATURES}
      specs={SPECS}
      codeExample={CODE}
    />
  )
}