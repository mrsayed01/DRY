import React from 'react';
import { Link } from 'react-router-dom';
import '../css/states.css';

const states = [
    { id: "01", name: "State of Old Oyo Empire", slug: "old-oyo-empire" },
    { id: "02", name: "State of IRAGBIJI", slug: "iragbiji" },
    { id: "03", name: "State of IDANRE", slug: "idanre" },
    { id: "04", name: "State of OLUMO", slug: "olumo" },
    { id: "05", name: "State of Ibadan", slug: "ibadan" },
    { id: "06", name: "State of Eko", slug: "eko" },
    { id: "07", name: "State of OROLE", slug: "orole" }
];

export default function States() {
    return (
        <section className="states-section">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {states.map((state) => (
                        <div key={state.id} className="col-md">
                            <Link to={`/state/${state.slug}`} style={{ textDecoration: 'none' }}>
                                <div className="state-card-new">
                                    <span className="state-number">{state.id}</span>
                                    <h4 className="state-title-new">{state.name}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="sovereignty-text-container">
                <div className="container">
                    <div className="sovereignty-text">
                        <p>
                            Democratic Republic of the Yoruba (D.R.Y) Sovereignty was Proclaimed on Friday, 12th of April, 2024, by the Mother of the Indigenous Yoruba People (I.Y.P) of Democratic Republic of the Yoruba (D.R.Y), Mama Modupe Onitiri-Abiola (Chief Mrs). This was after the D.R.Y had previously declared its Independence on 20th of November, 2022. Immediately after the Proclamation of Sovereignty on 12th of April, 2024, the same day the Swearing-In of the Head of Provisional Government, His Excellency Mobolaji Olawale Akinola Omokore, took place. On that day, Democratic Republic of the Yoruba (D.R.Y) thus activated its sovereignty and became the newest sovereign nation in the world, 55th in Africa and 17th in West Africa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
