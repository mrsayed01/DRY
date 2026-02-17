import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import healthImg from "../assets/hero.jpg";
import "../css/history.css";

export default function Healthcare() {
  return (
    <>
      <Navbar />
      <PageHeader title="Healthcare Access" path="/initiatives/healthcare" name="Healthcare Access" />
      <div className="initiative-detail container-xxl py-5">
        <div className="container">
          <div className="initiative-hero">
            <div className="initiative-hero-text">
              <span className="initiative-pill">Health for All</span>
              <h1>Delivering Quality Healthcare to Every Yoruba Citizen</h1>
              <p>
                The D.R.Y envisions a health system where prevention, timely care, and dignity are guaranteed for all,
                from bustling cities to the most remote villages in the Yoruba homeland.
              </p>
            </div>
            <div className="initiative-hero-image">
              <img src={healthImg} alt="Healthcare services in the D.R.Y" />
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Primary Healthcare Close to the People</h3>
              <p>
                Primary healthcare centres are strengthened as the first point of contact, focusing on prevention and early
                treatment.
              </p>
              <ul>
                <li>Maternal and child health services in every local council.</li>
                <li>Expanded immunisation and routine check-up programmes.</li>
                <li>Community health workers trained in local languages.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Specialist Hospitals and Teaching Facilities</h3>
              <p>
                Referral hospitals and teaching centres are equipped to deliver advanced care within the D.R.Y, reducing the
                need for medical journeys abroad.
              </p>
              <ul>
                <li>Diagnostic centres for imaging, laboratories and emergency care.</li>
                <li>Teaching partnerships between universities and hospitals.</li>
                <li>Regional centres of excellence in key medical specialties.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Supporting Our Health Workforce</h3>
              <p>
                The D.R.Y honours doctors, nurses, midwives and traditional healers as pillars of community wellbeing.
              </p>
              <ul>
                <li>Continuous professional development and fair working conditions.</li>
                <li>Incentives for serving rural and hard-to-reach communities.</li>
                <li>Ethical collaboration between modern and traditional medicine.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Public Health and Community Resilience</h3>
              <p>
                Healthy communities are built through prevention, clean environments, and strong public health systems.
              </p>
              <ul>
                <li>Disease surveillance and rapid response systems.</li>
                <li>Health education campaigns in Yoruba and other local languages.</li>
                <li>Clean water, sanitation and hygiene programmes across the nation.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-highlight-row">
            <div className="initiative-highlight">
              <span>Care</span>
              <h4>Dignity at Every Point of Care</h4>
              <p>
                Patients are treated with respect, confidentiality and compassion, reflecting the values of the Yoruba
                people.
              </p>
            </div>
            <div className="initiative-highlight">
              <span>Protection</span>
              <h4>Prepared for Future Health Challenges</h4>
              <p>
                Investments in prevention and research prepare the D.R.Y to face emerging diseases and protect generations
                to come.
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
