import React from 'react';
import { MapPin, Star, Heart } from 'lucide-react';
import { Place } from '../data/mockData';
import { motion } from 'framer-motion';

interface Props {
  place: Place;
}

const PlaceCard: React.FC<Props> = ({ place }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`bento-item ${place.size === 'large' ? 'large' : ''}`}
      style={{
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <img 
        src={place.image} 
        alt={place.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s ease'
        }}
      />
      
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '2rem',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '60%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <div>
            <span style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              background: 'var(--accent)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '0.5rem',
              display: 'inline-block'
            }}>
              {place.category}
            </span>
            <h3 style={{ fontSize: place.size === 'large' ? '2rem' : '1.25rem', fontWeight: 700 }}>{place.title}</h3>
          </div>
          <button style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '0.5rem', 
            borderRadius: '50%',
            backdropFilter: 'blur(5px)'
          }}>
            <Heart size={18} />
          </button>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8, fontSize: '0.9rem' }}>
          <MapPin size={16} />
          <span>{place.location}</span>
        </div>
        
        {place.size === 'large' && (
          <p style={{ marginTop: '1rem', opacity: 0.7, fontSize: '0.95rem', maxWidth: '80%' }}>
            {place.description}
          </p>
        )}
        
        <div style={{ 
          marginTop: '1.5rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Star size={16} color="var(--highlight)" fill="var(--highlight)" />
            <span style={{ fontWeight: 600 }}>{place.rating}</span>
          </div>
          <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>por {place.author}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceCard;
