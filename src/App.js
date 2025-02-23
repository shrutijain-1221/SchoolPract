import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import AdmissionForm from './AdmissionForm';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import './App.css';
import CommonContact from './CommonContact';
 
function App() {
  return (
    <Router  basename="/SchoolPract">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <CommonContact />
      </div>
    </Router>
  );
}
 
export default App;