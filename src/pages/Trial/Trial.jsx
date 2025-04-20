import { motion } from 'framer-motion';
import { useState } from 'react';
import './Trial.css';

const Trial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    // Başarılı mesajı göster
    alert('Başvurunuz alındı! 1 haftalık ücretsiz deneme süreniz başlamıştır.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="trial-page">
      <motion.section 
        className="trial-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            1 Hafta Ücretsiz Deneyin
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hiçbir ödeme bilgisi olmadan hemen başlayın
          </motion.p>
        </div>
      </motion.section>

      <section className="trial-form-section">
        <motion.div 
          className="form-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="benefits-list">
            <h3>1 Haftalık Deneme Sürümü İle:</h3>
            <ul>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                ✓ Tüm premium özelliklere tam erişim
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                ✓ Sınırsız sürüş analizi
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                ✓ 7/24 teknik destek
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                ✓ Otomatik süre sonu bildirimi
              </motion.li>
            </ul>

            <div className="trial-info">
              <h4>Önemli Bilgiler:</h4>
              <ul>
                <li>• Deneme süresi: 7 gün</li>
                <li>• Kredi kartı gerekmiyor</li>
                <li>• Otomatik yenileme yok</li>
                <li>• İstediğiniz zaman iptal edebilirsiniz</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="trial-form">
            <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ornek@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="05XX XXX XX XX"
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="acceptTerms">
                Kullanım koşullarını ve gizlilik politikasını kabul ediyorum
              </label>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ücretsiz Denemeyi Başlat
            </motion.button>

            <p className="form-note">
              * Deneme süreniz başvurunuzun onaylanmasından sonra başlayacaktır.
            </p>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Trial; 