import React, { useState, useEffect } from 'react';
import '../css/landing.css';
import { useNavigate } from 'react-router-dom';

// Import slider images
import heroImg from '../assets/hero.jpg';
import carousel1 from '../assets/carousel-1.jpg';
import carousel2 from '../assets/carousel-2.jpg';
import carousel3 from '../assets/carousel-3.jpg';

const backgroundImages = [heroImg, carousel1, carousel2, carousel3];

export default function Landing() {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="landing">
            {/* Background Slider */}
            <div className="landing-background-slider">
                {backgroundImages.map((image, index) => (
                    <div 
                        key={index} 
                        className={`landing-slide ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>

            <div className="landing-overlay"></div>
            <div className="container landing-content">
                <div className="row">
                    <div className="col-lg-8 col-md-10">
                        <div className="official-badge">
                            <span className="line"></span>
                            <h4>OFFICIAL GOVERNMENT PORTAL</h4>
                        </div>
                        
                        <div className="hero-text">
                            <h1>Welcome to <br/><span className="text-accent">Democratic Republic of the Yoruba</span></h1>
                            <p className="lead">
                                This is the first time a nation will emerged out of Africa peacefully without conflict. 
                                This nation is known as Democratic Republic of the Yoruba, ( D.R.Y. ) 
                                Democratic Republic of the Yoruba is the handwork of God Almighty through the effort of our beloved mother, 
                                Modupeola Onitiri-Abiola (Chief Mrs) (MOA). This is good to hear and we all shout for joy to the Almighty God!
                            </p>
                            
                            <div className="hero-buttons">
                                <button onClick={() => navigate("/about")} type="button" className="btn btn-accent me-3">
                                    Join The Movement
                                </button>
                                <button onClick={() => navigate("/history")} type="button" className="btn btn-outline-light">
                                    Read Our History
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
