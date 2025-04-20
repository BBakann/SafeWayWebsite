import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll olduğunda header'ın görünümünü değiştir
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Ana Sayfa', path: '/' },
    { title: 'Özellikler', path: '/features' },
    { title: 'Fiyatlandırma', path: '/pricing' },
    { title: 'Hakkımızda', path: '/about' }
  ];

  // Menü açıldığında body scroll'u engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <motion.img 
            src={logo} 
            alt="SafeWay AI Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span 
            className="logo-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SafeWay AI
          </motion.span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <motion.ul 
            className="nav-list"
            variants={{
              open: { transition: { staggerChildren: 0.1 } },
              closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
            }}
            initial="closed"
            animate="open"
          >
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.path} 
                className="nav-item"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 }
                }}
              >
                <Link 
                  to={item.path} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="header-actions">
          <motion.div 
            className="cta-button-wrapper"
            whileHover="hover"
            initial="initial"
            animate="initial"
          >
            <Link to="/trial" className="cta-button">
              <span className="cta-text">Ücretsiz Dene</span>
              <motion.span 
                className="cta-arrow"
                variants={{
                  initial: { x: 0 },
                  hover: { x: 5 }
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header; 