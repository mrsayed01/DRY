import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import heroImg from "../assets/facts.jpg";
import "../css/history.css";

export default function Education() {
  return (
    <>
      <Navbar />
      <PageHeader title="Educational Reform" path="/initiatives/education" name="Educational Reform" />
      <div className="initiative-detail container-xxl py-5">
        <div className="container">
          <div className="initiative-hero">
            <div className="initiative-hero-text">
              <span className="initiative-pill">Nationwide Priority</span>
              <h1>Educating the Next Generation of Yoruba Leaders</h1>
              <p>
                Education in the Democratic Republic of the Yoruba is designed to be free, inclusive, and rooted in
                Yoruba identity. From the first day in school, children are encouraged to see themselves as custodians
                of language, history, and innovation.
              </p>
            </div>
            <div className="initiative-hero-image">
              <img src={heroImg} alt="Students and learning in the D.R.Y" />
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Universal Access to Quality Basic Education</h3>
              <p>
                Every child in cities, towns, and riverine communities is entitled to safe classrooms, trained teachers,
                and learning materials that reflect Yoruba realities.
              </p>
              <ul>
                <li>Free and compulsory basic education across the Yoruba homeland.</li>
                <li>Focused investments in rural and underserved communities.</li>
                <li>School feeding and wellness programmes that support learning.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Curriculum Rooted in Culture and Future Skills</h3>
              <p>
                The D.R.Y curriculum blends science, technology, arts, and civic education with deep Yoruba history,
                language, and values.
              </p>
              <ul>
                <li>Teaching Yoruba language alongside international languages.</li>
                <li>Local history, governance, and ethics integrated into core subjects.</li>
                <li>Creative arts and cultural studies promoted from early years.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-section-grid">
            <div className="initiative-section-card">
              <h3>Skills, Vocations and Entrepreneurship</h3>
              <p>
                Technical and vocational centres prepare youth for trades, crafts, and emerging industries that power
                national development.
              </p>
              <ul>
                <li>Hands-on training in modern and traditional vocations.</li>
                <li>Partnerships with industries across the D.R.Y for apprenticeships.</li>
                <li>Support for young innovators to turn ideas into enterprises.</li>
              </ul>
            </div>
            <div className="initiative-section-card">
              <h3>Universities, Research and Global Partnerships</h3>
              <p>
                Universities and institutes in the D.R.Y are encouraged to drive research that directly benefits Yoruba
                communities and the wider African region.
              </p>
              <ul>
                <li>Research in medicine, agriculture, technology and governance.</li>
                <li>Exchange programmes with Yoruba diaspora scholars.</li>
                <li>Innovation hubs linked to national development priorities.</li>
              </ul>
            </div>
          </div>

          <div className="initiative-highlight-row">
            <div className="initiative-highlight">
              <span>Identity</span>
              <h4>Learning in the Spirit of Omoluabi</h4>
              <p>
                Character, respect, and community service are woven into every stage of learning, shaping responsible
                citizens who honour Yoruba values.
              </p>
            </div>
            <div className="initiative-highlight">
              <span>Future</span>
              <h4>Preparing for a Digital and Global World</h4>
              <p>
                Students gain digital literacy, critical thinking, and problem-solving skills needed to thrive while
                building the D.R.Y of tomorrow.
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
