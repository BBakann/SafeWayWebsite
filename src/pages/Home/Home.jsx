import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  // Animasyon varyantları
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Güvenli Sürüşün <span>Akıllı</span> Asistanı
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Yapay zeka destekli sürüş güvenliği teknolojimiz ile yolculuklarınızı
            güvenle tamamlayın.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/register" className="cta-button primary">
              Ücretsiz Deneyin
            </Link>
            <Link to="/features" className="cta-button secondary">
              Özellikleri Keşfedin
            </Link>
          </motion.div>
          <motion.div 
            className="hero-stats"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="stat-item" variants={fadeInUp}>
              <span className="stat-number">-</span>
              <span className="stat-label">Aktif Kullanıcı</span>
            </motion.div>
            <motion.div className="stat-item" variants={fadeInUp}>
              <span className="stat-number">-</span>
              <span className="stat-label">Memnuniyet</span>
            </motion.div>
            <motion.div className="stat-item" variants={fadeInUp}>
              <span className="stat-number">24/7</span>
              <span className="stat-label">Destek</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Preview Section */}
      <motion.section 
        className="features-preview"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <h2>Neler Sunuyoruz?</h2>
          <p>Sürüş güvenliğiniz için geliştirdiğimiz akıllı özellikler</p>
        </motion.div>
        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              icon: '👁️',
              title: 'Yorgunluk Analizi',
              description: 'Göz takibi ile gerçek zamanlı yorgunluk tespiti ve uyarı sistemi'
            },
            {
              icon: '🗺️',
              title: 'Rota Optimizasyonu',
              description: 'En güvenli ve verimli rotayı AI teknolojimizle belirleyin'
            },
            {
              icon: '📊',
              title: 'Sürüş İstatistikleri',
              description: 'Detaylı sürüş analizi ve kişiselleştirilmiş öneriler'
            },
            {
              icon: '🤖',
              title: 'AI Asistan',
              description: 'Sesli komutlar ile etkileşimli sürüş deneyimi'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="how-it-works"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <h2>Nasıl Çalışır?</h2>
          <p>Üç basit adımda güvenli sürüşe başlayın</p>
        </motion.div>
        <motion.div 
          className="steps-container"
          variants={staggerContainer}
        >
          {[
            {
              number: 1,
              title: "Uygulamayı İndirin",
              description: "iOS veya Android cihazınıza SafeWay AI uygulamasını indirin"
            },
            {
              number: 2,
              title: "Hesap Oluşturun",
              description: "Hızlı kayıt ile hemen kullanmaya başlayın"
            },
            {
              number: 3,
              title: "Yola Çıkın",
              description: "AI asistanınız ile güvenle seyahat edin"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="step"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Safety Stats Section */}
      <motion.section 
        className="safety-stats"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="stats-content">
          <motion.h2 variants={fadeInUp}>Hedeflerimiz</motion.h2>
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
          >
            {[
              {
                value: '-',
                description: 'Kaza Riskinde Azalma Hedefi'
              },
              {
                value: '-',
                description: 'Planlanan Güvenli Yolculuk'
              },
              {
                value: '-',
                description: 'Önlenecek Riskli Durum'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-box"
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-description">{stat.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="cta-content"
          variants={fadeInUp}
        >
          <h2>Güvenli Yolculuğa Hazır mısınız?</h2>
          <p>Yakında sizlerle! Gelişmelerden haberdar olmak için takipte kalın.</p>
          <Link to="/register" className="cta-button primary">
            Bize Katılın
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home; 