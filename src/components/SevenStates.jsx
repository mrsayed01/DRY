import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sevenStates.css';
import ibadanImg from '../assets/states/state of ibadan.webp';
import oyoImg from '../assets/states/State of Old Oyo Empire.jpeg';
import ekitiImg from '../assets/states/State of Ekiti.jpg';
import ondoImg from '../assets/states/State of Ondo.jpg';
import ekoImg from '../assets/states/State of Eko.jpg';
import ogunImg from '../assets/states/State of Ogun.jpg';
import osunImg from '../assets/states/State of Osun.jpg';

const statesData = [
    {
        id: 1,
        name: "State of Ibadan",
        desc: "State of Ibadan of the Democratic Republic of the Yoruba (D.R.Y) Province Ibadan.",
        img: ibadanImg,
        slug: "ibadan"
    },
    {
        id: 2,
        name: "State of Old Oyo Empire",
        desc: "State of Old Oyo Empire - The Empire of the Democratic Republic of the Yoruba.",
        img: oyoImg,
        slug: "old-oyo-empire"
    },
    {
        id: 3,
        name: "State of OROLE",
        desc: "State of Orole (formerly Ekiti) of the Democratic Republic of the Yoruba.",
        img: ekitiImg,
        slug: "orole"
    },
    {
        id: 4,
        name: "State of Idanre",
        desc: "State of Idanre (formerly Ondo) of the Democratic Republic of the Yoruba.",
        img: ondoImg,
        slug: "idanre"
    },
    {
        id: 5,
        name: "State of Eko",
        desc: "Explore State of Eko - The Commercial Nerve Center of the Democratic Republic.",
        img: ekoImg,
        slug: "eko"
    },
    {
        id: 6,
        name: "State of OLUMO",
        desc: "State of Olumo (formerly Ogun) of the Democratic Republic of the Yoruba heritage.",
        img: ogunImg,
        slug: "olumo"
    },
    {
        id: 7,
        name: "State of IRAGBIJI",
        desc: "State of Iragbiji (formerly Osun) of the Democratic Republic of the Yoruba.",
        img: osunImg,
        slug: "iragbiji"
    }
];

export default function SevenStates() {
    return (
        <section className="seven-states-section">
            <div className="container position-relative" style={{zIndex: 2}}>
                <div className="text-center mb-5">
                    <h2 className="seven-states-title">D.R.Y. SEVEN STATES</h2>
                    <div className="title-underline"></div>
                    <p className="seven-states-subtitle">
                        Let's build the cities we are proud of... Work has started in rebuilding our States to world standard.
                    </p>
                </div>
                
                <div className="row g-4 justify-content-center">
                    {statesData.map((state) => (
                        <div key={state.id} className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="seven-state-card">
                                <div className="card-img-wrapper">
                                    <img src={state.img} alt={state.name} className="img-fluid" />
                                </div>
                                <div className="card-content">
                                    <h4 className="card-title">{state.name}</h4>
                                    <p className="card-desc">{state.desc}</p>
                                    <Link to={`/state/${state.slug}`} className="btn-read-more">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
