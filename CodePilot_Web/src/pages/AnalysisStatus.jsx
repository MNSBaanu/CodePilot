import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockAnalysis } from '../data/mockFindings';
import './AnalysisStatus.css';

const STEPS = ['Cloning repository', 'Running static checks', 'Detecting patterns', 'Generating insights'];

export default function AnalysisStatus() {
  const { analysisId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  // Simulate progress for mock data
  useEffect(() => {
    if (mockAnalysis.status === 'completed') {
      const timer = setInterval(() => {
        setStep((s) => {
          if (s >= STEPS.length - 1) {
            clearInterval(timer);
            setTimeout(() => setDone(true), 600);
            return s;
          }
          return s + 1;
        });
      }, 900);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <main className="status-page">
      <div className="status-card">
        <span className="status-kicker">Analysis</span>
        <h1 className="status-title">
          {done ? 'Analysis complete' : 'Scanning your repository…'}
        </h1>
        <p className="status-repo">{mockAnalysis.repoUrl}</p>

        <div className="status-steps">
          {STEPS.map((label, i) => {
            const state = i < step ? 'done' : i === step ? 'active' : 'pending';
            return (
              <div className={`status-step status-step--${state}`} key={label}>
                <span className="step-icon">
                  {state === 'done' ? '✓' : state === 'active' ? <span className="spinner" /> : '○'}
                </span>
                <span className="step-label">{label}</span>
              </div>
            );
          })}
        </div>

        {done && (
          <div className="status-summary">
            <div className="summary-stat summary-stat--critical">
              <span className="stat-num">{mockAnalysis.summary.critical}</span>
              <span className="stat-label">Critical</span>
            </div>
            <div className="summary-stat summary-stat--high">
              <span className="stat-num">{mockAnalysis.summary.high}</span>
              <span className="stat-label">High</span>
            </div>
            <div className="summary-stat summary-stat--medium">
              <span className="stat-num">{mockAnalysis.summary.medium}</span>
              <span className="stat-label">Medium</span>
            </div>
            <div className="summary-stat summary-stat--low">
              <span className="stat-num">{mockAnalysis.summary.low}</span>
              <span className="stat-label">Low</span>
            </div>
          </div>
        )}

        {done && (
          <button
            className="btn-primary"
            onClick={() => navigate(`/analysis/${analysisId}/findings`)}
          >
            View Findings
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        )}
      </div>
    </main>
  );
}
