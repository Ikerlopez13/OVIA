import { motion } from 'framer-motion';

interface Props {
  onExplore: () => void;
}

const Hero: React.FC<Props> = ({ onExplore }) => {
  return (
    <section style={{
      minHeight: '90vh',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '120px 2rem 60px',
      background: '#000'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }} />
      
      {/* Dark Gradient Overlay for Readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
        zIndex: 2
      }} />

      {/* Decorative Blurred Shapes */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'var(--accent)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 2
      }} />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          textAlign: 'center',
          color: 'white',
          maxWidth: '1000px',
          zIndex: 3
        }}
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: '2px' }}
          animate={{ opacity: 1, letterSpacing: '5px' }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: '0.9rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            color: 'var(--highlight)',
            marginBottom: '1.5rem',
            display: 'block'
          }}
        >
          Explora la Autenticidad
        </motion.span>

        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
          fontWeight: 700, 
          marginBottom: '1.5rem',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          textShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          Descubre lo <span style={{ 
            color: 'transparent',
            WebkitTextStroke: '1px white',
            fontStyle: 'italic'
          }}>Inexplorado</span> <br/>
          Vive lo <span style={{ color: 'var(--highlight)' }}>Real</span>
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.3rem)', 
          marginBottom: '3rem',
          opacity: 0.9,
          fontWeight: 300,
          letterSpacing: '0.3px',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          Aléjate de las masas. OVIA te conecta con rincones secretos compartidos por una comunidad que valora la profundidad sobre el volumen.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <motion.button 
            onClick={onExplore}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(0, 128, 128, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'var(--accent)',
              color: 'white',
              padding: '1.2rem 3rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 10px 20px -5px rgba(0, 128, 128, 0.3)'
            }}
          >
            Empieza tu Viaje
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="glass" 
            style={{
              color: 'white',
              padding: '1.2rem 3rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1.1rem',
              fontWeight: 600,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            Ver Mapa Oculto
          </motion.button>
        </div>
      </motion.div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        onClick={onExplore}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.6,
          cursor: 'pointer'
        }}
      >
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'white' }}>Desliza</span>
        <div style={{ 
          width: '24px', 
          height: '40px', 
          borderRadius: '12px', 
          border: '2px solid white',
          position: 'relative'
        }}>
          <motion.div 
            animate={{ y: [4, 20, 4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '4px',
              height: '8px',
              background: 'white',
              borderRadius: '2px',
              position: 'absolute',
              left: 'calc(50% - 2px)',
              top: '4px'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
