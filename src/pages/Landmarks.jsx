import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import '../css/landmarks.css';
import { getLandmarks, getLandmarkImage } from "../utils/landmarkStorage";

export default function Landmarks() {
    const [landmarksData, setLandmarksData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const loadLandmarks = async () => {
            const data = getLandmarks();
            const enriched = await Promise.all(data.map(async (item) => {
                if (item.hasLocalImage) {
                    const img = await getLandmarkImage(item.id);
                    return { ...item, img: img || item.img };
                }
                return item;
            }));
            setLandmarksData(enriched);
        };
        loadLandmarks();
    }, []);

    const openLightbox = (item) => {
        setSelectedImage(item);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <Navbar />
            <PageHeader title="Ancestral Landmarks" path="/landmarks" name="Landmarks" />
            
            <div className="landmarks-page container-xxl py-5">
                <div className="container">
                    <div className="landmarks-intro">
                        <h1>Indigenous Ancestral Landmarks</h1>
                        <p className="lead">
                            Journey through the sacred sites and historical monuments that stand as testaments to the greatness of the Yoruba civilization.
                        </p>
                    </div>
                    
                    <div className="row g-4">
                        {landmarksData.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="landmark-card">
                                    <div className="landmark-img-wrapper" onClick={() => openLightbox(item)}>
                                        <img src={item.img} alt={item.title} />
                                        <div className="landmark-overlay">
                                            <i className="fas fa-search-plus"></i>
                                        </div>
                                    </div>
                                    <div className="landmark-content">
                                        <h3 className="landmark-title">{item.title}</h3>
                                        <p className="landmark-location">
                                            <i className="fas fa-map-marker-alt"></i> {item.location}
                                        </p>
                                        <p className="landmark-desc">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="landmark-lightbox" onClick={closeLightbox}>
                    <div className="landmark-lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="landmark-lightbox-close" onClick={closeLightbox}>
                            <i className="fas fa-times"></i>
                        </button>
                        <img src={selectedImage.img} alt={selectedImage.title} />
                        <div className="landmark-lightbox-caption">
                            {selectedImage.title}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
            <BackToTop />
        </>
    );
}
