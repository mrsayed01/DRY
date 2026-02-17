
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { statesData } from '../data/statesData';
import PageHeader from '../components/PageHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/stateDetail.css';

export default function StateDetail() {
    const { id } = useParams();
    const state = statesData[id];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!state) {
        return <Navigate to="/" replace />;
    }

    // Process content to extract title, subtitle, and body
    const processContent = (content) => {
        if (!content) return { title: "", subtitle: "", body: [], footer: "" };
        
        const lines = content.split('\n\n').map(line => line.trim()).filter(line => line.length > 0);
        let title = state.name; // Default
        let subtitle = "";
        let body = [];
        let footer = "";

        // Heuristic extraction
        let currentIndex = 0;
        
        // Check first line
        if (lines[currentIndex] && (lines[currentIndex].toLowerCase() === state.name.toLowerCase() || lines[currentIndex].includes("State of"))) {
            title = lines[currentIndex];
            currentIndex++;
        }

        // Check second line for subtitle
        if (lines[currentIndex] && (lines[currentIndex].includes("Democratic Republic") || lines[currentIndex].includes("Empire of") || lines[currentIndex].includes("Region of"))) {
            subtitle = lines[currentIndex];
            currentIndex++;
        }

        // Get body and check for footer
        let tempBody = lines.slice(currentIndex);
        if (tempBody.length > 0 && tempBody[tempBody.length - 1].includes("Abundance of Natural Resources")) {
            footer = tempBody.pop();
        }
        
        body = tempBody;
        return { title, subtitle, body, footer };
    };

    const { title: displayTitle, subtitle: displaySubtitle, body, footer } = processContent(state.content);

    return (
        <>
            <Navbar />
            <div className="state-detail-page">
                {/* Hero Section */}
                <PageHeader title={state.name} path={state.name} bgImage={state.scrapedImage || state.image} />

                <div className="container my-5">
                <div className="state-content-wrapper">
                    
                    {/* Header Section */}
                    <div className="state-header-section text-center mb-5">
                        <h1 className="state-main-title">{displayTitle}</h1>
                        <div className="title-divider"></div>
                        {displaySubtitle && <h4 className="state-sub-title">{displaySubtitle}</h4>}
                    </div>

                    {/* Main Content Area - Two Column Layout */}
                    <div className="row align-items-start gx-5">
                        
                        {/* Left Column: Text Content */}
                        <div className="col-lg-7">
                            <div className="state-text-content">
                                {body.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                {footer && (
                                    <h3 className="state-footer-heading mt-4">{footer}</h3>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="col-lg-5">
                            <div className="state-image-card">
                                <div className="img-frame">
                                    <img 
                                        src={state.scrapedImage || state.image} 
                                        alt={state.name} 
                                        className="img-fluid state-feature-image" 
                                        onError={(e) => {e.target.src = state.image}} // Fallback to local image if scraped one fails
                                    />
                                </div>
                                <div className="state-info-box mt-4">
                                    <h5 className="info-title">State Facts</h5>
                                    <ul className="info-list">
                                        <li><strong>Capital:</strong> {state.capital}</li>
                                        <li><strong>Nation:</strong> D.R.Y</li>
                                        <li><strong>Region:</strong> Yorubaland</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer Section (Footer of the article) */}
                    <div className="state-disclaimer mt-5">
                        <div className="disclaimer-content">
                            {state.disclaimer.split('\n\n').map((para, index) => (
                                <p key={index} className={index === state.disclaimer.split('\n\n').length - 1 ? "copyright-text" : "warning-text"}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Navigation to other states */}
                    <div className="other-states-nav mt-5">
                        <h3 className="text-center mb-4">Explore Other States</h3>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            {Object.entries(statesData).map(([key, item]) => (
                                item.id !== state.id && (
                                    <Link to={`/state/${key}`} key={key} className="state-nav-pill">
                                        <img src={item.image} alt={item.name} className="nav-thumb" />
                                        <span>{item.name}</span>
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}
