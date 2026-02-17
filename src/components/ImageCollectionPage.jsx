import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import PageHeader from "../components/PageHeader";
import BackToTop from '../components/BackToTop';
import '../css/gallery.css';
import imgFallback from '../assets/carousel-1.jpg';
import { getItems } from '../utils/collectionStorage';

export default function ImageCollectionPage({ title, path, collection }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getItems(collection);
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [collection]);

  return (
    <>
      <Navbar />
      <PageHeader title={title} path={path} name={title} />
      <div className="gallery-page container-xxl py-5">
        <div className="container">
          <div className="gallery-intro">
            <h1>{title}</h1>
            <p className="lead">Browse images uploaded by Admin.</p>
          </div>
          {loading ? (
            <div style={{textAlign: 'center', padding: '50px'}}>
              <i className="fa fa-spinner fa-spin" style={{fontSize: '2rem', color: '#002147'}}></i>
            </div>
          ) : (
            <div className="gallery-grid">
              {items.map((item) => (
                <div className="gallery-item" key={item.id}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    onError={(e) => { e.target.onerror = null; e.target.src = imgFallback; }}
                  />
                  <div className="collection-caption">
                    {item.title && <h4>{item.title}</h4>}
                    {item.content && <p style={{margin: 0, color: '#64748b'}}>{item.content}</p>}
                  </div>
                </div>
              ))}
              {items.length === 0 && (
                <div style={{textAlign: 'center', padding: '30px', color: '#64748b'}}>
                  No images uploaded yet.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
