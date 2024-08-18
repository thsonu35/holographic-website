import React, { useState } from 'react';
import './HomePage.css';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaHistory, FaLightbulb, FaRocket } from 'react-icons/fa';
import ThreeHolographicText from '../../components/ThreeHolographicItem/ThreeHolographicText';

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <section className="home-page">
      <ThreeHolographicText />
      
      {/* Logo with Animation */}
      <div className="logo animate-logo">
        <img src="path-to-your-logo.png" alt="RadiantKube Logo" />
      </div>

      <div className="content-wrapper">
        <div className="content">
          <div className="hero-section animate-fadeIn">
            <div className="hero-content">
              <h1>Innovative IT Solutions for a Brighter Future 🚀</h1>
              <p>Empowering businesses with cutting-edge technology and unparalleled service. 💻📱</p>
            </div>
          </div>

          <section className="company-history animate-slideUp">
            <h2><FaHistory /> Our History</h2>
            <p>RadiantKube Technologies was founded with the vision of transforming the IT services industry through innovative and customer-centric solutions...</p>
          </section>

          <section className="mission-vision animate-slideUp">
            <h2><FaLightbulb /> Mission & Vision</h2>
            <div className="mission-vision-content">
              <div className="mission">
                <h3>Mission 🎯</h3>
                <p>Our mission is to empower businesses by providing innovative and reliable IT solutions that drive success and growth.</p>
              </div>
              <div className="vision">
                <h3>Vision 🌟</h3>
                <p>We envision a world where technology seamlessly integrates with business processes to create a smarter, more efficient future.</p>
              </div>
            </div>
          </section>

          <section className="core-values animate-slideUp">
            <h2>Core Values 🌱</h2>
            <ul>
              <li>Innovation 🌟</li>
              <li>Customer-Centricity 👥</li>
              <li>Integrity 🤝</li>
              <li>Excellence 🏆</li>
              <li>Teamwork 🤝</li>
            </ul>
          </section>

          <section className="detailed-services animate-slideUp">
            <h2>Our Services 💼</h2>
            <div className="service-item">
              <h3><FaLaptopCode /> Web Development</h3>
              <p>We create responsive and engaging websites tailored to your business needs, ensuring a seamless user experience.</p>
            </div>
            <div className="service-item">
              <h3><FaMobileAlt /> App Development</h3>
              <p>Our team develops high-quality mobile applications that meet your requirements and deliver exceptional performance.</p>
            </div>
            <div className="service-item">
              <h3><FaCloud /> Cloud Solutions</h3>
              <p>We offer cloud computing services that enhance your business operations and scalability while ensuring data security.</p>
            </div>
          </section>

          <section className="agile-methodology">
  <h2>Agile Methodology 🛠️</h2>
  <p>
    We embrace Agile methodologies to ensure that our projects are flexible, adaptive, and continuously improved upon. This allows us to deliver high-quality solutions in a timely and efficient manner.
  </p>
  <img src="https://plaky.com/learn/wp-content/uploads/2022/02/AGILE-dark-min.png" alt="Agile Methodology" />
  
  <div className="agile-benefits">
    <h3>Benefits of Agile:</h3>
    <ul>
      <li>Enhanced Flexibility and Adaptability 🔄</li>
      <li>Improved Quality through Iterative Testing ✅</li>
      <li>Increased Customer Satisfaction 😊</li>
      <li>Faster Time to Market 🚀</li>
      <li>Continuous Improvement and Feedback 🔄</li>
    </ul>
  </div>
</section>


          <section className="testimonial animate-slideUp">
            <h2>What Our Clients Say 📣</h2>
            <div className="testimonial-content">
              <blockquote>
                "RadiantKube Technologies transformed our business with their innovative solutions. Their dedication and expertise are unparalleled." 
              </blockquote>
            </div>
          </section>
        </div>

        <div className="sidebar animate-slideRight">
          <h3>OTHER APPROACHES</h3>
          <div className="card" onClick={() => toggleModal('card1')}>
            <h3>What Makes Us Different 💡</h3>
            <p>Click to discover the unique aspects of our approach and services.</p>
          </div>
          <div className="card" onClick={() => toggleModal('card2')}>
            <h3>Our Benefits 🎁</h3>
            <p>Learn about the key benefits we offer that set us apart from the competition.</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal ${isModalVisible ? 'show' : ''}`}>
        <div className="modal-header">
          <div className="modal-title">Learn More About Us 🧐</div>
          <span className="modal-close" onClick={toggleModal}>&times;</span>
        </div>
        <div className="modal-body">
          <p>RadiantKube Technologies offers a range of IT solutions designed to meet the needs of modern businesses...</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={toggleModal}>Close</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
