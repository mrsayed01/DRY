import React from 'react';
import '../css/home.css';
import logo from '../assets/logo.png';

const DeclarationSection = () => {
    return (
        <div className="declaration-section-container">
            <div className="container">
                <div className="declaration-grid-wrapper">
                    {/* Central Emblem */}
                    <div className="declaration-center-emblem">
                        <img src={logo} alt="DRY Emblem" />
                        <div className="emblem-text">IMOLE OGO ADULAWO</div>
                    </div>

                    {/* Top Left Card */}
                    <div className="declaration-card top-left">
                        <h3>DECLARATION OF THE INDEPENDENCE OF YORUBA NATION</h3>
                        <p className="declaration-date">SUNDAY, NOVEMBER 20, 2022</p>
                    </div>

                    {/* Top Right Card */}
                    <div className="declaration-card top-right">
                        <h3>SWEARING IN OF MOBOLAJI OLAWALE AKINOLA OMOKORE AS HEAD OF DEMOCRATIC REPUBLIC OF THE YORUBA PROVISIONAL GOVERNMENT</h3>
                        <p className="declaration-date">ON FRIDAY, APRIL 12, 2024</p>
                    </div>

                    {/* Middle Left Map Text */}
                    <div className="declaration-map-text left">
                        <p>BORDERED ON THE WEST BY THE BENIN REPUBLIC,<br/>
                        ON THE EAST BY NIGERIA SOUTH, SOUTH REGION,<br/>
                        ON THE NORTH BY NIGERIA REPUBLIC,<br/>
                        AND ON THE SOUTH BY THE GULF OF GUINEA.</p>
                    </div>

                    {/* Middle Center Text */}
                    <div className="declaration-center-text">
                        <h4>DEMOCRATIC REPUBLIC OF THE YORUBA</h4>
                        <h5>IS</h5>
                        <p>THE NEWEST NATION IN THE WORLD.</p>
                        <p>THE 55TH NEWEST NATION IN AFRICA.</p>
                        <p>THE NEWEST NATION IN WEST AFRICA</p>
                    </div>

                    {/* Middle Right Pop Text */}
                    <div className="declaration-pop-text right">
                        <h4>POPULATION WITHIN NIGERIA IS 42.6 MILLION</h4>
                    </div>

                    {/* Bottom Left Card */}
                    <div className="declaration-card bottom-left">
                        <h3>RECLAMATION URGENT NOTIFICATION</h3>
                        <p className="declaration-date">ON SUNDAY, DECEMBER 18, 2022</p>
                    </div>

                    {/* Bottom Right Card */}
                    <div className="declaration-card bottom-right">
                        <h3>SOVEREIGNTY PROCLAMATION OF DEMOCRATIC REPUBLIC OF THE YORUBA</h3>
                        <p className="declaration-date">ON FRIDAY, APRIL 12, 2024</p>
                    </div>
                </div>

                <div className="declaration-footer">
                    <p>Democratic Republic of the Yoruba peaceful exit from a previous colonial arrangement and declaration of independence is in tune with United Nations charters, declarations, and so on, in respect of the Right to Self Determination, the Rights of Indigenous Peoples, the Rights of Ethnic Nationalities, the Rights of Sovereign Peoples, Fundamental Human Rights, the Right of Indigenous Peoples to Self Defence, etc.</p>
                </div>
            </div>
        </div>
    );
};

export default DeclarationSection;
