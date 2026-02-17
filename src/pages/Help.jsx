import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import '../css/history.css';

export default function Help() {
  return (
    <>
      <Navbar />
      <PageHeader title="Help & Support" path="/help" name="Help" />
      <div className="history-page container-xxl py-5">
        <div className="container">
          <div className="history-intro">
            <h1>Get Help Using the D.R.Y Website</h1>
            <p className="lead">
              Guidance for citizens and visitors to access information, services, and cultural resources.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">1. Finding Information</h3>
                <div className="timeline-body">
                  <p>
                    Use the navigation bar and the Gallery to explore culture, landmarks, and national assets. 
                    The Admin portal is reserved for authorized officials.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">2. Accessibility</h3>
                <div className="timeline-body">
                  <p>
                    We aim for accessible content across devices. If you encounter issues, contact the Executive Office 
                    using details in the footer and describe the page and problem.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <h3 className="timeline-title">3. Submitting Feedback</h3>
                <div className="timeline-body">
                  <p>
                    Use the Contact page for feedback or enquiries about public services. For cultural contributions,
                    proposal details may be sent via official email.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <h3 className="timeline-title">4. Data and Privacy</h3>
                <div className="timeline-body">
                  <p>
                    Review our Terms, Privacy, and Cookies pages for how we handle information and your rights as a citizen.
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
