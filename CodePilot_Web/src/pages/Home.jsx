import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [repoUrl, setRepoUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = repoUrl.trim();
    if (!trimmed) {
      setError('Please enter a repository URL.');
      return;
    }
    if (!trimmed.startsWith('http')) {
      setError('Enter a valid URL starting with https://');
      return;
    }
    setError('');
    // In production this would POST to /api/analyses
    // For now we navigate straight to the mock status page
    navigate('/analysis/analysis-001');
  }

  return (
    <main className="home">
      <div className="home-inner">
        <span className="home-kicker">CodePilot</span>
        <h1 className="home-title">Scan your codebase.<br />Fix what matters.</h1>
        <p className="home-subtitle">
          Paste a repository URL and CodePilot will detect bugs, code smells,
          duplicates, and improvement opportunities — ranked by severity.
        </p>

        <form className="repo-form" onSubmit={handleSubmit}>
          <div className="repo-input-wrap">
            <span className="repo-input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </span>
            <input
              className="repo-input"
              type="url"
              placeholder="https://github.com/your-org/your-repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              aria-label="Repository URL"
            />
          </div>
          {error && <p className="repo-error" role="alert">{error}</p>}
          <button className="btn-primary" type="submit">
            Run Analysis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </form>

        <div className="home-features">
          {[
            'Bugs & vulnerabilities',
            'Duplicate code',
            'Hardcoded secrets',
            'Improvement suggestions',
          ].map((label) => (
            <div className="feature-chip" key={label}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
