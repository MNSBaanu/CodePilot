import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockFindings, mockAnalysis } from '../data/mockFindings';
import FindingCard from '../components/FindingCard';
import './Findings.css';

const ROLES = ['all', 'frontend', 'backend', 'qa', 'devops', 'security'];
const SEVERITIES = ['all', 'critical', 'high', 'medium', 'low'];
const CATEGORIES = ['all', 'bug', 'smell', 'duplicate', 'hardcoded', 'improvement'];

export default function Findings() {
  const navigate = useNavigate();
  const { analysisId } = useParams();
  const [role, setRole] = useState('all');
  const [severity, setSeverity] = useState('all');
  const [category, setCategory] = useState('all');

  const filtered = mockFindings.filter((f) => {
    if (role !== 'all' && f.role !== role) return false;
    if (severity !== 'all' && f.severity !== severity) return false;
    if (category !== 'all' && f.category !== category) return false;
    return true;
  });

  const counts = {
    critical: mockFindings.filter((f) => f.severity === 'critical').length,
    high: mockFindings.filter((f) => f.severity === 'high').length,
    medium: mockFindings.filter((f) => f.severity === 'medium').length,
    low: mockFindings.filter((f) => f.severity === 'low').length,
  };

  return (
    <main className="findings-page">
      <div className="findings-inner">
        <header className="findings-header">
          <div>
            <button className="back-btn" onClick={() => navigate('/')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              New scan
            </button>
            <h1 className="findings-title">Findings</h1>
            <p className="findings-repo">{mockAnalysis.repoUrl}</p>
          </div>
          <div className="severity-summary">
            {Object.entries(counts).map(([sev, count]) => (
              <button
                key={sev}
                className={`sev-pill sev-pill--${sev} ${severity === sev ? 'sev-pill--active' : ''}`}
                onClick={() => setSeverity(severity === sev ? 'all' : sev)}
              >
                <span className="sev-count">{count}</span>
                <span className="sev-label">{sev}</span>
              </button>
            ))}
          </div>
        </header>

        <div className="findings-filters">
          <div className="filter-group">
            <span className="filter-label">Role</span>
            <div className="filter-tabs">
              {ROLES.map((r) => (
                <button
                  key={r}
                  className={`filter-tab ${role === r ? 'filter-tab--active' : ''}`}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Category</span>
            <div className="filter-tabs">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  className={`filter-tab ${category === c ? 'filter-tab--active' : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="findings-count">
          {filtered.length} finding{filtered.length !== 1 ? 's' : ''}
          {(role !== 'all' || severity !== 'all' || category !== 'all') && ' (filtered)'}
        </p>

        {filtered.length === 0 ? (
          <div className="findings-empty">
            <p>No findings match your filters.</p>
          </div>
        ) : (
          <div className="findings-grid">
            {filtered.map((f) => (
              <FindingCard key={f.id} finding={f} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
