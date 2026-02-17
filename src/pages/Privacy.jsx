import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import '../css/history.css';

export default function Privacy() {
  return (
    <>
      <Navbar />
      <PageHeader title="Privacy Policy" path="/privacy" name="Privacy Policy" />
      <div className="history-page container-xxl py-5">
        <div className="container">
          <div className="history-intro">
            <h1>Our Commitment to Your Privacy</h1>
            <p className="lead">
              This Policy explains how the Democratic Republic of the Yoruba (D.R.Y) handles personal information.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">1. Data We Collect</h3>
                <div className="timeline-body">
                  <p>
                    We collect minimal data required to deliver public services: contact details submitted via forms,
                    voluntary newsletter subscriptions, and anonymous analytics to improve the site experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">2. How We Use Data</h3>
                <div className="timeline-body">
                  <p>
                    Information is used to respond to enquiries, provide updates, and maintain secure access to resources.
                    We do not sell personal data. Use is compliant with D.R.Y legal frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">3. Data Sharing</h3>
                <div className="timeline-body">
                  <p>
                    We may share data with government departments solely to fulfill service requests or legal obligations.
                    External sharing occurs only with lawful basis and appropriate safeguards.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">4. Security</h3>
                <div className="timeline-body">
                  <p>
                    We employ technical and organizational measures to protect information, including access controls,
                    encryption in transit where applicable, and regular reviews of system integrity.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">5. Your Rights</h3>
                <div className="timeline-body">
                  <p>
                    Citizens may request access, correction, or deletion of their data. Contact details for such requests
                    are provided in the site footer and official communications.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">6. Updates</h3>
                <div className="timeline-body">
                  <p>
                    We may update this Policy to reflect governance or legal changes. The latest version is always published here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
