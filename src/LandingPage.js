import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LandingPage.css';
import schoolImage from './images/th.jpg';
import digital from './images/digital.jpg'
import educational from './images/education.jpg'

import sports from './images/sports.jpg'

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is the admission process?",
      answer: "The admission process involves filling out the admission form, submitting required documents, and attending an interview."
    },
    {
      question: "What are the school timings?",
      answer: "The school operates from 8:00 AM to 3:00 PM from Monday to Friday."
    },
    {
      question: "What extracurricular activities are offered?",
      answer: "We offer a variety of extracurricular activities including sports, music, arts, and clubs."
    }
  ];
  return (
    <div className="landing-page">
      <main className="content">
        <div className="text-section">
          <h1>Welcome to Our School</h1>
          <p>Providing quality education for over 50 years.</p>
          <button onClick={() => navigate('/admission')}>Admission Form</button>
        </div>
        <div className="image-section">
          <img src={schoolImage} alt="School" />
        </div>
      </main>
      <h2>Our Offering</h2>
      <section className="cards-section">
        <div className="card">
          <div className="card-image">
            <img src={digital} alt="Academic Excellence" />
          </div>
          <div className="card-text">
            <h3>Digital Education</h3>
            <p>Committed to highest standards of education and learning</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={sports} alt="Sports Facilities" />
          </div>
          <div className="card-text">
            <h3>Sports Facilities</h3>
            <p>State-of-the-art facilities for physical development</p>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={educational} alt="Creative Arts" />
          </div>
          <div className="card-text">
            <h3>Creative Arts</h3>
            <p>Nurturing creativity and artistic expression</p>
          </div>
        </div>
      </section>
      <h2>Frequently Asked Questions</h2>
      <section className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question-container" onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <h3>{faq.question}</h3>
              </div>
              <div className="faq-arrow" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </div>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
export default LandingPage;