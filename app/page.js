'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const email = 'thedenmaldives@gmail.com';
const phone = '+639150560463';
const facebook = 'https://www.facebook.com/people/The-Den/61552914748829/';

const packages = [
  {
    id: 1,
    title: 'Chicken Salad',
    category: 'Salad',
    image: '/images/03.jpg',
    price: '₱135',
    perNight: '/ order',
    features: [
      { icon: 'fa-leaf',     text: 'Fresh Greens'       },
      { icon: 'fa-drumstick-bite', text: 'Grilled Chicken'  },
      { icon: 'fa-carrot',   text: 'Mixed Vegetables'   },
      { icon: 'fa-bowl-food', text: 'Special Dressing'  },
    ],
    emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+Chicken+Salad+-+The+DEN`,
    smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+order+Chicken+Salad.`,
  },
  {
    id: 2,
    title: 'Herb Chicken Meal Prep',
    category: 'Meal Prep',
    image: '/images/05.jpg',
    price: '₱145',
    perNight: '/ box',
    features: [
      { icon: 'fa-drumstick-bite', text: 'Herb-Seasoned Chicken' },
      { icon: 'fa-bowl-rice',  text: 'Steamed Rice'        },
      { icon: 'fa-leaf',       text: 'Garden Veggies'      },
      { icon: 'fa-fire',       text: 'Perfectly Cooked'    },
    ],
    emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+Herb+Chicken+-+The+DEN`,
    smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+order+Herb+Chicken+Meal+Prep.`,
  },
  {
    id: 3,
    title: 'Classic Meal Prep Box',
    category: 'Meal Prep',
    image: '/images/21.jpg',
    price: 'Pre-Order',
    perNight: '',
    features: [
      { icon: 'fa-box',      text: 'Packed Fresh Daily'  },
      { icon: 'fa-bowl-rice', text: 'Rice + Protein'    },
      { icon: 'fa-carrot',   text: 'Assorted Veggies'   },
      { icon: 'fa-leaf',     text: 'Healthy & Balanced' },
    ],
    emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+Classic+Meal+Prep+Box+-+The+DEN`,
    smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+pre-order+a+Classic+Meal+Prep+Box.`,
  },
  {
    id: 4,
    title: 'The DEN Bowl',
    category: 'Bowl',
    image: '/images/22.jpg',
    price: 'Ask Us',
    perNight: '',
    features: [
      { icon: 'fa-bowl-food', text: 'Loaded Bowl'        },
      { icon: 'fa-egg',       text: 'Topped with Egg'    },
      { icon: 'fa-pepper-hot', text: 'Spicy Option'      },
      { icon: 'fa-leaf',      text: 'Fresh Toppings'     },
    ],
    emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+The+DEN+Bowl+-+The+DEN`,
    smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+order+The+DEN+Bowl.`,
  },
  {
    id: 5,
    title: 'Blueberry Dessert Cup',
    category: 'Dessert',
    image: '/images/17.jpg',
    price: 'Pre-Order',
    perNight: '',
    features: [
      { icon: 'fa-ice-cream',  text: 'Creamy Base'        },
      { icon: 'fa-seedling',   text: 'Blueberry Topping'  },
      { icon: 'fa-star',       text: 'House Special'      },
      { icon: 'fa-box',        text: 'Cup-Packed'         },
    ],
    emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+Blueberry+Dessert+-+The+DEN`,
    smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+pre-order+Blueberry+Dessert+Cups.`,
  },
  {
    id: 6,
    title: 'Banana Pudding Cup',
    category: 'Dessert',
    image: '/images/18.jpg',
    price: 'Pre-Order',
    perNight: '',
    features: [
      { icon: 'fa-ice-cream',  text: 'Creamy Custard'     },
      { icon: 'fa-cookie',     text: 'Banana & Crumble'   },
      { icon: 'fa-star',       text: 'Customer Favorite'  },
      { icon: 'fa-box',        text: 'Cup-Packed'         },
    ],
    emailLink: `https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+Banana+Pudding+-+The+DEN`,
    smsLink: `sms:${phone}?body=Hi%2C+I%27d+like+to+pre-order+Banana+Pudding+Cups.`,
  },
];

