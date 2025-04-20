import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Güvenli Sürüş Asistanınız</h1>
          <p>Yapay zeka destekli sürüş güvenliği sistemi ile yolculuklarınızı güvenle tamamlayın.</p>
          <button className="cta-button">Hemen Başla</button>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="features-preview">
        <h2>Özelliklerimiz</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Yorgunluk Analizi</h3>
            <p>Gerçek zamanlı göz takibi ile yorgunluk tespiti</p>
          </div>
          <div className="feature-card">
            <h3>Rota Takibi</h3>
            <p>Akıllı rota optimizasyonu ve takip sistemi</p>
          </div>
          <div className="feature-card">
            <h3>Sürüş İstatistikleri</h3>
            <p>Detaylı sürüş analizi ve raporlama</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>Nasıl Çalışır?</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Uygulamayı İndir</h3>
            <p>App Store veya Google Play'den SafeWay AI'yi indirin</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Hesap Oluştur</h3>
            <p>Hızlı kayıt ile hesabınızı oluşturun</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Güvenli Sürüşe Başla</h3>
            <p>AI asistanınız ile güvenli sürüşün keyfini çıkarın</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 