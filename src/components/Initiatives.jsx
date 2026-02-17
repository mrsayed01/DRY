import React from 'react';
import { Link } from 'react-router-dom';
import '../css/initiatives.css';

const initiativesData = [
    {
        title: "Infrastructure Development",
        desc: "Building modern roads, bridges, and sustainable energy systems to power our nation's growth.",
        icon: "fa-road",
        path: "/initiatives/infrastructure"
    },
    {
        title: "Educational Reform",
        desc: "Empowering the next generation through free, high-quality education and vocational training.",
        icon: "fa-graduation-cap",
        path: "/initiatives/education"
    },
    {
        title: "Healthcare Access",
        desc: "Ensuring every citizen has access to affordable and world-class medical facilities.",
        icon: "fa-heartbeat",
        path: "/initiatives/healthcare"
    },
    {
        title: "Agricultural Revitalization",
        desc: "Modernizing farming techniques to ensure food security and economic prosperity.",
        icon: "fa-seedling",
        path: "/initiatives/agriculture"
    },
    {
        title: "Cultural Preservation",
        desc: "Protecting and promoting our rich Yoruba heritage, language, and traditions globally.",
        icon: "fa-monument",
        path: "/initiatives/culture"
    },
    {
        title: "Digital Economy",
        desc: "Fostering innovation and technology to build a smart, connected, and prosperous nation.",
        icon: "fa-laptop-code",
        path: "/initiatives/digital-economy"
    }
];

const Initiatives = () => {
  return (
    <section className="initiatives-section">
      <div className="container">
        <div className="initiatives-header">
          <h2>Key National Initiatives</h2>
          <p>Strategic pillars for the development and prosperity of the Democratic Republic of the Yoruba.</p>
        </div>
        
        <div className="row g-4">
            {initiativesData.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                    <Link to={item.path} className="initiative-card-link">
                        <div className="initiative-card">
                            <div className="initiative-icon">
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <h3 className="initiative-title">{item.title}</h3>
                            <p className="initiative-desc">{item.desc}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Initiatives;
