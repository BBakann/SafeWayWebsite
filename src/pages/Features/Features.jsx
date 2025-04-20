import './Features.css';

const Features = () => {
  return (
    <div className="features-page">
      <section className="features-hero">
        <h1>Özelliklerimiz</h1>
        <p>SafeWay AI'nin sunduğu yenilikçi özellikler ile tanışın</p>
      </section>

      <section className="features-list">
        <div className="feature-item">
          <div className="feature-content">
            <h2>Yorgunluk Tespit Sistemi</h2>
            <p>Gelişmiş AI teknolojimiz ile göz hareketlerinizi analiz ederek yorgunluk belirtilerini tespit eder ve sizi uyarır.</p>
            <ul>
              <li>Gerçek zamanlı göz takibi</li>
              <li>Sesli uyarı sistemi</li>
              <li>Titreşimli bildirimler</li>
              <li>Akıllı mola önerileri</li>
            </ul>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-content">
            <h2>Rota Optimizasyonu</h2>
            <p>En verimli rotayı belirleyin ve yolculuğunuzu güvenle planlayın.</p>
            <ul>
              <li>Akıllı rota önerileri</li>
              <li>Dinlenme noktası tavsiyeleri</li>
              <li>Trafik durumu bildirimleri</li>
              <li>Hava durumu entegrasyonu</li>
            </ul>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-content">
            <h2>Sürüş İstatistikleri</h2>
            <p>Detaylı sürüş verilerinizi analiz edin ve sürüş performansınızı iyileştirin.</p>
            <ul>
              <li>Yorgunluk seviyesi grafikleri</li>
              <li>Sürüş süresi analizleri</li>
              <li>Mola istatistikleri</li>
              <li>Performans raporları</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features; 