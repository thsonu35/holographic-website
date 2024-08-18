import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Example API endpoint for form submission
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatusMessage('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatusMessage('Something went wrong. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="contact-us">
      <section className="contact-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: 64 C Ishwar nagar Balgrah Road Dewas</p>
        <p>Email: info@radiantkube.com</p>
        <p>Phone: +91 8871400458</p>
      </section>
    </div>
  );
};

export default ContactUs;
