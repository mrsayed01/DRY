import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../css/home.css';
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import BackToTop from "../components/BackToTop";
import AboutDRY from "../components/AboutDRY";
import States from "../components/States";
import SevenStates from "../components/SevenStates";
import Initiatives from "../components/Initiatives";
import NewsUpdates from "../components/NewsUpdates";
import LeaderSection from "../components/LeaderSection";
import ServicesSection from "../components/ServicesSection";
import heroImg from '../assets/hero.jpg';
import historyImg from '../assets/carousel-1.jpg';
import cultureImg from '../assets/carousel-2.jpg';
import { getNotices } from '../utils/noticeStorage';
import { useState, useEffect } from 'react';

export default function Home() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const loadNotices = async () => {
            const data = await getNotices();
            setNotices(data);
        };
        loadNotices();
    }, []);

    return (
        <>
            <Navbar />
            <Landing />
            <AboutDRY showReadMore={true} />
            <LeaderSection />
            
            {/* Official Notice Section - Restored Official Design with Image Layout */}
            {notices.length > 0 && (
                <div className="official-notice-container">
                    <div className="container official-notice-wrapper">
                        {/* Added Notice Heading */}
                        <div className="section-title text-center mb-5">
                            <h2>OFFICIAL NOTICES</h2>
                            <p className="text-muted">Important announcements and updates from the Democratic Republic of the Yoruba</p>
                        </div>

                        {notices.map(notice => (
                            <div key={notice.id} className="official-notice-card mb-4">
                                <div className={`notice-content-flex ${notice.image ? 'has-image' : ''}`}>
                                    {notice.image && (
                                        <div className="notice-image-col">
                                            <div className="notice-image-wrapper">
                                                <img src={notice.image} alt="Notice Attachment" />
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="notice-text-col">
                                        <div className="notice-header">
                                            <i className="fas fa-exclamation-circle notice-icon"></i>
                                            <h2 className="notice-title">
                                                {notice.title}
                                            </h2>
                                        </div>
                                        
                                        <div className="notice-body">
                                            <p style={{whiteSpace: 'pre-line'}}>
                                                {notice.content}
                                            </p>
                                        </div>
                                        
                                        <div className="notice-footer">
                                            Posted on: {new Date(notice.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Heritage & History Section */}
            <section className="heritage-section py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="heritage-card" style={{
                                background: `linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url(${historyImg}) center/cover`,
                                padding: '40px',
                                borderRadius: '8px',
                                color: 'white',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <h3 className="mb-3" style={{color: 'var(--accent-color)'}}>Our History</h3>
                                <p className="mb-4">From the ancient Oyo Empire to our modern declaration of sovereignty, trace the path of our great nation.</p>
                                <Link to="/history" className="btn btn-accent align-self-start">Explore History</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heritage-card" style={{
                                background: `linear-gradient(rgba(27,77,62,0.8), rgba(27,77,62,0.8)), url(${cultureImg}) center/cover`,
                                padding: '40px',
                                borderRadius: '8px',
                                color: 'white',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <h3 className="mb-3" style={{color: 'var(--accent-color)'}}>Our Culture</h3>
                                <p className="mb-4">Discover the vibrant traditions, art, language, and values that define the Indigenous Yoruba People.</p>
                                <Link to="/culture" className="btn btn-accent align-self-start">Experience Culture</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewsUpdates />
            
            {/* Gallery Preview Section */}
            <section className="gallery-preview py-5 bg-light">
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <h2>Media Gallery</h2>
                        <p className="text-muted">Witness the journey of our nation through images.</p>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div style={{height: '250px', background: `url(${heroImg}) center/cover`, borderRadius: '4px'}}></div>
                        </div>
                        <div className="col-md-4">
                            <div style={{height: '250px', background: `url(${historyImg}) center/cover`, borderRadius: '4px'}}></div>
                        </div>
                        <div className="col-md-4">
                            <div style={{height: '250px', background: `url(${cultureImg}) center/cover`, borderRadius: '4px'}}></div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
                    </div>
                </div>
            </section>

            <Initiatives />
            <States />
            <SevenStates />
            
            <ServicesSection />
            
            <Footer />
            <BackToTop />
        </>
    );
}
