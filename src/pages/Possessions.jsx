import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import '../css/possessions.css';

export default function Possessions() {
    const strategies = [
        {
            title: "Cultural Repatriation",
            icon: "fa-landmark",
            desc: "The systematic recovery of Yoruba artifacts, artworks, and historical records held in foreign museums and private collections.",
            points: ["Benin Bronzes recovery", "Manuscript archives", "Spiritual artifacts"]
        },
        {
            title: "Resource Sovereignty",
            icon: "fa-gem",
            desc: "Asserting full control over the natural resources, mineral deposits, and agricultural lands within the Yoruba territory.",
            points: ["Mineral rights", "Agricultural control", "Water resources"]
        },
        {
            title: "Knowledge Systems",
            icon: "fa-brain",
            desc: "Revitalizing and institutionalizing indigenous Yoruba knowledge systems in science, medicine, philosophy, and governance.",
            points: ["Traditional medicine", "Ifa corpus study", "Indigenous technology"]
        }
    ];

    return (
        <>
            <Navbar />
            <PageHeader title="Possess Our Possessions" path="/possessions" name="Possessions" />
            
            <div className="possessions-page container-xxl py-5">
                <div className="container">
                    <div className="possessions-intro">
                        <h1>Reclaiming Our Heritage & Future</h1>
                        <p className="lead">
                            "Possess Our Possessions" is the strategic mandate of the Democratic Republic of the Yoruba to peacefully and legally reclaim every aspect of our national identity, wealth, and sovereignty that has been appropriated or suppressed.
                        </p>
                    </div>
                    
                    <div className="row g-4">
                        {strategies.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="possession-card">
                                    <div className="possession-icon">
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <h3 className="possession-title">{item.title}</h3>
                                    <p className="possession-desc">{item.desc}</p>
                                    <ul className="possession-list">
                                        {item.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="declaration-box">
                        <h2>Our Solemn Vow</h2>
                        <p>
                            We shall not rest until every grain of sand, every drop of water, and every piece of history that belongs to the Yoruba people is fully restored to its rightful custodians—the citizens of the D.R.Y.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
}
