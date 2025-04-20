import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SafeWay AI</h3>
          <p>Sürüş güvenliğiniz için yapay zeka destekli çözümler</p>
        </div>

        <div className="footer-section">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li><Link to="/features">Özellikler</Link></li>
            <li><Link to="/pricing">Fiyatlandırma</Link></li>
            <li><Link to="/about">Hakkımızda</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>İletişim</h4>
          <ul>
            <li>Email: info@safeway.ai</li>
            <li>Tel: +90 XXX XXX XX XX</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Bizi Takip Edin</h4>
          <div className="social-links">
            {/* Sosyal medya ikonları buraya eklenecek */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} SafeWay AI. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 