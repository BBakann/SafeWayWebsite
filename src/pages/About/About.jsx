import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const stats = [
    { number: '-', label: 'Aktif Kullanıcı' },
    { number: '-', label: 'Güvenli Yolculuk' },
    { number: '24/7', label: 'Destek' },
    { number: '-', label: 'Memnuniyet' }
  ];

  const values = [
    {
      icon: '🛡️',
      title: 'Güvenlik',
      description: 'Sürücü güvenliği bizim için her şeyden önce gelir.'
    },
    {
      icon: '🎯',
      title: 'İnovasyon',
      description: 'En son teknolojileri kullanarak sürekli gelişiyoruz.'
    },
    {
      icon: '🤝',
      title: 'Güvenilirlik',
      description: 'Kullanıcılarımıza her zaman güvenilir çözümler sunuyoruz.'
    }
  ];

  const team = [
    {
      role: 'AI Geliştirme',
      description: 'Yapay zeka modellerimizi geliştiren uzman ekibimiz',
      icon: '🤖'
    },
    {
      role: 'Mobil Geliştirme',
      description: 'Kullanıcı dostu uygulamalar geliştiren ekibimiz',
      icon: '📱'
    },
    {
      role: 'Müşteri Desteği',
      description: '7/24 yanınızda olan destek ekibimiz',
      icon: '💫'
    }
  ];

  return (
    <div className="about-page">
      <motion.section 
        className="about-hero"
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
            Hakkımızda
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Yapay zeka ile sürüş güvenliğini yeniden tanımlıyoruz
          </motion.p>
        </div>
      </motion.section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mission-section">
        <div className="section-container">
          <motion.div 
            className="mission-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mission-card">
              <h2>Misyonumuz</h2>
              <p>Yapay zeka teknolojimizle sürücülerin güvenliğini en üst düzeye çıkarmak ve trafik kazalarını minimize etmek için çalışıyoruz.</p>
            </div>
            <div className="mission-card">
              <h2>Vizyonumuz</h2>
              <p>Dünya çapında en güvenilir sürüş asistanı olmak ve trafik güvenliğinde devrim yaratmak için ilerliyoruz.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-container">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="section-container">
          <h2>Ekibimiz</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="team-icon">{member.icon}</span>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 