import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import '../css/gallery.css';
import { getGalleryItems } from "../utils/galleryStorage";
// Keep default imports for fallback or initial state logic if needed, 
// though getGalleryItems handles defaults internally now.
import img1 from '../assets/carousel-1.jpg';

export default function Gallery() {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGallery = async () => {
            try {
                const items = await getGalleryItems();
                setGalleryItems(items);
            } catch (error) {
                console.error("Failed to load gallery items", error);
            } finally {
                setLoading(false);
            }
        };

        loadGallery();
    }, []);

    return (
        <>
            <Navbar />
            <PageHeader title="Media Gallery" path="/gallery" name="Gallery" />
            
            <div className="gallery-page container-xxl py-5">
                <div className="container">
                     <div className="gallery-intro">
                        <h1>Our Gallery</h1>
                        <p className="lead">
                            Visual stories from across the Democratic Republic of the Yoruba.
                        </p>
                    </div>
                    
                    {loading ? (
                        <div style={{textAlign: 'center', padding: '50px'}}>
                            <i className="fa fa-spinner fa-spin" style={{fontSize: '2rem', color: '#002147'}}></i>
                        </div>
                    ) : (
                        <div className="gallery-grid">
                            {galleryItems.map((item, index) => (
                                <div className="gallery-item" key={item.id || index}>
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = img1;
                                        }} 
                                    />
                                    <div className="gallery-caption">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
}
