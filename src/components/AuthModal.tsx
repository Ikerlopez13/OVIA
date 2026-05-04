import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Globe, Code } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--glass-bg)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                color: 'var(--text-secondary)',
                zIndex: 10
              }}
            >
              <X size={24} />
            </button>

            <div style={{ padding: '3rem 2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {isLogin ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {isLogin ? 'Accede a tus rincones favoritos' : 'Empieza a descubrir joyas ocultas'}
                </p>
              </div>

              {/* Tabs */}
              <div style={{
                display: 'flex',
                background: 'var(--bg-secondary)',
                padding: '0.3rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem'
              }}>
                <button
                  onClick={() => setIsLogin(true)}
                  style={{
                    flex: 1,
                    padding: '0.6rem',
                    borderRadius: 'calc(var(--radius-md) - 4px)',
                    background: isLogin ? 'var(--bg-primary)' : 'transparent',
                    color: isLogin ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: 600,
                    boxShadow: isLogin ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  style={{
                    flex: 1,
                    padding: '0.6rem',
                    borderRadius: 'calc(var(--radius-md) - 4px)',
                    background: !isLogin ? 'var(--bg-primary)' : 'transparent',
                    color: !isLogin ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: 600,
                    boxShadow: !isLogin ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  Registro
                </button>
              </div>

              {/* Form */}
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {!isLogin && (
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      style={inputStyle}
                    />
                  </div>
                )}
                
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    style={inputStyle}
                  />
                </div>

                <div style={{ position: 'relative' }}>
                  <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    style={inputStyle}
                  />
                </div>

                {isLogin && (
                  <div style={{ textAlign: 'right' }}>
                    <a href="#" style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500 }}>
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                )}

                <button style={{
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginTop: '0.5rem',
                  boxShadow: '0 10px 20px -5px hsla(180, 40%, 35%, 0.3)'
                }}>
                  {isLogin ? 'Entrar' : 'Registrarse'}
                </button>
              </form>

              {/* Divider */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem'
              }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
                <span>O continúa con</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
              </div>

              {/* Social Login */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={socialButtonStyle}>
                  <Globe size={20} />
                  <span>Google</span>
                </button>
                <button style={socialButtonStyle}>
                  <Code size={20} />
                  <span>GitHub</span>
                </button>
              </div>
            </div>

            <div style={{
              padding: '1.5rem',
              textAlign: 'center',
              borderTop: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.02)',
              fontSize: '0.9rem'
            }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  style={{ color: 'var(--accent)', fontWeight: 600 }}
                >
                  {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '1rem 1rem 1rem 3rem',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--glass-border)',
  background: 'var(--bg-primary)',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'var(--transition-smooth)',
};

const socialButtonStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  padding: '0.75rem',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--glass-border)',
  background: 'var(--bg-primary)',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
  fontWeight: 500,
};

export default AuthModal;
