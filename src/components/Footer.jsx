import '../css/footer.css';
import logo from '../assets/logo.jpeg';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <div className="mb-4">
                                <img src={logo} alt="D.R.Y Logo" style={{ maxHeight: '80px', borderRadius: '5px' }} />
                            </div>
                            <h2>Contact Us</h2>
                            <p><i className="fa fa-map-marker-alt"></i>Oriko Ile-Ishé, Agodi, Ibadan State, D.R.Y</p>
                            <a href="mailto:contact@democraticrepublicoftheyorubadry.com"><p><i className="fa fa-envelope"></i>contact@democraticrepublicoftheyorubadry.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="#"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Quick Links</h2>
                            <a href="/">Home</a>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/gallery">Gallery</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Information</h2>
                            <a href="/terms">Terms of use</a>
                            <a href="/privacy">Privacy policy</a>
                            <a href="/cookies">Cookies</a>
                            <a href="/help">Help</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Subscribe</button>
                                <h6>Stay updated with D.R.Y news</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Democratic Republic of the Yoruba</a> | 2024, All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Official Government Website</p>
                    </div>
                </div>
            </div>
        </ div>
    );
}
