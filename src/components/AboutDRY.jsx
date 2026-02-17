import React, { useRef, useState } from 'react';
import '../css/about.css';
import aboutVideo from '../assets/proclaimation.mp4'; // Using the video
import { useNavigate } from 'react-router-dom';

export default function AboutDRY({ showReadMore = false }) {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    return (
        <section className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-title-wrapper">
                            <span className="about-subtitle">Our Foundation</span>
                            <h2 className="about-heading">The Birth of a Sovereign Nation</h2>
                        </div>
                        
                        <div className="about-content">
                            <p>
                                The <strong>Democratic Republic of the Yoruba (D.R.Y)</strong> represents the fulfillment of a divine mandate 
                                and the ancestral dream of the Yoruba people. For the first time in history, a nation has emerged 
                                out of Africa peacefully, without conflict or bloodshed.
                            </p>
                            <p>
                                Guided by the vision of the <strong>Mother of the Indigenous Yoruba People (I.Y.P), 
                                Mama Modupe Onitiri-Abiola</strong>, we stand as a beacon of hope, prosperity, and 
                                restored heritage for the entire black race.
                            </p>
                            
                            <div className="milestones-wrapper">
                                <div className="milestone-item">
                                    <span className="milestone-date">November 20, 2022</span>
                                    <h5 className="milestone-title">Declaration of Independence</h5>
                                    <p className="small text-muted">The D.R.Y formally declared its independence to the world.</p>
                                </div>
                                <div className="milestone-item">
                                    <span className="milestone-date">April 12, 2024</span>
                                    <h5 className="milestone-title">Proclamation of Sovereignty</h5>
                                    <p className="small text-muted">Full sovereignty was proclaimed, marking the birth of the 55th nation in Africa.</p>
                                </div>
                            </div>

                            {showReadMore && (
                                <button onClick={() => navigate('/about')} className="btn btn-primary mt-4">
                                    Read More
                                </button>
                            )}
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="about-image-wrapper">
                            <div className="video-wrapper" onClick={handlePlayPause}>
                                <div className={`video-overlay ${isPlaying ? 'hidden' : ''}`}>
                                    <div className="play-button">
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <video 
                                    ref={videoRef}
                                    src={aboutVideo} 
                                    className="about-video" 
                                    poster="https://via.placeholder.com/600x400?text=Proclamation+of+Sovereignty"
                                    onEnded={handleVideoEnd}
                                    onPause={() => setIsPlaying(false)}
                                    onPlay={() => setIsPlaying(true)}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
