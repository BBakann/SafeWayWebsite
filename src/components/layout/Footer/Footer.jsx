import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SafeWay AI</h3>
          <p>Yapay zeka destekli sürüş güvenliği asistanı</p>
          <div className="social-links">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Hızlı Erişim</h4>
          <ul>
            <li><Link to="/features">Özellikler</Link></li>
            <li><Link to="/pricing">Fiyatlandırma</Link></li>
            <li><Link to="/about">Hakkımızda</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Özellikler</h4>
          <ul>
            <li><Link to="/features#drowsiness">Yorgunluk Tespiti</Link></li>
            <li><Link to="/features#route">Rota Planı</Link></li>
            <li><Link to="/features#stats">İstatistikler</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>İletişim</h4>
          <ul>
            <li>info@safeway.ai</li>
            <li>+90 XXX XXX XX XX</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} SafeWay AI. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 