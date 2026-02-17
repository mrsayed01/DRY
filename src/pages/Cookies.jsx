import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import '../css/history.css';

export default function Cookies() {
  return (
    <>
      <Navbar />
      <PageHeader title="Cookies Notice" path="/cookies" name="Cookies" />
      <div className="history-page container-xxl py-5">
        <div className="container">
          <div className="history-intro">
            <h1>How We Use Cookies</h1>
            <p className="lead">
              This Notice explains what cookies are used on the Democratic Republic of the Yoruba (D.R.Y) website.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">1. What Are Cookies?</h3>
                <div className="timeline-body">
                  <p>
                    Cookies are small text files stored on your device to help the site function properly and improve your experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">2. Types of Cookies We Use</h3>
                <div className="timeline-body">
                  <p>
                    Essential cookies for site operation; preference cookies to remember settings; and limited analytics cookies
                    to understand usage patterns and improve content accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">3. Managing Cookies</h3>
                <div className="timeline-body">
                  <p>
                    You can control cookies through your browser settings. Disabling essential cookies may affect site functionality.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">4. Third-Party Cookies</h3>
                <div className="timeline-body">
                  <p>
                    Embedded media or links may set their own cookies. We recommend checking their policies for details.
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