const galleryImages = [
  { src: '/images/01.png', label: 'Delicious Meal Prep'   },
  { src: '/images/03.jpg', label: 'Chicken Salad'          },
  { src: '/images/04.jpg', label: 'Fresh & Healthy Salad'  },
  { src: '/images/05.jpg', label: 'Herb Chicken'           },
  { src: '/images/06.jpg', label: 'Chicken Salad Pre-Order'},
  { src: '/images/14.jpg', label: 'Orders Ready to Go'     },
  { src: '/images/15.jpg', label: 'Packed with Care'       },
  { src: '/images/16.jpg', label: 'Our Signature Dressings'},
  { src: '/images/17.jpg', label: 'Blueberry Dessert Cup'  },
  { src: '/images/18.jpg', label: 'Banana Pudding Cup'     },
  { src: '/images/19.jpg', label: 'Hearty Meal Box'        },
  { src: '/images/22.jpg', label: 'The DEN Bowl'           },
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
          <span className="hero-eyebrow">Fresh. Healthy. Delicious.</span>
          <h1 className="hero-title">THE DEN</h1>
          <p className="hero-subtitle">Freshly prepared meal boxes, salads & desserts — ready for pickup or delivery.</p>
          <div className="hero-buttons">
            <a href={`https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+The+DEN`} className="hero-btn hero-btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i> Order via Email
            </a>
            <a href={`sms:${phone}?body=Hi%2C+I%27d+like+to+order+from+The+DEN.`} className="hero-btn hero-btn-secondary">
              <i className="fa-solid fa-comment-sms"></i> Order via SMS
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section section-light">
        <div className="observe-fade">
          <SectionHeading eyebrow="Welcome to THE DEN" heading="Food Made with Love" highlight="Love" description="We prepare fresh, healthy meals daily — crafted with real ingredients and packed with care." />
        </div>
        <div className="about-content observe-fade">
          <div className="about-image">
            <Image src="/images/15.jpg" alt="The DEN Food" width={500} height={400} />
          </div>
          <div className="about-text">
            <p>THE DEN is a homegrown food and drinks brand serving freshly prepared meal prep boxes, healthy salads, and indulgent desserts. Every item is cooked to order and packed fresh daily.</p>
            <p>Whether you're grabbing a quick Chicken Salad or pre-ordering our Blueberry Dessert Cups, we make sure every bite is worth it. Open Monday–Saturday, 7:00 AM to 7:00 PM.</p>
          </div>
        </div>
      </section>

      <section id="foods" className="section section-dark">
        <div className="observe-fade">
          <SectionHeading eyebrow="Our Menu" heading="Fresh Meals & Packages" highlight="Meals" description="From healthy salads to hearty meal prep boxes — order online or pre-order for pickup." />
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
                    <i className="fa-solid fa-envelope"></i> Order via Email
                  </a>
                  <a href={pkg.smsLink} className="package-btn package-btn-sms">
                    <i className="fa-solid fa-comment-sms"></i> Order via SMS
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="observe-fade">
          <SectionHeading eyebrow="Our Gallery" heading="A Taste of THE DEN" highlight="Taste" description="A look at the food, flavors, and freshness we bring to every order." />
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
          <SectionHeading eyebrow="Get in Touch" heading="Find & Contact Us" highlight="Contact" description="Have a question or want to place an order? Reach out and we'll get back to you." />
        </div>
        <div className="contact-container">
          <div className="contact-info observe-fade">
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div className="contact-details"><h4>Location</h4><p>Quezon City, Philippines</p></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="contact-details"><h4>Phone</h4><p><a href={`tel:${phone}`}>+63 915 056 0463</a></p></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="contact-details"><h4>Email</h4><p><a href={`mailto:${email}`}>{email}</a></p></div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><i className="fa-brands fa-facebook-f"></i></div>
              <div className="contact-details"><h4>Facebook</h4><p><a href={facebook} target="_blank" rel="noopener noreferrer">facebook.com/The-Den</a></p></div>
            </div>
            <div className="contact-cta">
              <a href={`https://mail.google.com/mail/?view=cm&to=${email}&su=Order+-+The+DEN`} className="contact-cta-btn email" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-envelope"></i> Order via Email
              </a>
              <a href={`sms:${phone}?body=Hi%2C+I%27d+like+to+order.`} className="contact-cta-btn sms">
                <i className="fa-solid fa-comment-sms"></i> Order via SMS
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="contact-cta-btn facebook">
                <i className="fa-brands fa-facebook-f"></i> Message on Facebook
              </a>
            </div>
          </div>
          <div className="map-card observe-fade">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123978.19764455888!2d121.02200!3d14.67628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0e60b944ef7%3A0x9d0a1d3a9b9b7e7e!2sQuezon+City%2C+Metro+Manila%2C+Philippines!5e0!3m2!1sen!2sph!4v1680000000000!5m2!1sen!2sph" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo"><span className="footer-logo-text">THE DEN</span></div>
          <div className="footer-copyright">&copy; {new Date().getFullYear()} THE DEN Food and Drinks. All rights reserved.</div>
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