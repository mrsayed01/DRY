import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import '../css/history.css';

export default function Terms() {
  return (
    <>
      <Navbar />
      <PageHeader title="Terms of Use" path="/terms" name="Terms of Use" />
      <div className="history-page container-xxl py-5">
        <div className="container">
          <div className="history-intro">
            <h1>Official Terms of Use</h1>
            <p className="lead">
              These Terms govern the use of the Democratic Republic of the Yoruba (D.R.Y) official website and services.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">1. Acceptance of Terms</h3>
                <div className="timeline-body">
                  <p>
                    By accessing or using our website, you agree to comply with these Terms and all applicable laws of the D.R.Y.
                    If you do not agree, please discontinue use immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">2. Permitted Use</h3>
                <div className="timeline-body">
                  <p>
                    The site is intended to inform citizens, residents, and partners about national programs, services, culture,
                    and governance. You may browse, reference, and share official pages with attribution.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">3. Prohibited Conduct</h3>
                <div className="timeline-body">
                  <p>
                    You must not misuse the site by attempting unauthorized access, scraping protected data, interfering with
                    service delivery, or distributing harmful content. Any unlawful activity will be prosecuted under D.R.Y law.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">4. Intellectual Property</h3>
                <div className="timeline-body">
                  <p>
                    Logos, emblems, media, and texts are the property of the D.R.Y. Non-commercial reuse is permitted with
                    clear attribution and without alteration. Commercial use requires written authorization.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">5. Accuracy and Updates</h3>
                <div className="timeline-body">
                  <p>
                    We strive to publish accurate information. Policies and content may be updated to reflect current governance.
                    Notices of material changes will be communicated via official channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">6. Contact and Feedback</h3>
                <div className="timeline-body">
                  <p>
                    For questions about these Terms, contact the Executive Office via the details published in the site footer.
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
