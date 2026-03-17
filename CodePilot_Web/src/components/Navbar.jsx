import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-logo">CP</span>
        <span className="brand-name">CodePilot</span>
      </Link>
      {!isHome && (
        <Link to="/" className="navbar-action">
          New scan
        </Link>
      )}
    </nav>
  );
}
