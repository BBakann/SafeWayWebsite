import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 'drowsiness',
      title: 'Yorgunluk Tespit Sistemi',
      description: 'Yapay zeka destekli göz takip teknolojisi ile sürüş güvenliğinizi artırın.',
      details: [
        'Gerçek zamanlı göz ve yüz takibi',
        'Sesli ve titreşimli uyarı sistemi',
        'Kişiselleştirilmiş yorgunluk analizi',
        'Gece sürüşü desteği'
      ],
      icon: '👁️',
      color: '#55A6C3'
    },
    {
      id: 'route',
      title: 'Akıllı Rota Optimizasyonu',
      description: 'En güvenli ve verimli rotayı AI teknolojimizle belirleyin.',
      details: [
        'Trafik ve hava durumu entegrasyonu',
        'Mola noktası önerileri',
        'Yakıt tasarrufu optimizasyonu',
        'Alternatif rota önerileri'
      ],
      icon: '🗺️',
      color: '#C0DE7B'
    },
    {
      id: 'stats',
      title: 'Detaylı Sürüş Analizi',
      description: 'Sürüş performansınızı ve güvenlik skorunuzu takip edin.',
      details: [
        'Kişisel sürüş skorlaması',
        'Haftalık/aylık raporlar',
        'Güvenlik önerileri',
        'Sürüş alışkanlığı analizi'
      ],
      icon: '📊',
      color: '#798425'
    },
    {
      id: 'ai',
      title: 'AI Asistan',
      description: 'Kişisel sürüş asistanınız ile güvenli yolculuklar.',
      details: [
        'Sesli komut sistemi',
        'Akıllı navigasyon desteği',
        'Kişiselleştirilmiş öneriler',
        'Acil durum desteği'
      ],
      icon: '🤖',
      color: '#3D89A6'
    }
  ];

  return (
    <div className="features-page">
      <motion.section 
        className="features-hero"
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
            Özelliklerimiz
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Yapay zeka destekli sürüş güvenliği çözümlerimiz ile tanışın
          </motion.p>
        </div>
      </motion.section>

      <section className="features-grid-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                '--feature-color': feature.color
              }}
            >
              <div className="feature-content">
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <h2>{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
                <motion.ul 
                  className="feature-details"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {feature.details.map((detail, idx) => (
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
                      {detail}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="features-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <h2>Güvenli Yolculuğa Hazır mısınız?</h2>
          <p>Hemen ücretsiz hesap oluşturun ve SafeWay AI'yi test edin.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ücretsiz Deneyin
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Features; 