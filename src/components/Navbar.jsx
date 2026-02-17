import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../css/navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [songsDropdownOpen, setSongsDropdownOpen] = useState(false);
    const path = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Get the navbar element
        const navbar = document.querySelector('.navbar');
        function toggleStickyNavbar() {
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add('nav-sticky');
                } else {
                    navbar.classList.remove('nav-sticky');
                }
            }
        }
        window.addEventListener('scroll', toggleStickyNavbar);
        return () => window.removeEventListener('scroll', toggleStickyNavbar);
    }, [])


    return (
        <>
            {/* <!-- Nav Bar Start --> */}
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="D.R.Y Logo" style={{ maxHeight: '80px' }} />
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className={`nav-item nav-link ${path === '/' ? "active" : ""}`}>Home</Link>
                            
                            <div className="nav-item dropdown">
                                <Link to="/history" className={`nav-link dropdown-toggle ${path.startsWith('/history') ? "active" : ""}`} data-bs-toggle="dropdown">HISTORY PAGE</Link>
                                <div className="dropdown-menu fade-down m-0">
                                    <Link to="/history/voice-notes" className="dropdown-item">MOA'S VOICE NOTE</Link>
                                    <Link to="/history/videos" className="dropdown-item">MOA'S VIDEOS</Link>
                                </div>
                            </div>

                            <div className="nav-item dropdown">
                                <Link to="/landmarks" className={`nav-link dropdown-toggle ${path === '/landmarks' ? "active" : ""}`} data-bs-toggle="dropdown">INDIGENOUS YORUBA PEOPLE ANCESTRAL LANDMARKS</Link>
                                <div className="dropdown-menu fade-down m-0">
                                    <Link to="/landmarks" className="dropdown-item">LANDMARKS</Link>
                                </div>
                            </div>

                            <div className="nav-item dropdown">
                                <Link to="/gallery" className={`nav-link dropdown-toggle ${path === '/gallery' ? "active" : ""}`} data-bs-toggle="dropdown">GALLERY</Link>
                                <div className="dropdown-menu fade-down m-0">
                                    <div className="dropdown-submenu">
                                        <Link 
                                            to="#" 
                                            className="dropdown-item" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSongsDropdownOpen(!songsDropdownOpen);
                                            }}
                                        >
                                            SONGS
                                        </Link>
                                        <div className="dropdown-menu" style={{ display: songsDropdownOpen ? 'block' : 'none' }}>
                                            <Link to="/video" className="dropdown-item">VIDEO</Link>
                                            <Link to="/audio" className="dropdown-item">AUDIO</Link>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/gallery/stickers" className="dropdown-item">STICKERS</Link>
                                    <Link to="/gallery/flyers" className="dropdown-item">FLYERS</Link>
                                </div>
                            </div>

                            <div className="nav-item dropdown">
                                <Link to="/possessions" className={`nav-link dropdown-toggle ${path === '/possessions' ? "active" : ""}`} data-bs-toggle="dropdown">POSSESS OUR POSSESSIONS</Link>
                                <div className="dropdown-menu fade-down m-0">
                                    <Link to="/landmarks" className="dropdown-item">LANDMARKS</Link>
                                    <Link to="/resources" className="dropdown-item">RESOURCES</Link>
                                    <Link to="/territories" className="dropdown-item">TERRITORIES</Link>
                                    <Link to="/barracks" className="dropdown-item">BARRACKS</Link>
                                    <Link to="/seaport" className="dropdown-item">SEAPORT</Link>
                                    <Link to="/airports" className="dropdown-item">AIRPORTS</Link>
                                    <Link to="/borders" className="dropdown-item">BORDERS</Link>
                                    <Link to="/secretariats" className="dropdown-item">SECRETARIATS</Link>
                                    <Link to="/properties" className="dropdown-item">ALL GOVERNMENT PROPERTIES</Link>
                                </div>
                            </div>

                            <div className="nav-item dropdown">
                                <Link to="/culture" className={`nav-link dropdown-toggle ${path === '/culture' ? "active" : ""}`} data-bs-toggle="dropdown">CULTURE</Link>
                                <div className="dropdown-menu fade-down m-0">
                                    <Link to="/culture/drums" className="dropdown-item">DRUMS</Link>
                                    <Link to="/culture/tribal-marks" className="dropdown-item">TRIBAL MARKS</Link>
                                    <Link to="/culture/games" className="dropdown-item">GAMES</Link>
                                    <Link to="/culture/beauty-hair" className="dropdown-item">BEAUTY - HAIR</Link>
                                    <Link to="/culture/artifacts" className="dropdown-item">ARTIFACTS</Link>
                                    <Link to="/culture/music" className="dropdown-item">MUSIC</Link>
                                    <Link to="/culture/greetings" className="dropdown-item">GREETINGS</Link>
                                    <Link to="/culture/dancing" className="dropdown-item">DANCING</Link>
                                    <Link to="/culture/masquerade" className="dropdown-item">MASQUERADE</Link>
                                    <Link to="/culture/costumes" className="dropdown-item">COSTUMES</Link>
                                    <Link to="/culture/profession" className="dropdown-item">PROFESSION</Link>
                                    <Link to="/culture/trades" className="dropdown-item">TRADES</Link>
                                    <Link to="/culture/tools" className="dropdown-item">TOOLS</Link>
                                    <Link to="/culture/fashion" className="dropdown-item">FASHION</Link>
                                    <Link to="/culture/food" className="dropdown-item">FOOD</Link>
                                    <Link to="/culture/festivals" className="dropdown-item">FESTIVALS</Link>
                                    <Link to="/culture/marriage" className="dropdown-item">MARRIAGE CEREMONY</Link>
                                    <Link to="/culture/naming" className="dropdown-item">NAMING CEREMONY</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Nav Bar End --> */}
        </>
    );
}
