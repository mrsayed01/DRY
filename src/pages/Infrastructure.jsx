import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import infraImg from "../assets/blueprint-poster.jpg";
import "../css/history.css";

export default function Infrastructure() {
  return (
    <>
      <Navbar />
      <PageHeader title="Infrastructure Development" path="/initiatives/infrastructure" name="Infrastructure" />
      <div className="initiative-detail container-xxl py-5">
        <div className="container">
          <div className="initiative-hero">
            <div className="initiative-hero-text">
              <span className="initiative-pill">Strategic Pillar</span>
              <h1>Building the Foundations of a Modern Yoruba Nation</h1>
              <p>
                The Democratic Republic of the Yoruba is investing in roads, power, water, and logistics so that every
                town and village is connected to opportunity, safety, and dignified living.
              </p>
            </div>
            <div className="initiative-hero-image">
              <img src={infraImg} alt="Infrastructure blueprint of the D.R.Y" />
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Transport Corridors</h3>
              <p>
                Strategic road networks link urban centres, rural communities, markets, and border posts, making movement
                of people and goods safer and faster.
              </p>
              <ul>
                <li>All-weather roads connecting major Yoruba cities and border towns.</li>
                <li>Reinforced bridges and bypasses to ease congestion and support trade.</li>
                <li>Modern signage and road safety campaigns for citizens.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Reliable and Clean Power</h3>
              <p>
                A resilient energy mix powers homes, schools, and industries, supporting the growth of the D.R.Y economy.
              </p>
              <ul>
                <li>Gas, hydro and renewable projects tailored to regional strengths.</li>
                <li>Mini-grids for remote communities and critical public services.</li>
                <li>Energy efficiency standards for public infrastructure.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Livable Cities and Resilient Communities</h3>
              <p>
                Urban and rural planning in the D.R.Y respects Yoruba culture while introducing modern standards in
                housing, markets, and public spaces.
              </p>
              <ul>
                <li>Integrated town plans with water, sanitation and drainage.</li>
                <li>Safe markets and transport hubs for traders and commuters.</li>
                <li>Green spaces that honour traditional meeting grounds.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Ports, Airports and Logistics</h3>
              <p>
                Strategic assets connect the Yoruba nation with Africa and the wider world, strengthening trade and tourism.
              </p>
              <ul>
                <li>Seaports and dry ports positioned along key trade routes.</li>
                <li>Airports serving business, pilgrimage, and diaspora travel.</li>
                <li>Logistics corridors aligned with national resource routes.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-highlight-row">
            <div className="initiative-highlight">
              <span>Opportunity</span>
              <h4>Connecting Markets and People</h4>
              <p>
                Infrastructure projects are planned to open up new markets, reduce travel time, and bring services closer
                to Yoruba citizens everywhere.
              </p>
            </div>
            <div className="initiative-highlight">
              <span>Dignity</span>
              <h4>Infrastructure that Serves Generations</h4>
              <p>
                Quality materials and long-term planning ensure that today&apos;s investments remain a blessing to future
                generations of the D.R.Y.
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
