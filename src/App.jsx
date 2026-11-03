import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, ArrowRight, Baby, Clock3, HeartHandshake, MapPin, Menu, Phone, 
  ShieldCheck, Stethoscope, Syringe, X, Microscope, ScanLine, HeartPulse, Star, 
  ChevronRight, ChevronDown, Calendar, Users, Award, Sparkles, MessageCircle, 
  Mail, CheckCircle, Play, Zap
} from 'lucide-react';

const phone = '09559699599';
const whatsapp = '919559699599';

const doctors = [
  { name: 'Dr. Anvesh Amiti', degree: 'MBBS, DNB (Pediatrics), DM (Neonatology)', role: 'Pediatrics & Neonatology', initials: 'AA', specialty: 'Neonatal Expert' },
  { name: 'Dr. AVSS Swathi Vasanthi', degree: 'MBBS, MD (Radiology)', role: 'Radiology', initials: 'SV', specialty: 'Diagnostic Imaging' },
  { name: 'Dr. V. Divija', degree: 'MBBS, MS (OBG) · IVF Specialist', role: 'Obstetrics & Gynaecology', initials: 'VD', specialty: 'Women\'s Health' },
];

const services = [
  { icon: Baby, title: 'Pediatric Care', text: 'Comprehensive child-focused medical care for every stage of growing up, from infancy to adolescence.', color: '#167db5' },
  { icon: HeartPulse, title: 'Neonatal Care', text: 'Specialist NICU care for newborns with advanced monitoring and round-the-clock expert attention.', color: '#e11d48' },
  { icon: ScanLine, title: 'Radiology & Imaging', text: 'State-of-the-art diagnostic imaging including ultrasound, X-ray, and advanced scanning services.', color: '#7c3aed' },
  { icon: Microscope, title: 'Diagnostic Laboratory', text: 'Accurate, timely lab diagnostics supporting precise clinical decision-making.', color: '#059669' },
  { icon: Stethoscope, title: 'Women\'s Health', text: 'Dedicated obstetrics, gynaecology, and fertility services for expecting and new mothers.', color: '#db2777' },
  { icon: Syringe, title: 'Preventive & Vaccination', text: 'Complete immunization programs and wellness guidance for healthy childhood development.', color: '#d97706' },
];

const facilities = [
  { icon: ShieldCheck, title: '24/7 Emergency', text: 'Round-the-clock pediatric emergency care' },
  { icon: HeartPulse, title: 'NICU Excellence', text: 'Advanced neonatal intensive care unit' },
  { icon: Microscope, title: 'In-House Diagnostics', text: 'Full laboratory & imaging under one roof' },
  { icon: Users, title: 'Expert Team', text: 'Specialists dedicated exclusively to children' },
  { icon: Award, title: 'Trusted Care', text: '4.9★ rated by 400+ families' },
  { icon: Zap, title: 'Rapid Response', text: 'Quick triage and personalized attention' },
];

