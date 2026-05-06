'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const email = 'thedenmaldives@gmail.com';
const phone = '+919876543210';
const facebook = 'https://www.facebook.com/people/The-Den/61552914748829/';

const packages = [
  { id: 1, title: 'Beach Villa', category: 'Villa', image: '/images/21.jpg', price: '₹15,000', perNight: '/ night', features: [{ icon: 'fa-bed', text: 'King Bed' }, { icon: 'fa-water', text: 'Sea View' }, { icon: 'fa-wifi', text: 'Free WiFi' }, { icon: 'fa-snowflake', text: 'AC' }], emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+Beach+Villa+-+The+DEN`, smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+book+Beach+Villa.` },
  { id: 2, title: 'Garden Villa', category: 'Villa', image: '/images/20.jpg', price: '₹12,000', perNight: '/ night', features: [{ icon: 'fa-bed', text: 'Queen Bed' }, { icon: 'fa-tree', text: 'Garden View' }, { icon: 'fa-wifi', text: 'Free WiFi' }, { icon: 'fa-snowflake', text: 'AC' }], emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+Garden+Villa+-+The+DEN`, smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+book+Garden+Villa.` },
  { id: 3, title: 'Couple Package', category: 'Package', image: '/images/22.jpg', price: '₹25,000', perNight: '/ couple', features: [{ icon: 'fa-heart', text: 'Couple Special' }, { icon: 'fa-utensils', text: 'Meal Included' }, { icon: 'fa-spa', text: 'Spa Discount' }, { icon: 'fa-camera', text: 'Photo Session' }], emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+Couple+Package+-+The+DEN`, smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+book+Couple+Package.` },
  { id: 4, title: 'Family Package', category: 'Package', image: '/images/23.jpg', price: '₹35,000', perNight: '/ family', features: [{ icon: 'fa-users', text: 'Family Friendly' }, { icon: 'fa-utensils', text: 'Meals Included' }, { icon: 'fa-child', text: 'Kids Area' }, { icon: 'fa-umbrella-beach', text: 'Beach Access' }], emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+Family+Package+-+The+DEN`, smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+book+Family+Package.` },
  { id: 5, title: 'Honeymoon Suite', category: 'Villa', image: '/images/24.jpg', price: '₹22,000', perNight: '/ night', features: [{ icon: 'fa-heart', text: 'Honeymoon' }, { icon: 'fa-candle', text: 'Candle Dinner' }, { icon: 'fa-bath', text: 'Private Pool' }, { icon: 'fa-ring', text: 'Flower Decoration' }], emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+Honeymoon+Suite+-+The+DEN`, smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+book+Honeymoon+Suite.` },
  { id: 6, title: 'Adventure Package', category: 'Package', image: '/images/25.jpg', price: '₹18,000', perNight: '/ person', features: [{ icon: 'fa-fish', text: 'Snorkeling' }, { icon: 'fa-sailboat', text: 'Boat Ride' }, { icon: 'fa-water', text: 'Scuba Diving' }, { icon: 'fa-island-tropical', text: 'Island Hopping' }], emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+Adventure+Package+-+The+DEN`, smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+book+Adventure+Package.` },
];

const galleryImages = [
  { src: '/images/01.png', label: 'Sunset View' },
  { src: '/images/02.jpg', label: 'Beach Paradise' },
  { src: '/images/03.jpg', label: 'Crystal Waters' },
  { src: '/images/04.jpg', label: 'Luxury Villa' },
  { src: '/images/05.jpg', label: 'Water Bungalow' },
  { src: '/images/06.jpg', label: 'Private Deck' },
  { src: '/images/07.jpg', label: 'Ocean Villa' },
  { src: '/images/08.jpg', label: 'Tropical Haven' },
  { src: '/images/09.jpg', label: 'Sunrise Deck' },
  { src: '/images/10.jpg', label: 'White Sand Beach' },
  { src: '/images/11.jpg', label: 'Villa Interior' },
  { src: '/images/12.jpg', label: 'Overwater Sunset' },
];

