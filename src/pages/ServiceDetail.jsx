
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { saveServiceSubmission } from '../utils/serviceFormStorage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import '../css/serviceDetail.css';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const foundService = servicesData.find(s => s.slug === slug);
        if (foundService) {
            setService(foundService);
            // Initialize form data
            const initialData = {};
            foundService.formFields.forEach(field => {
                initialData[field.name] = '';
            });
            setFormData(initialData);
        } else {
            // Redirect to home if not found, or show error
            navigate('/');
        }
    }, [slug, navigate]);

    const handleInputChange = async (e) => {
        const { name, value, type, files, checked } = e.target;
        
        if (type === 'file') {
            const file = files[0];
            if (file) {
                // Convert to Base64 for storage
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData(prev => ({
                        ...prev,
                        [name]: {
                            name: file.name,
                            type: file.type,
                            data: reader.result
                        }
                    }));
                };
                reader.readAsDataURL(file);
            }
        } else if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const submission = {
                serviceId: service.id,
                serviceTitle: service.title,
                formData: formData
            };
            await saveServiceSubmission(submission);
            setSuccess(true);
            setFormData(prev => {
                const reset = {};
                // Reset form data but keep structure for controlled inputs
                service.formFields.forEach(field => {
                     if (field.type !== 'header') {
                        reset[field.name] = '';
                     }
                });
                return reset;
            });
            // Reset file inputs manually if needed
            document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
        } catch (err) {
            console.error(err);
            setError('Failed to submit form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!service) return <div className="loading-spinner">Loading...</div>;

    const getIconForField = (name, type) => {
        if (type === 'date') return 'fa-calendar-alt';
        if (type === 'file') return 'fa-file-upload';
        if (name.toLowerCase().includes('email')) return 'fa-envelope';
        if (name.toLowerCase().includes('phone') || name.toLowerCase().includes('tel') || name.toLowerCase().includes('mobile')) return 'fa-phone';
        if (name.toLowerCase().includes('name') || name.toLowerCase().includes('user') || name.toLowerCase().includes('kin')) return 'fa-user';
        if (name.toLowerCase().includes('address') || name.toLowerCase().includes('city') || name.toLowerCase().includes('country') || name.toLowerCase().includes('zip')) return 'fa-map-marker-alt';
        if (name.toLowerCase().includes('company') || name.toLowerCase().includes('institution') || name.toLowerCase().includes('hospital')) return 'fa-building';
        if (name.toLowerCase().includes('message') || name.toLowerCase().includes('proposal') || name.toLowerCase().includes('explanation')) return 'fa-comment-alt';
        if (type === 'url' || name.toLowerCase().includes('link') || name.toLowerCase().includes('portfolio')) return 'fa-link';
        if (type === 'select') return 'fa-list-ul';
        return 'fa-pen';
    };

    return (
        <>
            <Navbar />
            <div className="service-detail-page">
                <PageHeader title={service.title} path={`Services / ${service.title}`} />

                <div className="container my-5">
                    <div className="row">
                        {/* Left Content Column */}
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="service-content-wrapper">
                                {service.content.map((block, index) => {
                                    if (block.type === 'heading') {
                                        return <h2 key={index} className="service-heading">{block.text}</h2>;
                                    }
                                    if (block.type === 'paragraph') {
                                        return <p key={index} className="service-paragraph">{block.text}</p>;
                                    }
                                    if (block.type === 'list') {
                                        return (
                                            <ul key={index} className="service-list">
                                                {block.items.map((item, i) => (
                                                    <li key={i}><i className="fas fa-check-circle me-2 text-primary"></i>{item}</li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="col-lg-5">
                            <div className="service-form-card">
                                
                                {success && (
                                    <div className="alert alert-success">
                                        <i className="fas fa-check-circle me-2"></i>
                                        Your submission has been received successfully!
                                    </div>
                                )}
                                {error && (
                                    <div className="alert alert-danger">
                                        <i className="fas fa-exclamation-circle me-2"></i>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    {service.formFields.map((field, index) => {
                                        if (field.type === 'header') {
                                            return (
                                                <h5 key={index} className="form-section-header mt-4 mb-3 border-bottom pb-2" style={{color: '#002147', fontWeight: 'bold'}}>
                                                    {field.label}
                                                </h5>
                                            );
                                        }

                                        if (field.type === 'paragraph') {
                                             return (
                                                 <p key={index} className="text-muted mb-4" style={{fontSize: '0.9rem'}}>
                                                     {field.text}
                                                 </p>
                                             );
                                        }

                                        if (field.type === 'radio') {
                                            return (
                                                <div key={index} className="form-group mb-3">
                                                    <label className="form-label">
                                                        {field.label} {field.required && <span className="text-danger">*</span>}
                                                    </label>
                                                    <div className="d-flex flex-column gap-2">
                                                        {field.options.map((opt, i) => (
                                                            <div className="form-check" key={i}>
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name={field.name}
                                                                    id={`${field.name}-${i}`}
                                                                    value={opt}
                                                                    checked={formData[field.name] === opt}
                                                                    onChange={handleInputChange}
                                                                    required={field.required}
                                                                />
                                                                <label className="form-check-label" htmlFor={`${field.name}-${i}`}>
                                                                    {opt}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        if (field.type === 'checkbox') {
                                            return (
                                                <div key={index} className="form-check mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={field.name}
                                                        name={field.name}
                                                        checked={formData[field.name] || false}
                                                        onChange={handleInputChange}
                                                        required={field.required}
                                                    />
                                                    <label className="form-check-label" htmlFor={field.name}>
                                                        {field.label} {field.required && <span className="text-danger">*</span>}
                                                    </label>
                                                </div>
                                            );
                                        }

                                        return (
                                        <div key={index} className="form-group mb-3">
                                            <label htmlFor={field.name} className="form-label">
                                                {field.label} {field.required && <span className="text-danger">*</span>}
                                            </label>
                                            
                                            <div className="input-group">
                                                <span className="input-group-text bg-light border-end-0">
                                                    <i className={`fas ${getIconForField(field.name, field.type)} text-muted`}></i>
                                                </span>
                                                {field.type === 'textarea' ? (
                                                    <textarea
                                                        className="form-control custom-input border-start-0"
                                                        id={field.name}
                                                        name={field.name}
                                                        rows="4"
                                                        value={formData[field.name] || ''}
                                                        onChange={handleInputChange}
                                                        required={field.required}
                                                        placeholder={field.placeholder || `Enter your ${field.label.toLowerCase()}`}
                                                    ></textarea>
                                                ) : field.type === 'select' ? (
                                                    <select
                                                        className="form-control custom-input border-start-0"
                                                        id={field.name}
                                                        name={field.name}
                                                        value={formData[field.name] || ''}
                                                        onChange={handleInputChange}
                                                        required={field.required}
                                                    >
                                                        <option value="">Select {field.label}</option>
                                                        {field.options.map((opt, i) => (
                                                            <option key={i} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                ) : field.type === 'file' ? (
                                                    <input
                                                        type="file"
                                                        className="form-control custom-input border-start-0"
                                                        id={field.name}
                                                        name={field.name}
                                                        onChange={handleInputChange}
                                                        required={field.required}
                                                        accept={field.accept || "*"}
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        className="form-control custom-input border-start-0"
                                                        id={field.name}
                                                        name={field.name}
                                                        value={formData[field.name] || ''}
                                                        onChange={handleInputChange}
                                                        required={field.required}
                                                        placeholder={field.placeholder || `Enter your ${field.label.toLowerCase()}`}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    )})}

                                    <button type="submit" className="btn btn-primary w-100 submit-btn" disabled={loading}>
                                        {loading ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin me-2"></i> Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Request <i className="fas fa-paper-plane ms-2"></i>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ServiceDetail;
