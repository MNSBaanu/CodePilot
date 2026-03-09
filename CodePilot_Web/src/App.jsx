import './App.css'

function App() {
  const roleModes = ['Frontend', 'Backend', 'QA', 'DevOps', 'Security']

  const metrics = [
    { label: 'Repos Scanned', value: '128' },
    { label: 'Bugs Found', value: '346' },
    { label: 'Fixes Suggested', value: '512' },
    { label: 'Avg Scan Time', value: '2m 14s' },
  ]

  const vibeFeatures = [
    'Fast repository scan and re-scan',
    'Issue explanation with suggested fix',
    'Patch-ready code suggestions',
    'Role-aware execution views',
  ]

  const findings = [
    {
      id: 'F-101',
      title: 'Auth guard missing on token read',
      category: 'bug',
      severity: 'high',
      file: 'src/services/auth.js',
      summary: 'Potential null access when user token is missing.',
      suggestion: 'Use optional chaining and return early if token is missing before decode/parse steps.',
    },
    {
      id: 'F-102',
      title: 'Repeated date formatter logic',
      category: 'duplicate',
      severity: 'medium',
      file: 'src/utils/formatDate.js',
      summary: 'Similar date formatting logic appears in multiple files.',
      suggestion: 'Extract one shared formatter utility and replace duplicates with unit-tested helper usage.',
    },
    {
      id: 'F-103',
      title: 'Hardcoded API endpoint in config',
      category: 'hardcoded',
      severity: 'low',
      file: 'src/config/appConfig.js',
      summary: 'API base URL is hardcoded instead of using environment variables.',
      suggestion: 'Move API URL into VITE_API_BASE_URL and validate at startup with a fallback message.',
    },
  ]

  return (
    <div className="app-shell">
      <div className="ambient-glow ambient-glow-a" />
      <div className="ambient-glow ambient-glow-b" />

      <header className="hero panel">
        <p className="hero-kicker">CodePilot / Vibe Coder Studio</p>
        <h1 className="page-title">Identify bugs, fix faster, and keep your flow state.</h1>
        <p className="page-subtitle">
          Scan repositories for high-impact issues, get concise fix suggestions, and prioritize what to ship next.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Start New Scan</button>
          <button className="btn-secondary">View Latest Report</button>
        </div>
      </header>

      <section className="metrics-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="panel metric-card">
            <p className="metric-value">{metric.value}</p>
            <p className="metric-label">{metric.label}</p>
          </article>
        ))}
      </section>

      <section className="panel split-panel">
        <div>
          <h2 className="panel-title">1) Submit Repository</h2>
          <p className="panel-note">Paste your repository URL to run a full bug and improvement analysis.</p>
          <label className="field-label" htmlFor="repoUrl">
            Repository URL
          </label>
          <input
            className="input-control"
            id="repoUrl"
            placeholder="https://github.com/owner/repository"
          />
          <button className="btn-primary">Run Code Health Check</button>
        </div>
        <div className="status-box">
          <h3 className="status-title">Active Analysis</h3>
          <p className="status-item"><strong>Analysis ID:</strong> ANL-0001</p>
          <p className="status-item"><strong>Status:</strong> Running</p>
          <p className="status-item"><strong>Branch:</strong> main</p>
          <div className="progress-track" aria-label="Analysis progress">
            <span className="progress-fill" />
          </div>
          <p className="progress-label">42% complete</p>
        </div>
      </section>

      <section className="panel">
        <h2 className="panel-title">Role-Aware Review Mode</h2>
        <p className="panel-note">Switch perspective to get recommendations tailored to each engineering role.</p>
        <div className="role-list">
          {roleModes.map((role) => (
            <span key={role} className="role-chip">{role}</span>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2 className="panel-title">Vibe Coder Features</h2>
        <div className="role-list">
          {vibeFeatures.map((feature) => (
            <span key={feature} className="role-chip">{feature}</span>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2 className="panel-title">2) Findings + Suggested Fixes</h2>
        <div className="findings-grid">
          {findings.map((item) => (
            <article key={item.id} className="finding-card">
              <p className="finding-head">
                <strong>{item.id}</strong> | {item.category} |{' '}
                <span className={`severity ${item.severity}`}>{item.severity}</span>
              </p>
              <h3 className="finding-title">{item.title}</h3>
              <p className="finding-file"><strong>File:</strong> {item.file}</p>
              <p className="finding-summary">{item.summary}</p>
              <p className="finding-summary"><strong>Suggested fix:</strong> {item.suggestion}</p>
              <button className="btn-secondary">Preview Patch</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
