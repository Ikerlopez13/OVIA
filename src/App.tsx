import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import PlaceCard from './components/PlaceCard';
import PlaceDetail from './components/PlaceDetail';
import AuthModal from './components/AuthModal';
import { mockPlaces, Place } from './data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const discoveryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedPlace) {
      window.scrollTo(0, 0);
    }
  }, [selectedPlace]);

  const handleExplore = () => {
    discoveryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAbout = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowAbout(true);
    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filteredPlaces = mockPlaces.filter(p => {
    return activeCategory === 'all' || p.category === activeCategory;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <AnimatePresence>
        {selectedPlace && (
          <PlaceDetail 
            place={selectedPlace} 
            onBack={() => setSelectedPlace(null)} 
          />
        )}
      </AnimatePresence>

      {!selectedPlace && (
        <>
          <Navbar 
            onAboutClick={handleAbout}
            onAuthClick={() => setIsAuthModalOpen(true)}
          />
          
          <AuthModal 
            isOpen={isAuthModalOpen} 
            onClose={() => setIsAuthModalOpen(false)} 
          />
          
          <main>
            <Hero onExplore={handleExplore} />
            
            <section ref={discoveryRef} style={{ padding: '6rem 1rem 4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}
                >
                  Rincones de Cataluña
                </motion.h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  Descubre la esencia de Sabadell, Barcelona y los Pirineos.
                </p>
              </div>

              <FilterBar 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />

              <div style={{ maxWidth: '1400px', margin: '2rem auto' }}>
                {filteredPlaces.length > 0 ? (
                  <div className="bento-grid" style={{ padding: '0' }}>
                    <AnimatePresence mode='popLayout'>
                      {filteredPlaces.map((place) => (
                        <PlaceCard 
                          key={place.id} 
                          place={place} 
                          onSelect={setSelectedPlace}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-secondary)' }}>
                    <p style={{ fontSize: '1.2rem' }}>No se han encontrado joyas que coincidan con tu búsqueda.</p>
                    <button 
                      onClick={() => setActiveCategory('all')}
                      style={{ color: 'var(--accent)', marginTop: '1rem', fontWeight: 600 }}
                    >
                      Limpiar filtros
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Call to Action Section */}
            <section style={{ 
              padding: '8rem 1.5rem', 
              background: 'var(--bg-secondary)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  ¿Has encontrado algo <span style={{ color: 'var(--accent)' }}>único</span>?
                </h2>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                  Comparte tus rincones secretos con el mundo y ayúdanos a promover un turismo sostenible y auténtico.
                </p>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  style={{
                    background: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                    padding: '1.2rem 3.5rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
                  }}
                >
                  Únete a la Comunidad
                </button>
              </motion.div>
              
              {/* Abstract decorative shapes */}
              <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'var(--accent)',
                opacity: 0.05,
                zIndex: 0
              }} />
            </section>

            {/* About Us Section */}
            {showAbout && (
              <section id="about" ref={aboutRef} style={{
                padding: '6rem 1.5rem',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'left',
              lineHeight: 1.8,
              fontSize: '1.1rem'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem', textAlign: 'center', color: 'var(--accent)' }}>Sobre nosotros</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  OVIA es una plataforma web colaborativa pensada para transformar la forma en la que las personas viajan y descubren nuevos destinos. Este proyecto nace de una idea clara: <span style={{ color: 'var(--accent)' }}>ofrecer una alternativa al turismo tradicional, apostando por experiencias más auténticas, sostenibles y alejadas de la masificación.</span>
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Hoy en día, muchos destinos turísticos están saturados debido a la repetición constante de recomendaciones y la influencia de las redes sociales y esto provoca que lugares únicos queden olvidados mientras otros se ven desbordados. Por ello, decidimos crear un espacio donde los usuarios puedan descubrir y compartir rincones menos conocidos, basándose en <span style={{ color: 'var(--accent)' }}>experiencias reales</span>.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  En OVIA creemos en el poder de la comunidad. Esta plataforma permite a cualquier persona explorar nuevos sitios, pero también participar activamente compartiendo sus propios descubrimientos, opiniones y recomendaciones. De esta forma, construimos entre todos una red de información útil, auténtica y en constante crecimiento.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  El objetivo no es solo mejorar la experiencia del viajero, sino también fomentar un turismo más sostenible. <span style={{ color: 'var(--accent)' }}>Queremos contribuir a una mejor distribución de los visitantes, dar visibilidad a pequeñas comunidades y promover una forma de viajar más consciente y respetuosa con el entorno.</span>
                </p>
                <p style={{ fontWeight: 600, fontSize: '1.2rem', textAlign: 'center', marginTop: '3rem', color: 'var(--text-primary)' }}>
                  En definitiva, OVIA es mucho más que una web de viajes: es una comunidad que conecta personas con lugares únicos, lejos de lo convencional.
                </p>
              </motion.div>
            </section>
            )}
          </main>

          <footer style={{ 
            padding: '4rem 1.5rem', 
            borderTop: '1px solid var(--glass-border)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            <div style={{ 
              marginBottom: '2rem', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <a href="#about" onClick={handleAbout}>Sobre nosotros</a>
              <a href="#">Guía de uso</a>
              <a href="#">Sostenibilidad</a>
              <a href="#">Contacto</a>
            </div>
            <p>© 2026 OVIA - Más allá de lo ordinario. Creado para el Proyecto 2.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
