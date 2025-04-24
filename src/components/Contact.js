import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. I will get back to you soon!');
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-underline"></div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa-solid fa-envelope contact-icon"></i>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:alaahassain9@gmail.com">alaahassain9@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone contact-icon"></i>
              <div>
                <h3>Phone</h3>
                <p><a href="tel:+962796990562">+962 796 990 562</a></p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-location-dot contact-icon"></i>
              <div>
                <h3>Location</h3>
                <p>Amman, Jordan</p>
              </div>
            </div>
            <div className="contact-social">
              <a href="https://github.com/AlaaHasain" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/share/18xrvwRXe5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/alaah.98?igsh=NHE1Zjdqb2wzMHY2" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/+962796990562" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Your Phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;