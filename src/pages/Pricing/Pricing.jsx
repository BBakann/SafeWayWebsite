import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Fiyatlandırma</h1>
        <p>İhtiyaçlarınıza uygun planı seçin</p>
      </section>

      <section className="pricing-plans">
        <div className="plan-card">
          <div className="plan-header">
            <h2>Ücretsiz</h2>
            <p className="price">₺0<span>/ay</span></p>
          </div>
          <ul className="plan-features">
            <li>Temel yorgunluk tespiti</li>
            <li>Basit rota planlaması</li>
            <li>Sınırlı istatistikler</li>
            <li>Reklam destekli</li>
          </ul>
          <button className="plan-button">Başla</button>
        </div>

        <div className="plan-card premium">
          <div className="plan-header">
            <h2>Premium</h2>
            <p className="price">₺49<span>/ay</span></p>
          </div>
          <ul className="plan-features">
            <li>Gelişmiş yorgunluk analizi</li>
            <li>Detaylı rota optimizasyonu</li>
            <li>Tam istatistik raporları</li>
            <li>7/24 Destek</li>
            <li>Reklamsız deneyim</li>
          </ul>
          <button className="plan-button">Hemen Başla</button>
        </div>

        <div className="plan-card">
          <div className="plan-header">
            <h2>Kurumsal</h2>
            <p className="price">Özel<span>/fiyat</span></p>
          </div>
          <ul className="plan-features">
            <li>Filo yönetimi</li>
            <li>Özel API erişimi</li>
            <li>Özelleştirilebilir raporlar</li>
            <li>Öncelikli destek</li>
            <li>Özel eğitim desteği</li>
          </ul>
          <button className="plan-button">İletişime Geç</button>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 