import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import digitalImg from "../assets/sovereignty-infographic.jpeg";
import "../css/history.css";

export default function DigitalEconomy() {
  return (
    <>
      <Navbar />
      <PageHeader title="Digital Economy" path="/initiatives/digital-economy" name="Digital Economy" />
      <div className="initiative-detail container-xxl py-5">
        <div className="container">
          <div className="initiative-hero">
            <div className="initiative-hero-text">
              <span className="initiative-pill">Innovation Agenda</span>
              <h1>Driving Innovation and Prosperity through Technology</h1>
              <p>
                The D.R.Y embraces digital tools to expand opportunity, improve governance and connect Yoruba people
                across regions and continents.
              </p>
            </div>
            <div className="initiative-hero-image">
              <img src={digitalImg} alt="Digital transformation vision of the D.R.Y" />
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Connectivity for Communities</h3>
              <p>
                Reliable internet access is a basic enabler for education, commerce and governance in the modern Yoruba
                nation.
              </p>
              <ul>
                <li>Investments in fibre, wireless networks and community hubs.</li>
                <li>Public access points for students and entrepreneurs.</li>
                <li>Coverage plans that reach rural and riverine settlements.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>E-Government and Citizen Portals</h3>
              <p>
                Government services are moving online to make processes faster, more transparent and easier to access.
              </p>
              <ul>
                <li>Digital applications and payments for key public services.</li>
                <li>Open information platforms that share policies and data.</li>
                <li>Secure digital identity systems designed for D.R.Y citizens.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Startups and Creative Technology</h3>
              <p>
                A vibrant innovation ecosystem nurtures Yoruba talent in fintech, agritech, healthtech and the creative
                industries.
              </p>
              <ul>
                <li>Incubation centres and innovation labs in key cities.</li>
                <li>Partnerships between universities, private sector and government.</li>
                <li>Support for digital products that tell Yoruba stories to the world.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Digital Skills for the Future of Work</h3>
              <p>
                Training programmes ensure that citizens can participate fully in the digital economy while serving the
                Yoruba nation.
              </p>
              <ul>
                <li>Courses in coding, design, data and cybersecurity.</li>
                <li>Digital literacy programmes in schools and community centres.</li>
                <li>Special focus on empowering women and youth in tech careers.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-highlight-row">
            <div className="initiative-highlight">
              <span>Inclusion</span>
              <h4>No Yoruba Community Left Offline</h4>
              <p>
                Digital projects are planned so that rural communities, elders and people with disabilities can access
                services without barriers.
              </p>
            </div>
            <div className="initiative-highlight">
              <span>Leadership</span>
              <h4>Positioning the D.R.Y in Africa&apos;s Digital Future</h4>
              <p>
                With a young, creative population, the Yoruba nation aims to be a recognised leader in responsible and
                people-centred innovation.
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
