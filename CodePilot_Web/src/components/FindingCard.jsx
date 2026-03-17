import { useNavigate, useParams } from 'react-router-dom';
import './FindingCard.css';

const SEVERITY_LABELS = { critical: 'Critical', high: 'High', medium: 'Medium', low: 'Low' };
const CATEGORY_ICONS = { bug: '', smell: '', duplicate: '', hardcoded: '', improvement: '' };

export default function FindingCard({ finding }) {
  const navigate = useNavigate();
  const { analysisId } = useParams();

  return (
    <article
      className={`finding-card finding-card--${finding.severity}`}
      onClick={() => navigate(`/analysis/${analysisId}/findings/${finding.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/analysis/${analysisId}/findings/${finding.id}`)}
      aria-label={`${finding.title}, ${finding.severity} severity`}
    >
      <div className="finding-card-top">
        <span className={`severity-badge severity-badge--${finding.severity}`}>
          {SEVERITY_LABELS[finding.severity]}
        </span>
        <span className="category-badge">
          {finding.category}
        </span>
        <span className="role-badge">{finding.role}</span>
      </div>
      <h3 className="finding-title">{finding.title}</h3>
      <p className="finding-file">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        </svg>
        {finding.file}{finding.line ? `:${finding.line}` : ''}
      </p>
    </article>
  );
}
