import { useEffect, useState } from 'react';
import logo from '../../assets/CampusPe Logo.png'
import Button from '../ui/Button.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { NAV_LINKS } from '../../data/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const say = useToast();

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header>
      <div className="wrap nav">
        <a href="#top" aria-label="CampusPe home"><img src={logo} alt="CampusPe" /></a>
        <nav className={`links${open ? ' open' : ''}`} id="links" aria-label="Main" onClick={(e) => e.target.matches('a') && setOpen(false)}>
          {NAV_LINKS.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="acts">
          <button type="button" className="signin" onClick={() => say('Sign in opens soon')}>Sign In</button>
          <Button toast="Sign up opens soon">Sign Up</Button>
          <button type="button" className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="links" onClick={() => setOpen((o) => !o)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
