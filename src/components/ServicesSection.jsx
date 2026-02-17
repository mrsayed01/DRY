import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import '../css/home.css';

const ServicesSection = () => {
    const mainSlugs = [
        "submit-your-business-proposal",
        "finance-commercial-services",
        "health-and-wellness-plan-health-matters",
        "education",
        "engineering",
        "artisans"
    ];

    const secondarySlugs = [
        "creative-media-and-ict",
        "general-data-collection-form",
        "iyp-dry-student-withdrawal-form",
        "ytc-form-and-guidelines",
        "contractors-form",
        "land-to-indigenous-yoruba-people"
    ];

    const mainServices = servicesData.filter(s => mainSlugs.includes(s.slug));
    const secondaryServices = servicesData.filter(s => secondarySlugs.includes(s.slug));

    return (
        <div className="services-section-container">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Services List */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="services-list-card">
                            <ul className="services-list">
                                {mainServices.map((service, index) => (
                                    <li key={index} className="service-item-clickable">
                                        <Link to={`/services/${service.slug}`} className="service-link">
                                            <i className="fas fa-check-circle service-icon-active"></i>
                                            <span className="service-text">{service.title}</span>
                                            <i className="fas fa-arrow-right service-arrow"></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Additional Forms List */}
                    <div className="col-lg-6">
                        <div className="services-list-card">
                            <ul className="services-list">
                                {secondaryServices.map((service, index) => (
                                    <li key={index} className="service-item-clickable">
                                        <Link to={`/services/${service.slug}`} className="service-link">
                                            <i className="fas fa-check-circle service-icon-active"></i>
                                            <span className="service-text">{service.title}</span>
                                            <i className="fas fa-arrow-right service-arrow"></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServicesSection;
