import React from 'react';
import '../css/home.css'; // We'll add styles here
import leaderImage from '../assets/leader-moa.jpeg'; // The Leader Image

const LeaderSection = () => {
    return (
        <div className="leader-section-container">
            <div className="leader-section-overlay"></div> {/* Dark overlay for readability */}
            <div className="container position-relative"> {/* Added position relative to sit on top of overlay */}
                <div className="row align-items-center">
                    {/* Left Column: Image Card */}
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="leader-card">
                            <div className="leader-image-wrapper">
                                <img src={leaderImage} alt="MODUPE ONITIRI-ABIOLA (CHIEF MRS.)" className="leader-main-image" />
                                <div className="leader-name-tag">
                                    <h3>MODUPE ONITIRI-ABIOLA (CHIEF MRS.)</h3>
                                </div>
                            </div>
                            <div className="leader-quote-box">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <p>After God Almighty,<br/>Yoruba First!</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="col-lg-7">
                        <div className="leader-content">
                            <div className="green-highlight-box">
                                About the Democratic Republic of the Yoruba Citizen Monitoring System
                            </div>
                            <h2 className="leader-heading">
                                Democratic Republic of the Yoruba is a New Nation in the World!
                            </h2>
                            <p className="leader-description">
                                This is the first time an independent nation emerged peacefully without conflict, a nation known as Democratic Republic of the Yoruba (D.R.Y).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderSection;
