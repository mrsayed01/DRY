import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import agriImg from "../assets/LandImg.png";
import "../css/history.css";

export default function Agriculture() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Agricultural Revitalization"
        path="/initiatives/agriculture"
        name="Agricultural Revitalization"
      />
      <div className="initiative-detail container-xxl py-5">
        <div className="container">
          <div className="initiative-hero">
            <div className="initiative-hero-text">
              <span className="initiative-pill">Backbone of the Economy</span>
              <h1>Feeding the Nation and Empowering Rural Communities</h1>
              <p>
                Agriculture remains the backbone of the D.R.Y economy, creating jobs, preserving land, and sustaining
                Yoruba families from generation to generation.
              </p>
            </div>
            <div className="initiative-hero-image">
              <img src={agriImg} alt="Agricultural landscape in the D.R.Y" />
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Modern Farming for Higher Yields</h3>
              <p>
                Farmers are supported with modern tools and knowledge while honouring traditional wisdom and respect
                for the land.
              </p>
              <ul>
                <li>Extension services that bring agronomists directly to communities.</li>
                <li>Improved seeds, irrigation and climate-smart practices.</li>
                <li>Mechanisation support for cooperatives and farmer groups.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Strong Value Chains from Farm to Market</h3>
              <p>
                The D.R.Y is building systems that ensure cocoa, cassava, grains, fruits and livestock reach consumers
                fresh and at fair prices.
              </p>
              <ul>
                <li>Processing centres for storage, drying and packaging.</li>
                <li>Rural roads that link farms to major markets and ports.</li>
                <li>Market information systems that protect farmers from exploitation.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Youth and Women in Agriculture</h3>
              <p>
                Agriculture is presented as a modern, profitable business that welcomes young people and women as
                innovators and owners.
              </p>
              <ul>
                <li>Training and incubation programmes for agro-entrepreneurs.</li>
                <li>Access to finance through cooperatives and community funds.</li>
                <li>Digital tools that connect farmers to buyers and inputs.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Food Security and Climate Resilience</h3>
              <p>
                By investing in local production and storage, the D.R.Y protects citizens from shocks, hunger and
                unstable imports.
              </p>
              <ul>
                <li>Strategic grain reserves and community storage facilities.</li>
                <li>Diversified crops suited to different Yoruba ecosystems.</li>
                <li>Soil and water conservation anchored in indigenous knowledge.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-highlight-row">
            <div className="initiative-highlight">
              <span>Prosperity</span>
              <h4>Rural Wealth for Yoruba Communities</h4>
              <p>
                Thriving farms mean thriving markets, schools and families, ensuring that rural communities share fully
                in the growth of the D.R.Y.
              </p>
            </div>
            <div className="initiative-highlight">
              <span>Stewardship</span>
              <h4>Protecting Land for Future Generations</h4>
              <p>
                Responsible agriculture preserves the land, rivers and forests that define Yoruba identity and spirituality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
