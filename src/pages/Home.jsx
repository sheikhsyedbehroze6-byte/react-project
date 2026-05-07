import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRight, Leaf, Shield, HeartHandshake, Sprout, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Falling Leaf Component
const FallingLeaf = ({ delay, left, duration, size, color }) => {
  return (
    <motion.div
      style={{ position: 'absolute', left: left, top: '-10%', zIndex: 1, opacity: 0.6 }}
      animate={{ 
        y: ['0vh', '110vh'], 
        rotate: [0, 200, -100, 360],
        x: [0, 50, -50, 20]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
    >
      <Leaf size={size} color={color} />
    </motion.div>
  );
};

// Growing Plant Component
const GrowingPlant = ({ delay, left, size, color, Icon }) => {
  return (
    <motion.div
      style={{ position: 'absolute', bottom: '-10px', left: left, zIndex: 1, originY: 1 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.9 }}
      transition={{ type: "spring", stiffness: 50, delay: delay, duration: 2 }}
    >
      <Icon size={size} color={color} strokeWidth={1.5} />
    </motion.div>
  );
};

export default function Home() {
  // Generate random leaves
  const leaves = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 7,
    size: 20 + Math.random() * 25,
    color: ['#a5d6a7', '#81c784', '#c8e6c9', '#4caf50'][Math.floor(Math.random() * 4)]
  }));

  return (
    <div>
      <section className="hero" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        height: '90vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'url("https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?w=1600&q=80") center/cover no-repeat'
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to right, rgba(26, 93, 26, 0.8), rgba(0,0,0,0.3))',
          zIndex: 1
        }}></div>

        {/* Falling Leaves Effect */}
        {leaves.map(leaf => (
          <FallingLeaf key={leaf.id} {...leaf} />
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center' }}>
          <div className="hero-content" style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '4rem' }}>
            <AnimatedSection delay={0.2} className="hero-text">
              <h1 style={{ color: '#fce043', fontSize: '4.5rem', textShadow: 'none' }}>Global Standards in Local Farming</h1>
              <p style={{ fontSize: '1.8rem', color: 'white', fontWeight: '500', marginBottom: '1.5rem' }}>Your Trusted Agricultural Partner in Srinagar.</p>
              <p style={{ fontSize: '1.2rem', color: '#e0e0e0', maxWidth: '600px', marginBottom: '2.5rem' }}>
                We bring world-class pesticides and fertilizers to the heart of Kashmir, ensuring your crops meet international quality standards.
              </p>
              <Link to="/products" className="cta-button" style={{ 
                padding: '1.2rem 2.5rem', 
                fontSize: '1.2rem', 
                backgroundColor: 'var(--secondary-color)',
                color: 'var(--primary-color)',
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(252, 224, 67, 0.3)'
              }}>
                Explore Our Range <ArrowRight size={24} />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6} className="hero-image-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <motion.div 
                style={{ 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  backdropFilter: 'blur(10px)', 
                  borderRadius: '30px', 
                  border: '1px solid rgba(255,255,255,0.2)' 
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="/shop.jpg" 
                  alt="M.A. Pesticides Shop" 
                  className="hero-image" 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1592982537447-6f23f0bf7123?w=800&q=80"; }} 
                  style={{ 
                    width: '450px', 
                    borderRadius: '20px', 
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)' 
                  }}
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container">
        <AnimatedSection className="section-header" delay={0.1}>
          <h2>Why Choose Us?</h2>
          <p>We provide scientifically proven solutions for all your crop problems.</p>
        </AnimatedSection>

        <div className="products-grid" style={{ marginBottom: '4rem' }}>
          <AnimatedSection delay={0.2} style={{ 
            position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '320px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
          }}>
            <motion.img 
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80" 
              alt="Quality Products"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))', zIndex: 1, pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', color: 'white', pointerEvents: 'none' }}>
              <Leaf size={40} color="#fce043" style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Quality Products</h3>
              <p style={{ color: '#e0e0e0', fontSize: '0.95rem' }}>100% genuine pesticides and fertilizers specifically suited for Kashmiri soil.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} style={{ 
            position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '320px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
          }}>
            <motion.img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" 
              alt="Disease Protection"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))', zIndex: 1, pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', color: 'white', pointerEvents: 'none' }}>
              <Shield size={40} color="#fce043" style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Disease Protection</h3>
              <p style={{ color: '#e0e0e0', fontSize: '0.95rem' }}>Expert guidance on preventing and curing common diseases like Apple Scab.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} style={{ 
            position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '320px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
          }}>
            <motion.img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" 
              alt="Local Expertise"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))', zIndex: 1, pointerEvents: 'none' }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', color: 'white', pointerEvents: 'none' }}>
              <HeartHandshake size={40} color="#fce043" style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Local Expertise</h3>
              <p style={{ color: '#e0e0e0', fontSize: '0.95rem' }}>Conveniently located near Lal Chowk. We understand local farming challenges.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
