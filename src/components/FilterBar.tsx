import React from 'react';
import { SlidersHorizontal, Map, Grid } from 'lucide-react';

interface Props {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const FilterBar: React.FC<Props> = ({ activeCategory, setActiveCategory }) => {
  const categories = ['todos', 'naturaleza', 'cultura', 'gastronomía', 'aventura'];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem', flex: 1 }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat === 'todos' ? 'all' : cat)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              background: (activeCategory === cat || (activeCategory === 'all' && cat === 'todos')) ? 'var(--accent)' : 'var(--bg-secondary)',
              color: (activeCategory === cat || (activeCategory === 'all' && cat === 'todos')) ? 'white' : 'var(--text-secondary)',
              fontWeight: 500,
              textTransform: 'capitalize',
              boxShadow: (activeCategory === cat || (activeCategory === 'all' && cat === 'todos')) ? '0 4px 12px rgba(0, 128, 128, 0.2)' : 'none',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="glass" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1.2rem',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-secondary)'
        }}>
          <SlidersHorizontal size={18} />
          <span>Filtros</span>
        </button>
        
        <div className="glass" style={{
          display: 'flex',
          padding: '0.3rem',
          borderRadius: 'var(--radius-md)'
        }}>
          <button style={{ 
            padding: '0.3rem 0.8rem', 
            borderRadius: 'var(--radius-sm)', 
            background: 'var(--bg-primary)',
            color: 'var(--accent)'
          }}>
            <Grid size={18} />
          </button>
          <button style={{ 
            padding: '0.3rem 0.8rem', 
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-secondary)'
          }}>
            <Map size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
