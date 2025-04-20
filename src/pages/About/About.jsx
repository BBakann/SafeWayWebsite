import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Hakkımızda</h1>
        <p>Güvenli sürüş için yapay zeka çözümleri</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Misyonumuz</h2>
          <p>SafeWay AI olarak misyonumuz, yapay zeka teknolojisini kullanarak yollardaki güvenliği artırmak ve sürücülerin daha güvenli yolculuklar yapmasını sağlamaktır.</p>
        </div>

        <div className="about-section">
          <h2>Vizyonumuz</h2>
          <p>Trafik kazalarını en aza indirgemek ve sürücülerin yorgunluk kaynaklı risklerini ortadan kaldırmak için yenilikçi çözümler sunmaya devam edeceğiz.</p>
        </div>

        <div className="about-section">
          <h2>Teknolojimiz</h2>
          <p>En son yapay zeka ve makine öğrenimi teknolojilerini kullanarak, gerçek zamanlı yorgunluk tespiti ve sürüş güvenliği çözümleri geliştiriyoruz.</p>
        </div>

        <div className="team-section">
          <h2>Ekibimiz</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Yapay Zeka Ekibi</h3>
              <p>Deneyimli AI uzmanlarımız, sürekli olarak modellerimizi geliştiriyor.</p>
            </div>
            <div className="team-member">
              <h3>Mobil Geliştirme</h3>
              <p>Kullanıcı dostu ve güvenilir mobil uygulamalar geliştiriyoruz.</p>
            </div>
            <div className="team-member">
              <h3>Veri Bilimi</h3>
              <p>Verilerinizi güvenle analiz ediyor ve anlamlı içgörüler sunuyoruz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 