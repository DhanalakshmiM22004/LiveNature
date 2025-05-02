import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = { name, email, comment };

    emailjs.send(
      'service_lqxec2p', 
      'template_oci2at4', 
      templateParams,
      'bY-dvoqF5GZYi2fkO' 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert(`Error sending message: ${error.text || 'Please check console for details.'}`);
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add('show')
          : entry.target.classList.remove('show');
      });
    });

    const elements = document.querySelectorAll('.footer-about, .footer-product, .footer-bottom, .icon, .footer-contact');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // ✅ Cleanup observer when unmounting
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <section id="about">
            <h3>About Us</h3>
            <p>We are passionate about plants and dedicated to bringing greenery into your life...</p>
          </section>
        </div>
        <div className="footer-product">
          <h3>Products</h3>
          <ul>
            <li><Link to="low_light_plant">Low-Light Plants</Link></li>
            <li><Link to="pet_friendly_plant">Pet Friendly Plants</Link></li>
            <li><Link to="air_purifying_plant">Air Purifying Plants</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <section id="contact">
            <h3>Contact Us</h3>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <input type="text" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="input-container">
                <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="input-container">
                <textarea placeholder="Message" id="comment" rows="5" value={comment} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
              <button type="submit" disabled={isSending}>{isSending ? 'SENDING' : 'SEND'}</button>
            </form>
          </section>
        </div>
      </div>

      <div className='icon'>
        <a href="mailto:livewithnature.225@gmail.com" className="fa fa-google" aria-label="Google"></a>
        <a href="https://www.instagram.com/live_with_nature_225?igsh=MXBpeHhkcGo2MWh2Zw==" className="fa fa-instagram" aria-label="Instagram"></a>
        <a href="#" className="fa fa-facebook" aria-label="Facebook"></a>
        <a href="https://pin.it/2GcJC5kvk" className="fa fa-pinterest" aria-label="Pinterest"></a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 LiveNature. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
