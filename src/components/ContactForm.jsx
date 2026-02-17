import React, { useState } from 'react';
import contact from "../assets/contactus.png";
import '../css/contactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Please enter your name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Please enter your message';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform action (e.g., send form data to server)
            document.getElementById("success").innerHTML="✔ Message Sent Successfully!";
            console.log('Form submitted successfully');
            // Reset form fields
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }else{
            document.getElementById("success").innerHTML="";
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    return (
        <>
            {/* <!-- Contact Start --> */}
            <div className="contact">
                {/* Full Width Map */}
                <div className="container-fluid p-0 mb-5">
                    <iframe 
                        className="w-100"
                        style={{ height: "450px", border: "0" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.270498064071!2d3.8934789!3d7.4013627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff000d%3A0x9a4734a34b281148!2sAgodi%2C%20Ibadan%2C%20Nigeria!5e0!3m2!1sen!2sbd!4v1707681234567!5m2!1sen!2sbd" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h3>Get In Touch</h3>
                        <h2>Contact for any query</h2>
                    </div>
                    
                    <div className="row contact-classic-row">
                        <div className="col-lg-5">
                            <div className="contact-info-classic">
                                <div className="info-item">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <div className="info-content">
                                        <h4>Our Location</h4>
                                        <p>Oriko Ile-Ishé, Agodi, Ibadan State, D.R.Y</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fa fa-envelope"></i>
                                    <div className="info-content">
                                        <h4>Email Us</h4>
                                        <p>contact@democraticrepublicoftheyorubadry.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fa fa-phone-alt"></i>
                                    <div className="info-content">
                                        <h4>Call Us</h4>
                                        <p>+234 123 456 7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form">
                                <div className='sent text-success' id="success"></div>
                                <form name="sentMessage" id="contactForm" onSubmit={handleSubmit} noValidate>
                                    <div className="row">
                                        <div className="col-md-6 control-group">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete='name' required />
                                            <p className="text-danger">{errors.name}</p>
                                        </div>
                                        <div className="col-md-6 control-group">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} autoComplete='email' required />
                                            <p className="text-danger">{errors.email}</p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                        <p className="text-danger">{errors.subject}</p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" id="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                        <p className="text-danger">{errors.message}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    );
}

export default ContactForm;
