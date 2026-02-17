import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import '../css/history.css';

export default function History() {
    return (
        <>
            <Navbar />
            <PageHeader title="History of D.R.Y" path="/history" name="History" />
            
            <div className="history-page container-xxl py-5">
                <div className="container">
                    <div className="history-intro">
                        <h1>Our Rich History</h1>
                        <p className="lead">
                            Tracing the lineage and heritage of the Yoruba Nation from ancient times to our sovereign present.
                        </p>
                    </div>

                    <div className="timeline">
                        {/* Event 1 */}
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <span className="timeline-date">Ancient Era</span>
                                <h3 className="timeline-title">The Cradle of Civilization</h3>
                                <div className="timeline-body">
                                    <p>
                                        The Yoruba people have a rich history dating back thousands of years, with Ile-Ife regarded 
                                        as the cradle of existence. The Oyo Empire later emerged as one of the most politically 
                                        important states in West Africa.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="timeline-item right">
                            <div className="timeline-content">
                                <span className="timeline-date">November 20, 2022</span>
                                <h3 className="timeline-title">Declaration of Independence</h3>
                                <div className="timeline-body">
                                    <p>
                                        The Democratic Republic of the Yoruba (D.R.Y) formally declared its independence, 
                                        marking the beginning of a peaceful transition to sovereignty.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="timeline-item left">
                            <div className="timeline-content">
                                <span className="timeline-date">April 12, 2024</span>
                                <h3 className="timeline-title">Proclamation of Sovereignty</h3>
                                <div className="timeline-body">
                                    <p>
                                        Sovereignty was officially proclaimed by Mama Modupe Onitiri-Abiola (Chief Mrs), 
                                        the Mother of the Indigenous Yoruba People. On this same day, His Excellency 
                                        Mobolaji Olawale Akinola Omokore was sworn in as the Head of Provisional Government.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Event 4 */}
                        <div className="timeline-item right">
                            <div className="timeline-content">
                                <span className="timeline-date">Present Day</span>
                                <h3 className="timeline-title">Building the Nation</h3>
                                <div className="timeline-body">
                                    <p>
                                        Today, the D.R.Y stands as the 55th nation in Africa, recognized for its peaceful 
                                        emergence and dedication to the prosperity of the Indigenous Yoruba People.
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