function SectionHeading({ eyebrow, heading, highlight, description }) {
  const words = heading.split(' ');
  const title = words.map((word, i) => 
    word.toLowerCase() === highlight.toLowerCase() 
      ? <span key={i} className="highlight">{word}</span>
      : <span key={i}>{word} </span>
  );

  return (
    <div className="section-header">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
      <div className="section-divider"></div>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.observe-fade').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="navbar-logo">
          <span className="navbar-logo-text">THE DEN</span>
        </a>
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#foods">Foods</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="#foods" onClick={() => setMobileOpen(false)}>Foods</a>
        <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </div>

      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">A Retreat Worth Savouring</span>
          <h1 className="hero-title">THE DEN</h1>
          <p className="hero-subtitle">Experience luxury by the sea</p>
          <div className="hero-buttons">
            <a href={`https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+The+DEN`} className="hero-btn hero-btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i> Book via Email
            </a>
            <a href={`sms:${phone}?body=Hi%2C+I%27d+like+to+book+at+The+DEN.`} className="hero-btn hero-btn-secondary">
              <i className="fa-solid fa-comment-sms"></i> Book via SMS
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section section-light">
        <div className="observe-fade">
          <SectionHeading eyebrow="Welcome to THE DEN" heading="Your Dream Resort" highlight="Dream" description="Escape to paradise at THE DEN, where luxury meets natural beauty." />
        </div>
        <div className="about-content observe-fade">
          <div className="about-image">
            <Image src="/images/26.jpg" alt="Resort View" width={500} height={400} />
          </div>
          <div className="about-text">
            <p>Nestled in the heart of the Maldives, THE DEN offers an unparalleled tropical escape. Our resort combines traditional island charm with modern luxury.</p>
            <p>From overwater villas to pristine beaches, every moment at THE DEN is crafted to create lasting memories.</p>
          </div>
        </div>
      </section>

      <section id="foods" className="section section-dark">
        <div className="observe-fade">
          <SectionHeading eyebrow="Accommodations" heading="Luxurious Foods & Packages" highlight="Packages" description="Choose from our selection of premium villas and curated packages." />
        </div>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card observe-fade">
              <div className="package-image">
                <Image src={pkg.image} alt={pkg.title} width={400} height={280} />
                <span className="package-category">{pkg.category}</span>
              </div>
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-features">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="package-feature"><i className={`fa-solid ${f.icon}`}></i><span>{f.text}</span></div>
                  ))}
                </div>
                <div className="package-price">{pkg.price}<span>{pkg.perNight}</span></div>
                <div className="package-buttons">
                  <a href={pkg.emailLink} className="package-btn package-btn-email" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-envelope"></i> Book via Email
                  </a>
                  <a href={pkg.smsLink} className="package-btn package-btn-sms">
                    <i className="fa-solid fa-comment-sms"></i> Book via SMS
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="observe-fade">
          <SectionHeading eyebrow="Our Gallery" heading="Captivating Moments" highlight="Moments" description="Explore the breathtaking beauty of our resort." />
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item observe-fade">
              <Image src={img.src} alt={img.label} width={400} height={300} />
              <div className="gallery-overlay">
                <span className="gallery-label">{img.label}</span>
              </div>
              <div className="gallery-view-btn"><i className="fa-solid fa-expand"></i> View</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="observe-fade">
          <SectionHeading eyebrow="Get in Touch" heading="Contact Us" highlight="Us" description="Have questions? We would love to hear from you." />
        </div>
        <div className="contact-container">
          <div className="contact-info observe-fade">
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div className="contact-details"><h4>Location</h4><p>Maldives Resort, Beautiful Island</p></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="contact-details"><h4>Phone</h4><p><a href={`tel:${phone}`}>+91 98765 43210</a></p></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="contact-details"><h4>Email</h4><p><a href={facebook} target="_blank" rel="noopener noreferrer">{email}</a></p></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-brands fa-facebook-f"></i></div>
              <div className="contact-details"><h4>Facebook</h4><p><a href={facebook} target="_blank" rel="noopener noreferrer">The DEN Maldives</a></p></div>
            </div>
            <div className="contact-cta">
              <a href={`https://mail.google.com/mail/?view=cm&to=${email}&su=Booking+-+The+DEN`} className="contact-cta-btn email" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-envelope"></i> Book via Email
              </a>
              <a href={`sms:${phone}?body=Hi%2C+I%27d+like+to+book.`} className="contact-cta-btn sms">
                <i className="fa-solid fa-comment-sms"></i> Book via SMS
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="contact-cta-btn facebook">
                <i className="fa-brands fa-facebook-f"></i> Message on Facebook
              </a>
            </div>
          </div>
          <div className="map-card observe-fade">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.123456789!2d73.22063481475793!3d3.207553697769538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b39e5e4e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2sMaldives!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo"><span className="footer-logo-text">THE DEN</span></div>
          <div className="footer-copyright">&copy; {new Date().getFullYear()} THE DEN. All rights reserved.</div>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#foods">Foods</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}