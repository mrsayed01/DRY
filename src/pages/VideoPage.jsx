import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import { getVideoFile } from '../utils/videoStorage';
import '../css/gallery.css';
import '../css/mediaPage.css';
import img1 from '../assets/carousel-1.jpg';
import img2 from '../assets/carousel-2.jpg';
import img3 from '../assets/carousel-3.jpg';

// Default Data (Fallback)
const DEFAULT_FEATURED = {
    title: "The Rise of D.R.Y: A Journey of Sovereignty",
    desc: "An exclusive documentary covering the historic events that led to the formation of the Democratic Republic of the Yoruba. Witness the passion, the struggle, and the victory.",
    thumbnail: img3,
    duration: "45:00",
    views: "1.5M views"
};

const DEFAULT_VIDEOS = [
    { id: 1, title: "Independence Day Parade 2025", thumbnail: img1, duration: "10:30", views: "1.2k views", date: "Oct 12, 2025", category: "Event" },
    { id: 2, title: "Cultural Dance Performance", thumbnail: img2, duration: "5:45", views: "850 views", date: "Sep 25, 2025", category: "Culture" },
    { id: 3, title: "Development Projects Update", thumbnail: img3, duration: "8:20", views: "2.5k views", date: "Aug 10, 2025", category: "News" },
    { id: 4, title: "Interview with Elders", thumbnail: img1, duration: "25:00", views: "3.1k views", date: "Jul 05, 2025", category: "History" },
    { id: 5, title: "Youth Sports Festival Highlights", thumbnail: img2, duration: "12:15", views: "900 views", date: "Jun 20, 2025", category: "Sports" },
    { id: 6, title: "Tourism Showcase: Hidden Gems", thumbnail: img3, duration: "4:50", views: "5.6k views", date: "May 15, 2025", category: "Travel" },
    { id: 7, title: "Tech Summit Lagos", thumbnail: img1, duration: "18:00", views: "1.1k views", date: "Apr 22, 2025", category: "Technology" },
    { id: 8, title: "Agricultural Revolution", thumbnail: img2, duration: "14:30", views: "2.8k views", date: "Mar 10, 2025", category: "Economy" },
];

export default function VideoPage() {
    const [featuredVideo, setFeaturedVideo] = useState(DEFAULT_FEATURED);
    const [videos, setVideos] = useState(DEFAULT_VIDEOS);
    const [playingVideoId, setPlayingVideoId] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        // Load from LocalStorage
        const savedFeatured = localStorage.getItem('dry_featured_video');
        const savedVideos = localStorage.getItem('dry_videos');

        if (savedFeatured) {
            setFeaturedVideo(JSON.parse(savedFeatured));
        } else {
            // Initialize LocalStorage with default if empty
            localStorage.setItem('dry_featured_video', JSON.stringify(DEFAULT_FEATURED));
        }

        if (savedVideos) {
            setVideos(JSON.parse(savedVideos));
        } else {
             // Initialize LocalStorage with default if empty
            localStorage.setItem('dry_videos', JSON.stringify(DEFAULT_VIDEOS));
        }
    }, []);

    const handlePlayClick = async (video) => {
        // Reset previous
        setPlayingVideoId(video.id);
        setVideoUrl(null);

        if (video.hasLocalVideo) {
            // Load from IndexedDB
            try {
                const blob = await getVideoFile(video.id);
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    setVideoUrl(url);
                } else {
                    console.error("Video file not found in DB");
                    // Fallback or error handling
                }
            } catch (err) {
                console.error("Error loading video", err);
            }
        } else {
            // Use existing source (URL or Base64)
            setVideoUrl(video.videoSource || video.thumbnail); // Fallback to thumbnail if no source, though likely won't play
        }
    };

    return (
        <div className="media-page-body">
            <Navbar />
            <PageHeader title="Video Gallery" path="/video" name="Video" />
            
            {/* Cinematic Hero Header */}
            <div className="media-hero" style={{backgroundImage: `url(${img3})`}}>
                <div className="container media-hero-content">
                    <h1>Visual Odyssey</h1>
                    <p>Experience the culture, progress, and stories of our nation in high definition.</p>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    
                    {/* Trending / Featured Video */}
                    <div className="trending-video-container wow zoomIn" data-wow-delay="0.1s">
                        <img src={featuredVideo.thumbnail} alt="Featured" style={{width: '100%', height: '500px', objectFit: 'cover'}} />
                        <div className="play-overlay">
                             <div className="play-circle" style={{width: '100px', height: '100px', fontSize: '2.5rem'}}>
                                <i className="fa fa-play"></i>
                            </div>
                        </div>
                        <div className="trending-overlay">
                            <span className="badge bg-danger mb-3 px-3 py-2">TRENDING NOW</span>
                            <h2 className="text-white fw-bold display-5 mb-2">{featuredVideo.title}</h2>
                            <p className="text-white opacity-75 lead mb-3 d-none d-md-block">{featuredVideo.desc}</p>
                            <div className="d-flex align-items-center text-white small">
                                <span className="me-3"><i className="far fa-clock me-2"></i>{featuredVideo.duration}</span>
                                <span><i className="far fa-eye me-2"></i>{featuredVideo.views}</span>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-end mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        <div>
                            <h3 className="fw-bold mb-1">Latest Uploads</h3>
                            <p className="text-muted mb-0">Fresh content from across the nation</p>
                        </div>
                        <button className="btn btn-outline-primary rounded-pill px-4">View All</button>
                    </div>
                    
                    {/* Video Grid */}
                    <div className="row g-4">
                        {videos.map((video, index) => (
                            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay={`${0.1 * index}s`} key={index}>
                                <div className="cinematic-card" onClick={() => handlePlayClick(video)}>
                                    <div className="thumbnail-wrapper">
                                        {playingVideoId === video.id && videoUrl ? (
                                            <video 
                                                src={videoUrl}
                                                controls 
                                                autoPlay 
                                                className="inline-video-player"
                                                style={{width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', top: 0, left: 0, background: 'black'}}
                                            />
                                        ) : (
                                            <>
                                                <img src={video.thumbnail} alt={video.title} onError={(e) => {e.target.onerror = null; e.target.src = img1}} />
                                                <div className="play-overlay">
                                                    <div className="play-circle">
                                                        <i className="fa fa-play"></i>
                                                    </div>
                                                </div>
                                                <span className="position-absolute bottom-0 end-0 bg-dark text-white px-2 py-1 m-2 rounded small" style={{fontSize: '0.75rem', opacity: '0.9'}}>
                                                    {video.duration}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <div className="video-info">
                                        <div className="video-meta">
                                            <span className="text-primary fw-bold">{video.category}</span>
                                            <span>{video.views}</span>
                                        </div>
                                        <h5 className="video-title">{video.title}</h5>
                                        <div className="mt-auto pt-2 d-flex justify-content-between align-items-center">
                                            <small className="text-muted">{video.date}</small>
                                            <i className="fa fa-ellipsis-v text-muted"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </div>
    );
}
