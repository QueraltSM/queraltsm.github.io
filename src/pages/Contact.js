import React, { useState } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setIsError(false);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsError(true);
    }
  };

  return (
    <div>
      <Header />
      <section className="section">
        <div className="social-links">
        <h2>Contact me</h2>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div class="col">
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
          </div>
          <div class="col">
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
          </div>
          <button type="submit" className="btn submit-btn">
            Send email
          </button>
        </form>
        {isSubmitted && <p className="success-message">Thank you for contacting me. Soon you'll hear from me.</p>}
        {isError && <p className="error-message">There was an error sending this email. Sorry about that. Please try again.</p>}
      </section>
      <Footer />
    </div>
  );
};
export default Contact;