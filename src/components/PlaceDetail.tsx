import React, { useState, useEffect } from 'react';
import { MapPin, Star, ArrowLeft, ExternalLink, User } from 'lucide-react';
import { Place, Review } from '../data/mockData';
import { motion } from 'framer-motion';

interface Props {
  place: Place;
  onBack: () => void;
}

const PlaceDetail: React.FC<Props> = ({ place, onBack }) => {
  const [localReviews, setLocalReviews] = useState<Review[]>([]);
  const [newReviewUser, setNewReviewUser] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(`reviews_${place.id}`);
    if (stored) {
      try {
        setLocalReviews(JSON.parse(stored));
      } catch (e) {
        setLocalReviews(place.reviews);
      }
    } else {
      setLocalReviews(place.reviews);
    }
  }, [place.id, place.reviews]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim() || !newReviewUser.trim()) return;

    const newReview: Review = {
      id: `local_${Date.now()}`,
      user: newReviewUser,
      rating: newReviewRating,
      comment: newReviewComment,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedReviews = [newReview, ...localReviews];
    setLocalReviews(updatedReviews);
    localStorage.setItem(`reviews_${place.id}`, JSON.stringify(updatedReviews));
    
    setNewReviewComment('');
    setNewReviewUser('');
    setNewReviewRating(5);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 100
      }}
    >
      {/* Hero Section */}
      <div style={{ height: '60vh', position: 'relative', overflow: 'hidden' }}>
        <img 
          src={place.image} 
          alt={place.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))'
        }} />
        
        <button 
          onClick={onBack}
          className="glass"
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            padding: '0.8rem',
            borderRadius: '50%',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowLeft size={24} />
        </button>

        <div className="detail-hero-content">
          <span style={{ 
            background: 'var(--accent)', 
            padding: '0.4rem 1rem', 
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>
            {place.category}
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>{place.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', opacity: 0.9, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} />
              <span>{place.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={20} fill="var(--highlight)" color="var(--highlight)" />
              <span style={{ fontWeight: 600 }}>{place.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '-2rem auto 0', 
        padding: '0 1rem 4rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div className="detail-grid">
          {/* Main Info */}
          <div className="glass-card detail-card-main" style={{ padding: '3rem' }}>
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Sobre este lugar</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {place.description}
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Reseñas de la comunidad</h2>

              {/* Formulario de reseñas local */}
              <form onSubmit={handleAddReview} style={{
                background: 'var(--bg-secondary)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
                border: '1px solid var(--glass-border)'
              }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Deja tu reseña</h3>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    value={newReviewUser}
                    onChange={(e) => setNewReviewUser(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      minWidth: '200px',
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--glass-border)',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <select 
                    value={newReviewRating}
                    onChange={(e) => setNewReviewRating(Number(e.target.value))}
                    style={{
                      padding: '0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--glass-border)',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option value={5}>5 Estrellas</option>
                    <option value={4}>4 Estrellas</option>
                    <option value={3}>3 Estrellas</option>
                    <option value={2}>2 Estrellas</option>
                    <option value={1}>1 Estrella</option>
                  </select>
                </div>
                <textarea 
                  placeholder="¿Qué te pareció este lugar?" 
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  required
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--glass-border)',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    resize: 'vertical'
                  }}
                />
                <button type="submit" style={{
                  background: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  padding: '0.8rem 2rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Publicar reseña
                </button>
              </form>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {localReviews.map(review => (
                  <div key={review.id} style={{ 
                    padding: '1.5rem', 
                    borderRadius: 'var(--radius-md)', 
                    background: 'rgba(0,0,0,0.03)',
                    border: '1px solid var(--glass-border)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: 'var(--accent)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          <User size={20} />
                        </div>
                        <div>
                          <p style={{ fontWeight: 600 }}>{review.user}</p>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{review.date}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        <Star size={14} fill="var(--highlight)" color="var(--highlight)" />
                        <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{review.rating}</span>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Ubicación</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {place.address}
              </p>
              
              <div style={{ 
                width: '100%', 
                height: '250px', 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden', 
                marginBottom: '1.5rem',
                border: '1px solid var(--glass-border)'
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(place.address)}&output=embed`}
                ></iframe>
              </div>

              <a 
                href={place.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  width: '100%'
                }}
              >
                Ver en Google Maps <ExternalLink size={18} />
              </a>
            </div>

            <div className="glass-card" style={{ background: 'var(--accent)', color: 'white', padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Compartido por</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User size={24} />
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>{place.author}</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Guía local certificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceDetail;
