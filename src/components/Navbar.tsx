import { Compass, User, Info } from 'lucide-react';

interface Props {
  onAboutClick: () => void;
  onAuthClick: () => void;
}

const Navbar: React.FC<Props> = ({ onAboutClick, onAuthClick }) => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      maxWidth: '100vw',
      zIndex: 1000,
      transition: 'var(--transition-smooth)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <Compass size={32} color="var(--accent)" />
        <span style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          letterSpacing: '1px',
          color: 'var(--text-primary)',
        }}>OVIA</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, justifyContent: 'flex-end' }}>
        <button className="glass nav-btn-text" onClick={onAboutClick} style={{
          padding: '0.5rem 1.2rem',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-primary)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          cursor: 'pointer'
        }}>
          <Info size={20} />
          <span className="hide-mobile">Sobre nosotros</span>
        </button>

        <button 
          onClick={onAuthClick}
          style={{
            padding: '0.5rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--accent)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <User size={24} />
        </button>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
