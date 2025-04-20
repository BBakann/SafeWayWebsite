import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Başlangıç',
      price: '-',
      period: 'ay',
      description: 'Temel özelliklerle sürüşe başlayın',
      features: [
        'Temel yorgunluk tespiti',
        'Basit rota planlaması',
        'Sınırlı istatistikler',
        'Email desteği'
      ],
      color: '#D4E7A5',
      gradientColor: 'rgba(212, 231, 165, 0.15)',
      recommended: false
    },
    {
      name: 'Premium',
      price: '-',
      period: 'ay',
      description: 'Tam kapsamlı güvenlik deneyimi',
      features: [
        'Gelişmiş yorgunluk analizi',
        'Detaylı rota optimizasyonu',
        'Tam istatistik raporları',
        '7/24 Öncelikli destek',
        'Reklamsız deneyim',
        'Çoklu cihaz desteği'
      ],
      color: '#C0DE7B',
      gradientColor: 'rgba(192, 222, 123, 0.15)',
      recommended: true
    },
    {
      name: 'Kurumsal',
      price: 'Özel',
      period: 'fiyat',
      description: 'Filonuz için özel çözümler',
      features: [
        'Filo yönetimi',
        'Özel API erişimi',
        'Özelleştirilebilir raporlar',
        'Öncelikli destek',
        'Özel eğitim desteği',
        'SLA garantisi'
      ],
      color: '#798425',
      gradientColor: 'rgba(121, 132, 37, 0.15)',
      recommended: false
    }
  ];

  return (
    <div className="pricing-page">
      <motion.section 
        className="pricing-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Fiyatlandırma
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            İhtiyacınıza uygun planı seçin
          </motion.p>
        </div>
      </motion.section>

      <section className="pricing-plans-container">
        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`plan-card ${plan.recommended ? 'recommended' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ '--plan-color': plan.color }}
            >
              {plan.recommended && (
                <div className="recommended-badge">Önerilen</div>
              )}
              <div className="plan-header">
                <h2>{plan.name}</h2>
                <div className="price-container">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <motion.ul 
                className="plan-features"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.1 * idx }
                      }
                    }}
                  >
                    <span className="feature-check">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/trial" className="plan-cta-button">
                  Ücretsiz Dene
                  <span className="arrow-icon">→</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="pricing-faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="faq-content">
          <h2>Sıkça Sorulan Sorular</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Deneme süresi var mı?</h3>
              <p>Evet, tüm planlarımızda 14 günlük ücretsiz deneme süresi sunuyoruz.</p>
            </div>
            <div className="faq-item">
              <h3>İstediğim zaman iptal edebilir miyim?</h3>
              <p>Evet, aboneliğinizi dilediğiniz zaman kolayca iptal edebilirsiniz.</p>
            </div>
            <div className="faq-item">
              <h3>Ek ücret var mı?</h3>
              <p>Hayır, seçtiğiniz plan dışında herhangi bir ek ücret bulunmamaktadır.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Pricing; 