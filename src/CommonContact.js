import React from 'react'
import { useNavigate } from 'react-router-dom';
const CommonContact = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="contact-section">
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>M School 85, Ghat Road,<br />
                        Chalisgaon - 424101. Maharashtra. India</p>
                    <p><strong>Email Address:</strong> admissions@myschool.org</p>
                    <p><strong>Telephone No:</strong> 022 0000000</p>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <ul>
                            <li onClick={() => navigate('/about')}>About Us</li>
                            <li onClick={() => navigate('/admission')}>Admissions</li>
                            <li onClick={() => navigate('/contact')}>Contact</li>
                        </ul>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default CommonContact