const faqs = [
  { q: 'What are the visiting hours?', a: 'We are open 24 hours for emergencies. Regular OPD hours are 9 AM – 8 PM daily. Please call for appointment slots.' },
  { q: 'Do you have a NICU?', a: 'Yes, Little Masters has a dedicated Neonatal Intensive Care Unit with advanced equipment and specialist neonatologists.' },
  { q: 'How can I book an appointment?', a: 'Call us at 095596 99599 or use the enquiry form. WhatsApp is also available for quick queries.' },
  { q: 'Which age groups do you treat?', a: 'We care for newborns, infants, children, and adolescents. We also provide maternal and women’s health services.' },
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.unobserve(el);
      }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`fade-up ${inView ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [['Home','home'],['About','about'],['Services','services'],['Doctors','doctors'],['Facilities','facilities'],['Contact','contact']];

  const submit = (e) => { 
    e.preventDefault(); 
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span><Clock3 size={14}/> Open 24 Hours · Emergency Care Available</span>
          <span><Phone size={14}/> <a href={`tel:${phone}`}>095596 99599</a></span>
        </div>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-wrap">
          <a className="brand" href="#home">
            <img src="/images/logo.jpg" alt="Little Masters Logo" className="brand-logo" />
            <span className="brand-text">
              <b>LITTLE MASTERS</b>
              <small>CHILDREN’S HOSPITAL & DIAGNOSTIC CENTRE</small>
            </span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-cta" href={`tel:${phone}`}><Phone size={16}/> Call Now</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg-orbs">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
          </div>
          <div className="wrap hero-grid">
            <div className="hero-content">
              <FadeUp>
                <span className="eyebrow">
                  <span className="pulse-dot" /> A Centre for Neonatal Excellence
                </span>
              </FadeUp>
              <FadeUp delay={100}>
                <h1>Gentle Care for <em>Little Masters</em></h1>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="hero-lead">
                  Srikakulam’s trusted children’s hospital offering advanced neonatal, pediatric, diagnostic, and women’s health services with warmth and expertise.
                </p>
              </FadeUp>
              <FadeUp delay={300}>
                <div className="hero-actions">
                  <a className="btn btn-primary" href={`tel:${phone}`}>
                    <Phone size={18}/> Call Hospital
                  </a>
                  <a className="btn btn-outline" href="#contact">
                    Book Appointment <ArrowRight size={18}/>
                  </a>
                </div>
              </FadeUp>
              <FadeUp delay={400}>
                <div className="hero-stats">
                  <div><b>24/7</b><span>Emergency</span></div>
                  <div><b>4.9★</b><span>Google Rating</span></div>
                  <div><b>400+</b><span>Happy Families</span></div>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={200} className="hero-visual">
              <div className="hero-image-frame">
                <img src="/images/hospital-signage.png" alt="Little Masters Hospital" />
                <div className="floating-badge">
                  <Sparkles size={16} /> Trusted by Families
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="quick-info">
          <div className="wrap quick-grid">
            {[
              { icon: Clock3, title: 'Open 24 Hours', sub: 'Always here for emergencies' },
              { icon: MapPin, title: 'Srikakulam', sub: 'Convenient location in AP' },
              { icon: HeartHandshake, title: 'Family-Centered', sub: 'Care with compassion' },
              { icon: ShieldCheck, title: 'Expert Specialists', sub: 'Dedicated pediatric team' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="quick-card">
                  <item.icon size={28} />
                  <div><b>{item.title}</b><small>{item.sub}</small></div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap about-grid">
            <FadeUp>
              <div className="about-photo">
                <img src="/images/logo.jpg" alt="Little Masters Logo" className="about-logo-img" />
                <div className="photo-caption">A Centre for Neonatal Excellence</div>
              </div>
            </FadeUp>
            <div>
              <FadeUp><span className="section-kicker">About Us</span></FadeUp>
              <FadeUp delay={100}><h2>Where Little Ones Receive <em>Masterful Care</em></h2></FadeUp>
              <FadeUp delay={200}>
                <p>Little Masters Children’s Hospital and Diagnostic Centre is dedicated to providing world-class pediatric and neonatal care in Srikakulam. Our team of specialists combines clinical excellence with a warm, child-friendly environment.</p>
              </FadeUp>
              <FadeUp delay={300}>
                <div className="about-points">
                  <div><CheckCircle size={18} color="#167db5"/> Advanced NICU & Pediatric Care</div>
                  <div><CheckCircle size={18} color="#167db5"/> Full Diagnostic & Imaging Centre</div>
                  <div><CheckCircle size={18} color="#167db5"/> 24×7 Emergency Support</div>
                  <div><CheckCircle size={18} color="#167db5"/> Compassionate Family Approach</div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="wrap">
            <div className="section-heading">
              <FadeUp><span className="section-kicker">Our Services</span></FadeUp>
              <FadeUp delay={100}><h2>Comprehensive Care for Every Little Master</h2></FadeUp>
            </div>
            <div className="service-grid">
              {services.map((s, i) => (
                <FadeUp key={s.title} delay={i * 80}>
                  <div className="service-card">
                    <div className="service-icon" style={{ background: `${s.color}15`, color: s.color }}>
                      <s.icon size={28} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="doctors" className="section">
          <div className="wrap">
            <div className="section-heading">
              <FadeUp><span className="section-kicker">Our Specialists</span></FadeUp>
              <FadeUp delay={100}><h2>Meet the Experts Behind the Care</h2></FadeUp>
            </div>
            <div className="doctor-grid">
              {doctors.map((d, i) => (
                <FadeUp key={d.name} delay={i * 100}>
                  <div className="doctor-card">
                    <div className="doctor-avatar">
                      <span>{d.initials}</span>
                    </div>
                    <div className="doctor-info">
                      <small>{d.specialty}</small>
                      <h3>{d.name}</h3>
                      <p className="degree">{d.degree}</p>
                      <span className="role">{d.role}</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="facilities" className="section facilities-section">
          <div className="wrap">
            <div className="section-heading center">
              <FadeUp><span className="section-kicker">Why Choose Us</span></FadeUp>
              <FadeUp delay={100}><h2>Facilities Designed for Little Patients</h2></FadeUp>
            </div>
            <div className="facility-grid">
              {facilities.map((f, i) => (
                <FadeUp key={f.title} delay={i * 70}>
                  <div className="facility-card">
                    <f.icon size={32} />
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap faq-wrap">
            <div className="section-heading">
              <FadeUp><span className="section-kicker">Questions</span></FadeUp>
              <FadeUp delay={100}><h2>Frequently Asked Questions</h2></FadeUp>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 50}>
                  <div className="faq-item">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{faq.q}</span>
                      <ChevronDown className={openFaq === i ? 'open' : ''} />
                    </button>
                    <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="wrap contact-grid">
            <div>
              <FadeUp><span className="section-kicker">Get in Touch</span></FadeUp>
              <FadeUp delay={100}><h2>We’re Here for Your Little Ones</h2></FadeUp>
              <div className="contact-details">
                <div className="contact-item">
                  <Phone size={20} />
                  <div>
                    <small>Call Us</small>
                    <a href={`tel:${phone}`}>095596 99599</a>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <div>
                    <small>Location</small>
                    <b>Srikakulam, Andhra Pradesh</b>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock3 size={20} />
                  <div>
                    <small>Availability</small>
                    <b>Open 24 Hours</b>
                  </div>
                </div>
              </div>
              <a className="btn btn-outline" style={{marginTop: 20}} target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Little+Masters+Children+Hospital+Srikakulam">
                Get Directions <ArrowRight size={16}/>
              </a>
              <a className="whatsapp-btn" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18}/> Chat on WhatsApp
              </a>
            </div>
            <FadeUp delay={150}>
              <form className="enquiry-card" onSubmit={submit}>
                <span className="form-kicker">QUICK ENQUIRY</span>
                <h3>How can we help?</h3>
                <p>Share your details and we’ll get back to you shortly.</p>
                <label>Your name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your name" /></label>
                <label>Phone number<input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Your contact number" /></label>
                <label>Message<textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Appointment or general enquiry" rows="3" /></label>
                <button className="btn btn-primary form-submit" type="submit">
                  Submit Enquiry <ArrowRight size={17}/>
                </button>
                {sent && <span className="sent-note">Thank you! We’ll contact you soon.</span>}
                <small className="form-note">This is a demo form. Connect to a real backend for production.</small>
              </form>
            </FadeUp>
          </div>
        </section>

        <section className="rating-band">
          <div className="wrap rating-inner">
            <div>
              <span className="rating-stars"><Star/><Star/><Star/><Star/><Star/></span>
              <b>4.9 / 5 Google Rating</b>
              <small>Based on 424 reviews from families</small>
            </div>
            <a href="https://www.google.com/search?q=Little+Masters+Hospital+Srikakulam+reviews" target="_blank" rel="noreferrer">
              View Google Reviews <ArrowRight size={16}/>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-main">
          <a className="brand brand-footer" href="#home">
            <img src="/images/logo.jpg" alt="Logo" className="brand-logo small" />
            <span className="brand-text">
              <b>LITTLE MASTERS</b>
              <small>CHILDREN’S HOSPITAL & DIAGNOSTIC CENTRE</small>
            </span>
          </a>
          <p>A Centre for Neonatal Excellence<br/>Srikakulam, Andhra Pradesh</p>
          <a className="footer-call" href={`tel:${phone}`}><Phone size={16}/> 095596 99599</a>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Little Masters Children’s Hospital. All rights reserved.</span>
          <span>Advanced pediatric care with compassion.</span>
        </div>
      </footer>

      <a className="mobile-call" href={`tel:${phone}`}><Phone size={18}/> Call Hospital</a>
      <a className="whatsapp-float" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>
    </>
  );
}

export default App;
