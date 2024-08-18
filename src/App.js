import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/Contact/Contact';
import Activities from './pages/Activities/Activities';
import Career from './pages/Career/Career';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Activities" element={<Activities />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
