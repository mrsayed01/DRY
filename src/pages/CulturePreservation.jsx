import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import cultureImg from "../assets/landmarks/olumo_rock.jpg";
import "../css/history.css";

export default function CulturePreservation() {
  return (
    <>
      <Navbar />
      <PageHeader title="Cultural Preservation" path="/initiatives/culture" name="Cultural Preservation" />
      <div className="initiative-detail container-xxl py-5">
        <div className="container">
          <div className="initiative-hero">
            <div className="initiative-hero-text">
              <span className="initiative-pill">Soul of the Nation</span>
              <h1>Honouring and Sharing Yoruba Heritage with the World</h1>
              <p>
                Culture is the soul of the D.R.Y. Policies protect language, arts, traditions and sacred spaces while
                inviting the world to experience Yoruba excellence with respect.
              </p>
            </div>
            <div className="initiative-hero-image">
              <img src={cultureImg} alt="Yoruba cultural landmark in the D.R.Y" />
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Yoruba as a Living Language</h3>
              <p>
                The D.R.Y promotes Yoruba language in schools, media and digital platforms so that children read, write
                and think confidently in their mother tongue.
              </p>
              <ul>
                <li>Curriculum that places Yoruba language at the centre of learning.</li>
                <li>Broadcast and digital content available in Yoruba for all ages.</li>
                <li>Support for writers, translators and language technologists.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Festivals, Landmarks and Creative Industries</h3>
              <p>
                From masquerades and drums to visual arts and film, Yoruba creativity is celebrated at home and abroad.
              </p>
              <ul>
                <li>National and regional festivals that showcase traditional performances.</li>
                <li>Museums and heritage sites curated with community involvement.</li>
                <li>Support for film, music and digital storytellers of Yoruba origin.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Global Yoruba Connections</h3>
              <p>
                Policies encourage collaboration with Yoruba communities across Africa and the diaspora, strengthening
                shared identity and economic links.
              </p>
              <ul>
                <li>Homecoming programmes and cultural exchange visits.</li>
                <li>Partnerships with Yoruba organisations in the diaspora.</li>
                <li>Heritage tourism routes linking sacred and historic sites.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Respecting Sacred Knowledge</h3>
              <p>
                Sacred sites, traditional institutions and indigenous knowledge are preserved with consent, dignity and
                strong legal protection.
              </p>
              <ul>
                <li>Consultation with elders, chiefs and custodians of tradition.</li>
                <li>Safeguards against exploitation of spiritual and cultural assets.</li>
                <li>Documentation that honours, not dilutes, Yoruba worldviews.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-highlight-row">
            <div className="initiative-highlight">
              <span>Heritage</span>
              <h4>Culture at the Heart of Nation Building</h4>
              <p>
                Every policy of the D.R.Y is shaped with Yoruba identity in mind, ensuring that development deepens rather
                than weakens who we are.
              </p>
            </div>
            <div className="initiative-highlight">
              <span>Legacy</span>
              <h4>Passing the Torch to Future Generations</h4>
              <p>
                Children of today learn songs, stories and values that connect them to ancestors and to a confident Yoruba
                future.
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
