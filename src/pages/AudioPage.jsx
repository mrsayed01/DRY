import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import { getAudioFile } from '../utils/audioStorage';
import '../css/gallery.css'; 
import '../css/mediaPage.css';
import heroImg from '../assets/carousel-1.jpg';

export default function AudioPage() {
    const DEFAULT_FEATURED = { 
        title: "National Anthem of D.R.Y", 
        artist: "The Royal Choir & Orchestra", 
        duration: "3:45", 
        desc: "Experience the pride and glory of our nation through this symphonic masterpiece.",
        category: "Anthem"
    };

    const DEFAULT_AUDIOS = [
        { title: "Cultural Rhythms", artist: "Traditional Drummers", duration: "4:20", category: "Culture" },
        { title: "Presidential Address 2025", artist: "H.E. Mobolaji Olawale", duration: "15:00", category: "Speech" },
        { title: "Tales by Moonlight", artist: "Heritage Group", duration: "12:10", category: "Storytelling" },
        { title: "Unity Song", artist: "Youth Voice", duration: "3:30", category: "Music" },
        { title: "Market Day Sounds", artist: "Ambient", duration: "2:50", category: "Ambient" },
        { title: "The Talking Drum", artist: "Master Percussionists", duration: "6:15", category: "Instrumental" },
        { title: "Voices of Tomorrow", artist: "Children's Choir", duration: "3:45", category: "Music" },
        { title: "Elder's Wisdom", artist: "Council of Chiefs", duration: "18:20", category: "Speech" },
    ];

    const [featuredTrack, setFeaturedTrack] = useState(DEFAULT_FEATURED);
    const [audioTracks, setAudioTracks] = useState(DEFAULT_AUDIOS);
    const [playingAudio, setPlayingAudio] = useState(null);
    const [audioSrc, setAudioSrc] = useState(null);

    useEffect(() => {
        const savedFeatured = localStorage.getItem('dry_featured_audio');
        const savedAudios = localStorage.getItem('dry_audios');

        if (savedFeatured) setFeaturedTrack(JSON.parse(savedFeatured));
        if (savedAudios) setAudioTracks(JSON.parse(savedAudios));
    }, []);

    const handlePlay = async (audio) => {
        setPlayingAudio(audio);
        
        if (audio.hasLocalAudio) {
            try {
                const file = await getAudioFile(audio.id);
                if (file) {
                    const url = URL.createObjectURL(file);
                    setAudioSrc(url);
                } else {
                    alert("Audio file not found in storage.");
                }
            } catch (err) {
                console.error("Error loading audio:", err);
                alert("Error loading audio file.");
            }
        } else if (audio.audioSource) {
             setAudioSrc(audio.audioSource);
        } else {
            // For default/demo tracks that don't have real files, just show the player
            // In a real app, these would have URLs. 
            // We'll just alert for now or set a dummy source if we had one.
            alert("Demo audio track - no actual audio file linked.");
            setAudioSrc(null);
            setPlayingAudio(null);
        }
    };

    const closePlayer = () => {
        setPlayingAudio(null);
        setAudioSrc(null);
    };

    return (
        <div className="media-page-body">
            <Navbar />
            <PageHeader title="Audio Gallery" path="/audio" name="Audio" />
            
            {/* Immersive Hero Section */}
            <div className="media-hero" style={{backgroundImage: `url(${heroImg})`}}>
                <div className="container media-hero-content">
                    <h1>Sonic Heritage</h1>
                    <p>Listen to the heartbeat of the Democratic Republic of the Yoruba. <br/> A curated collection of anthems, speeches, and cultural rhythms.</p>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    
                    {/* Featured Track Section */}
                    <div className="featured-track-card wow fadeInUp" data-wow-delay="0.1s">
                        <div className="featured-content row align-items-center">
                            <div className="col-md-4 text-center mb-4 mb-md-0">
                                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '180px', height: '180px', color: '#2c3e50', fontSize: '4rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                                    <i className="fa fa-music"></i>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <span className="badge bg-warning text-dark mb-2 px-3 py-2 rounded-pill">FEATURED TRACK</span>
                                <h2 className="fw-bold mb-2">{featuredTrack.title}</h2>
                                <h4 className="fw-light mb-3 opacity-75">{featuredTrack.artist}</h4>
                                <p className="lead mb-4" style={{fontSize: '1.1rem'}}>{featuredTrack.desc}</p>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-light btn-lg rounded-pill px-5 me-4 fw-bold text-primary" onClick={() => handlePlay(featuredTrack)}>
                                        <i className="fa fa-play me-2"></i> Play Now
                                    </button>
                                    <div className="visualizer">
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-title text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '500px'}}>
                        <h2 className="display-6">Full Playlist</h2>
                        <div className="bg-primary mx-auto" style={{width: '80px', height: '4px', borderRadius: '2px'}}></div>
                    </div>
                    
                    {/* Playlist Layout */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {audioTracks.map((track, index) => (
                                <div className="audio-list-item wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                                    <div className="audio-index">{index + 1}</div>
                                    <div className="audio-index" style={{fontSize: '0.8rem', color: '#999'}}>
                                        {track.hasLocalAudio ? <i className="fa fa-database" title="Stored Locally"></i> : ''}
                                    </div>
                                    <div className="audio-icon-small">
                                        <i className="fa fa-music"></i>
                                    </div>
                                    <div className="audio-info">
                                        <h5 className="audio-title">{track.title}</h5>
                                        <p className="audio-artist">{track.artist} • <span className="text-primary">{track.category}</span></p>
                                    </div>
                                    <div className="audio-duration">{track.duration}</div>
                                    <button className="btn-play-mini" onClick={() => handlePlay(track)}>
                                        <i className="fa fa-play"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Audio Player Modal */}
            {playingAudio && audioSrc && (
                <div className="video-modal-overlay" onClick={closePlayer}>
                    <div className="video-modal-content audio-modal" onClick={e => e.stopPropagation()} style={{maxWidth: '500px', textAlign: 'center', padding: '2rem'}}>
                        <button className="modal-close-btn" onClick={closePlayer}>&times;</button>
                        <div style={{marginBottom: '1.5rem'}}>
                            <div style={{width: '120px', height: '120px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '3rem', color: '#64748b'}}>
                                <i className="fa fa-music"></i>
                            </div>
                            <h3>{playingAudio.title}</h3>
                            <p style={{color: '#64748b'}}>{playingAudio.artist}</p>
                        </div>
                        <audio controls autoPlay style={{width: '100%'}}>
                            <source src={audioSrc} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            )}

            <Footer />
            <BackToTop />
        </div>
    );
}
