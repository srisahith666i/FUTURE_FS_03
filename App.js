import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  CalendarDays,
  Phone,
  MessageCircle,
  HeartPulse,
  Syringe,
  Stethoscope,
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
  ArrowRight,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const services = [
  {
    icon: <Stethoscope className="h-7 w-7" />,
    title: "General Consultation",
    desc: "Comprehensive health check-ups and personalized consultations with experienced physicians.",
  },
  {
    icon: <HeartPulse className="h-7 w-7" />,
    title: "Cardiology",
    desc: "Advanced cardiac care with modern diagnostic support and patient-focused treatment plans.",
  },
  {
    icon: <Syringe className="h-7 w-7" />,
    title: "Vaccination",
    desc: "Complete immunization services for children, adults, and senior citizens.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Preventive Care",
    desc: "Early screenings, wellness plans, and preventive services for lifelong health.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Family Medicine",
    desc: "Trusted healthcare for every stage of life with compassionate family-centered care.",
  },
  {
    icon: <CalendarDays className="h-7 w-7" />,
    title: "Diagnostic Services",
    desc: "Reliable testing and health assessments with efficient scheduling and reporting.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1771574204208-b47e2d863bc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3IlMjBicmlnaHR8ZW58MHx8fHwxNzc1MzkzNjc4fDA&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/5827294/pexels-photo-5827294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/7789620/pexels-photo-7789620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/6762866/pexels-photo-6762866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://static.prod-images.emergentagent.com/jobs/028954cc-8890-4246-bb26-8e17e8340b0f/images/49f20c29ef47b9510ec03ea74db5a712352d98b899371d67a72922012963db63.png",
];

const testimonials = [
  {
    quote:
      "The doctors were incredibly professional and the clinic environment felt calm, clean, and welcoming.",
    name: "Sarah Johnson",
  },
  {
    quote:
      "Booking an appointment was simple and the staff were kind, efficient, and reassuring throughout.",
    name: "Michael Lee",
  },
  {
    quote:
      "Excellent patient care and modern facilities. I felt genuinely listened to and cared for.",
    name: "Priya Sharma",
  },
];

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting /api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container-main flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3" data-testid="logo-link">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
              H
            </div>
            <div>
              <h3 className="font-heading text-2xl leading-none">HealthCare Clinic</h3>
              <p className="text-sm text-muted-foreground">Your Wellness Partner</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-[17px]">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="hidden md:flex">
            <a
              href="#appointment"
              className="btn-primary"
              data-testid="header-book-now-button"
            >
              <CalendarDays className="h-5 w-5" />
              Book Now
            </a>
          </div>

          <button
            className="md:hidden rounded-full border border-border p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="mobile-menu-button"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="container-main flex flex-col gap-4 py-5">
              <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              <a
                href="#appointment"
                className="btn-primary w-fit"
                onClick={() => setMobileOpen(false)}
              >
                <CalendarDays className="h-5 w-5" />
                Book Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="section-padding">
        <div className="container-main grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="overline mb-6 text-primary">Premium Healthcare Services</p>
            <h1 className="hero-title max-w-xl">
              Your Health,
              <br />
              Our Priority
            </h1>
            <p className="hero-sub mt-8 max-w-2xl">
              Experience world-class medical care with our team of expert doctors
              and state-of-the-art facilities. We’re committed to providing
              compassionate, personalized healthcare for you and your family.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#appointment"
                className="btn-primary"
                data-testid="hero-book-appointment-button"
              >
                Book Appointment
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                data-testid="hero-whatsapp-button"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://static.prod-images.emergentagent.com/jobs/028954cc-8890-4246-bb26-8e17e8340b0f/images/49f20c29ef47b9510ec03ea74db5a712352d98b899371d67a72922012963db63.png"
              alt="Clinic reception"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-[hsl(var(--muted))]/45">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <p className="overline mb-4 text-primary">Medical Expertise</p>
            <h2 className="section-title">Our Medical Services</h2>
            <p className="section-subtitle mt-5">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <div key={i} className="service-card" data-testid={`service-card-${i}`}>
                <div className="icon-wrap">{service.icon}</div>
                <h3 className="font-heading text-3xl">{service.title}</h3>
                <p className="mt-5 text-lg leading-9 text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="container-main grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <img
              src="https://images.pexels.com/photos/6762866/pexels-photo-6762866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Doctor"
              className="about-image"
            />
          </div>

          <div>
            <p className="overline mb-5 text-primary">About Us</p>
            <h2 className="section-title max-w-xl">
              Trusted Healthcare Provider Since 2010
            </h2>
            <p className="section-subtitle mt-8">
              At HealthCare Clinic, we combine medical excellence with compassionate
              care. Our team of board-certified physicians and healthcare
              professionals is dedicated to providing personalized treatment plans
              for every patient.
            </p>

            <div className="mt-10 space-y-6">
              <div className="feature-row">
                <div className="icon-wrap small"><ShieldCheck className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-heading text-2xl">Expert Doctors</h4>
                  <p className="text-muted-foreground text-lg">
                    Board-certified physicians with years of experience
                  </p>
                </div>
              </div>

              <div className="feature-row">
                <div className="icon-wrap small"><Users className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-heading text-2xl">10,000+ Patients</h4>
                  <p className="text-muted-foreground text-lg">
                    Trusted by thousands of satisfied patients
                  </p>
                </div>
              </div>

              <div className="feature-row">
                <div className="icon-wrap small"><Clock3 className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-heading text-2xl">24/7 Emergency</h4>
                  <p className="text-muted-foreground text-lg">
                    Round-the-clock emergency medical services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-padding bg-[hsl(var(--secondary))]/60">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <p className="overline mb-4 text-primary">Clinic Gallery</p>
            <h2 className="section-title">A Warm, Modern Healing Space</h2>
            <p className="section-subtitle mt-5">
              Designed to provide comfort, trust, and peace of mind from the moment you arrive.
            </p>
          </div>

          <div className="gallery-grid mt-16">
            {gallery.map((img, i) => (
              <div key={i} className={`gallery-item gallery-${i + 1}`}>
                <img src={img} alt={`Clinic gallery ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <p className="overline mb-4 text-primary">Patient Testimonials</p>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial-card" data-testid={`testimonial-card-${i}`}>
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="font-heading text-3xl leading-[1.45] text-foreground/90">
                  “{item.quote}”
                </p>
                <p className="mt-8 text-lg text-muted-foreground">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="section-padding bg-[hsl(var(--secondary))]/70">
        <div className="container-main">
          <div className="appointment-grid">
            <div className="space-y-7">
              <div className="info-card">
                <div className="icon-wrap small"><Clock3 className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-heading text-3xl">Opening Hours</h4>
                  <p className="mt-3 text-lg text-muted-foreground leading-9">
                    Mon - Fri: 9:00 AM - 8:00 PM <br />
                    Saturday: 9:00 AM - 6:00 PM <br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-wrap small"><MapPin className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-heading text-3xl">Location</h4>
                  <p className="mt-3 text-lg text-muted-foreground leading-9">
                    123 Healthcare Avenue, <br />
                    Medical District, <br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>

            <form className="appointment-form" data-testid="appointment-form">
              <div className="form-grid">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                    data-testid="appointment-name-input"
                  />
                </div>

                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="form-input"
                    data-testid="appointment-email-input"
                  />
                </div>

                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="form-input"
                    data-testid="appointment-phone-input"
                  />
                </div>

                <div>
                  <label className="form-label">Select Service *</label>
                  <select className="form-input" data-testid="appointment-service-select">
                    <option>Choose a service</option>
                    <option>General Consultation</option>
                    <option>Cardiology</option>
                    <option>Vaccination</option>
                    <option>Family Medicine</option>
                    <option>Diagnostic Services</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Preferred Date *</label>
                  <input
                    type="date"
                    className="form-input"
                    data-testid="appointment-date-input"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label className="form-label">Additional Message (Optional)</label>
                <textarea
                  rows="5"
                  placeholder="Any specific concerns or questions?"
                  className="form-textarea"
                  data-testid="appointment-message-textarea"
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                data-testid="appointment-submit-button"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* EMERGENCY + MAP */}
      <section id="contact" className="emergency-section">
        <div className="container-main emergency-grid">
          <div>
            <p className="overline mb-5 text-primary-foreground/80">Emergency Support</p>
            <h2 className="section-title text-primary-foreground max-w-xl">
              Need Immediate Medical Assistance?
            </h2>
            <p className="mt-6 text-lg leading-9 text-primary-foreground/80 max-w-xl">
              Our team is here to support urgent care needs with compassion,
              speed, and professional attention whenever you need us.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+911234567890"
                className="btn-emergency"
                data-testid="emergency-call-button"
              >
                <Phone className="h-5 w-5" />
                Emergency Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-light"
                data-testid="emergency-whatsapp-button"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="map-card">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Times%20Square,%20New%20York&z=14&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container-main">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-heading text-4xl text-white">HealthCare Clinic</h3>
              <p className="mt-5 text-lg leading-9 text-white/75">
                Providing compassionate, professional healthcare services to our
                community since 2010.
              </p>
            </div>

            <div>
              <h4 className="font-heading text-3xl text-white">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-3xl text-white">Services</h4>
              <ul className="footer-links">
                <li>General Consultation</li>
                <li>Cardiology</li>
                <li>Vaccination</li>
                <li>Diagnostic Services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-3xl text-white">Connect With Us</h4>
              <div className="mt-6 flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="/" className="social-icon">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-center text-base text-white/65">
            © 2025 HealthCare Clinic. All rights reserved. Built for Future Interns Task 3.
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;