'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect window size for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Auto-close menu if resizing to desktop
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Desktop Navigation
  if (!isMobile) {
    return (
      <nav className="navbar">
        <Link href="/" className="nav-logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          🌾 Krishi Sahayak
        </Link>
        <div className="nav-links">
          <Link href="/report" className="nav-link">Report Issue</Link>
          <Link href="/dashboard" className="nav-link">Officer Dashboard</Link>
          <Link href="/guides" className="nav-link" style={{ fontWeight: 'bold' }}>Farming Guides</Link>
          <Link href="/tools" className="nav-link" style={{ fontWeight: 'bold' }}>Farming Tools</Link>
          <Link href="/insecticides" className="nav-link" style={{ fontWeight: 'bold' }}>Crop Protection</Link>
          <Link href="/fertilizers" className="nav-link" style={{ fontWeight: 'bold' }}>Fertilizers</Link>
          <Link href="/soil-testing" className="nav-link" style={{ fontWeight: 'bold' }}>Soil & Irrigation</Link>
          <Link href="/login" className="nav-link" style={{ fontWeight: 'bold' }}>Login / Register</Link>
        </div>
      </nav>
    );
  }

  // Mobile Navigation
  return (
    <nav className="navbar-mobile" style={{ position: 'relative', background: 'white', padding: '1rem', boxShadow: 'var(--shadow-sm)', zIndex: 50 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        
        {/* Left: Hamburger Icon */}
        <button onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.8rem', color: 'var(--primary-color)', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Center: Logo */}
        <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)', textDecoration: 'none', textAlign: 'center', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          🌾 Krishi Sahayak
        </Link>

        {/* Right: Login / Register */}
        <Link href="/login" style={{ fontWeight: 'bold', color: 'white', backgroundColor: 'var(--primary-color)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Login
        </Link>
      </div>

      {/* Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', width: '100%', borderTop: '1px solid #eee', marginTop: '1rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1.5rem', alignItems: 'flex-start', background: '#fafafa', borderRadius: '12px' }}>
              <Link onClick={toggleMenu} href="/report" className="nav-link">Report Issue</Link>
              <Link onClick={toggleMenu} href="/dashboard" className="nav-link">Officer Dashboard</Link>
              <Link onClick={toggleMenu} href="/guides" className="nav-link" style={{ fontWeight: 'bold' }}>Farming Guides</Link>
              <Link onClick={toggleMenu} href="/tools" className="nav-link" style={{ fontWeight: 'bold' }}>Farming Tools</Link>
              <Link onClick={toggleMenu} href="/insecticides" className="nav-link" style={{ fontWeight: 'bold' }}>Crop Protection</Link>
              <Link onClick={toggleMenu} href="/fertilizers" className="nav-link" style={{ fontWeight: 'bold' }}>Fertilizers</Link>
              <Link onClick={toggleMenu} href="/soil-testing" className="nav-link" style={{ fontWeight: 'bold' }}>Soil & Irrigation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
