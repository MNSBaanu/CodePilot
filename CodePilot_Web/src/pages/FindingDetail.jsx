import { useParams, useNavigate } from 'react-router-dom';
import { mockFindings } from '../data/mockFindings';
import './FindingDetail.css';

const CATEGORY_ICONS = { bug: '', smell: '', duplicate: '', hardcoded: '', improvement: '' };

export default function FindingDetail() {
  const { analysisId, findingId } = useParams();
  const navigate = useNavigate();
  const finding = mockFindings.find((f) => f.id === findingId);

  if (!finding) {
    return (
      <main className="detail-page">
        <div className="detail-inner">
          <p>Finding not found.</p>
          <button className="back-btn" onClick={() => navigate(`/analysis/${analysisId}/findings`)}>
            Back to findings
          </button>
        </div>
      </main>
    );
  }

  // Render fix text — split on code fences for basic highlighting
  const renderFix = (text) => {
    const parts = text.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith('```')) {
        const code = part.replace(/^```\w*\n?/, '').replace(/```$/, '');
        return <pre key={i} className="fix-code"><code>{code}</code></pre>;
      }
      return <p key={i} className="fix-text">{part}</p>;
    });
  };

  return (
    <main className="detail-page">
      <div className="detail-inner">
        <button className="back-btn" onClick={() => navigate(`/analysis/${analysisId}/findings`)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to findings
        </button>

        <div className="detail-badges">
          <span className={`severity-badge severity-badge--${finding.severity}`}>{finding.severity}</span>
          <span className="category-badge">{finding.category}</span>
          <span className="role-badge">{finding.role}</span>
        </div>

        <h1 className="detail-title">{finding.title}</h1>

        <p className="detail-file">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          </svg>
          {finding.file}{finding.line ? `:${finding.line}` : ''}
        </p>

        <section className="detail-section">
          <h2 className="detail-section-title">Why this matters</h2>
          <p className="detail-explanation">{finding.explanation}</p>
        </section>

        <section className="detail-section">
          <h2 className="detail-section-title">Suggested fix</h2>
          <div className="detail-fix">
            {renderFix(finding.fix)}
          </div>
        </section>
      </div>
    </main>
  );
}
