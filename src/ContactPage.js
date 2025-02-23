import React, { useState } from 'react';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';
import game from './images/games.jpg'
const ContactPage = () => {
    const navigate = useNavigate()
    const [enquiryData, setEnquiryData] = useState({
        name: '',
        contactNo: '',
        email: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEnquiryData({ ...enquiryData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enquiry submitted', enquiryData);
        setEnquiryData({ name: '', contactNo: '', email: '' });
    };
    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <div className="contact-box">
                <div className="contact-left">
                    <img src={game} alt="Game" className="contact-image" />
                </div>
                <div className="contact-right">
                    <p>Fill the admission form to join our school and explore various opportunities.</p>
                    <button onClick={() => navigate('/admission')}>Admission Form</button>
                </div>
            </div>
            <h2>Enquire Now</h2>
            <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>Name:</label>
                    <input type="text" name="name" value={enquiryData.name} onChange={handleChange} required />
                </div>
                <div className="form-row">
                    <label>Contact No:</label>
                    <input type="text" name="contactNo" value={enquiryData.contactNo} onChange={handleChange} required />
                </div>
                <div className="form-row">
                    <label>Email Address:</label>
                    <input type="email" name="email" value={enquiryData.email} onChange={handleChange} required />
                </div>
                <div className='submit-button'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default ContactPage;