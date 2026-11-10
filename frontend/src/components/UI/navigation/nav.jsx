import {useState} from 'react';
import './nav.css';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['Contact', '#contact'],
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="primary-navigation" id="top">
      <nav className="navigation-header" aria-label="Main navigation">
        <a className="navigation-logo" href="#home" onClick={closeMenu} aria-label="Vectalogix Software home">
          <img
            src="/images/vectalogix-icon.svg"
            alt=""
            className="vectalogix-logo"
          />
          <span>Vectalogix <span>Software</span></span>
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation-links"
          type="button"
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>

        <ul
          className={`nav-list${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation-links"
        >
          {links.map(([label, href]) => (
            <li key={href}>
              <a className="nav-link" href={href} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
