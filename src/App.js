import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const galleryImages = [
    { src: "/images/2.avif", alt: "Interior 1" },
    { src: "/images/3.avif", alt: "Interior 2" },
    { src: "/images/4.avif", alt: "Interior 3" },
    { src: "/images/5.avif", alt: "Interior 4" },
    { src: "/images/6.avif", alt: "Interior 5" },
    { src: "/images/7.avif", alt: "Interior 6" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e) => {
    if (modalOpen) {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="App">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <h1>Residencial Blanes</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Inicio</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>Nosotros</a></li>
              <li><a href="#facilities" onClick={() => scrollToSection('facilities')}>Instalaciones</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Servicios</a></li>
              <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonios</a></li>
              <li><a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <video autoPlay muted loop>
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-text-block">
              <h2>Residencial Blanes</h2>
              <p>Un hogar donde tu ser querido se siente cuidado, respetado y acompañado</p>
              <div className="hero-location">
                <span className="location-icon">📍</span>
                <span>Montevideo, Uruguay</span>
              </div>
              <div className="hero-buttons">
                <button className="cta-button hero-button primary" onClick={() => scrollToSection('contact')}>Agendá tu visita</button>
                <button className="cta-button hero-button secondary" onClick={() => scrollToSection('about')}>Conocé más</button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-header">
              <div className="about-badge">
                <span className="badge-icon">🏠</span>
                <span>Más de 10 años cuidando</span>
              </div>
              <h2>¿Quiénes somos?</h2>
              <p className="about-subtitle">Una familia dedicada al bienestar de los adultos mayores</p>
            </div>
            
            <div className="about-content">
              <div className="about-text">
                <div className="about-story">
                  <div className="story-item">
                    <div className="story-icon">
                      <span>🌟</span>
                    </div>
                    <div className="story-content">
                      <h3>Nuestro propósito</h3>
                      <p>
                        En Residencial Blanes abrimos nuestras puertas hace más de 10 años con un único propósito: ofrecer un hogar real y humano para los adultos mayores que necesitan compañía, cuidado y respeto en esta etapa de su vida.
                      </p>
                    </div>
                  </div>
                  
                  <div className="story-item">
                    <div className="story-icon">
                      <span>❤️</span>
                    </div>
                    <div className="story-content">
                      <h3>Vocación familiar</h3>
                      <p>
                        Fundado por una familia con vocación por el bienestar de las personas, Blanes nació como una casa de puertas abiertas, donde cada residente es tratado con cercanía, dignidad y profesionalismo. Sabemos que dejar a un ser querido en manos de otros no es una decisión fácil, por eso trabajamos cada día para ganarnos la confianza de las familias.
                      </p>
                    </div>
                  </div>
                  
                  <div className="story-item">
                    <div className="story-icon">
                      <span>🤝</span>
                    </div>
                    <div className="story-content">
                      <h3>Equipo comprometido</h3>
                      <p>
                        Contamos con un equipo capacitado y comprometido que combina experiencia médica, atención personalizada y un profundo sentido humano. Cada rincón de nuestra casa está pensado para generar un ambiente cálido, seguro y activo, donde los mayores puedan sentirse acompañados y valorados.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="about-quote">
                  <blockquote>
                    "Hoy, después de más de una década de trabajo, seguimos creciendo con el mismo compromiso: cuidar como en casa, y estar presentes como una familia extendida."
                  </blockquote>
                </div>
                
                <div className="about-actions">
                  <button className="cta-button primary" onClick={() => scrollToSection('contact')}>Hablá con nosotros</button>
                  <button className="cta-button secondary" onClick={() => scrollToSection('facilities')}>Ver instalaciones</button>
                </div>
              </div>
              
              <div className="about-visual">
                <div className="about-image-container">
                  <img src="/images/1.avif" alt="Residencial Blanes" />

                </div>
                
                <div className="about-stats">
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Años de experiencia</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Atención continua</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Compromiso familiar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="facilities" className="facilities">
          <div className="container">
            <h2>Nuestras instalaciones</h2>
            <p className="facilities-intro">Residencial Blanes cuenta con espacios amplios, cómodos y adaptados a las necesidades de cada residente. Nuestro objetivo es que se sientan realmente en casa, con toda la seguridad y el confort necesarios.</p>
            <div className="facilities-features">
              <div className="feature-item">
                <span className="feature-icon">🏡</span>
                <span>Habitaciones privadas y compartidas</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🍽️</span>
                <span>Comedor con alimentos caseros y supervisión nutricional</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌳</span>
                <span>Espacios verdes y jardín interno</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛋️</span>
                <span>Salón de descanso y actividades recreativas</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚻</span>
                <span>Baños adaptados con accesibilidad total</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛏️</span>
                <span>Camas ortopédicas y mobiliario funcional</span>
              </div>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => openModal(index)}>
                  <img src={image.src} alt={image.alt} />
                  <div className="gallery-overlay">
                    <span className="zoom-icon">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="services-content">
              <div className="services-text">
                <h2>Servicios que ofrecemos</h2>
                <p className="services-intro">En Residencial Blanes brindamos un cuidado integral que abarca lo físico, emocional y social, con un enfoque humano y personalizado.</p>
                <ul>
                  <li><span className="service-icon">👩‍⚕️</span> Atención de enfermería 24 horas</li>
                  <li><span className="service-icon">🩺</span> Supervisión médica periódica</li>
                  <li><span className="service-icon">🍽️</span> Alimentación completa, casera y adaptada</li>
                  <li><span className="service-icon">💊</span> Control de medicación diario</li>
                  <li><span className="service-icon">🧼</span> Asistencia en higiene y cuidado personal</li>
                  <li><span className="service-icon">🎵</span> Musicoterapia grupal</li>
                  <li><span className="service-icon">🧘‍♂️</span> Fisioterapia y gimnasia suave</li>
                  <li><span className="service-icon">🎨</span> Actividades recreativas y de estimulación cognitiva</li>
                  <li><span className="service-icon">🧘‍♀️</span> Acompañamiento emocional y espiritual</li>
                  <li><span className="service-icon">🔒</span> Ambiente seguro y adaptado para todas las edades</li>
                </ul>
                <p className="services-quote">"Cuidamos a cada persona como nos gustaría que cuidaran a nuestros propios padres."</p>
              </div>
              <div className="services-image">
                <img src="/images/8.avif" alt="Servicios" />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2>Testimonios</h2>
            <div className="testimonials-grid">
              <div className="testimonial-item">
                <p>"Mi madre volvió a sonreír desde que está en Blanes. No solo la cuidan bien, la hacen sentir querida."</p>
                <cite>— Ana, hija de una residente</cite>
              </div>
              <div className="testimonial-item">
                <p>"La tranquilidad que tengo sabiendo que mi padre está en buenas manos no tiene precio."</p>
                <cite>— Gustavo, familiar</cite>
              </div>
              <div className="testimonial-item">
                <p>"El equipo es excelente, muy humano y dedicado. Se nota que trabajan con el corazón."</p>
                <cite>— María Elena, sobrina</cite>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us">
          <div className="container">
            <h2>¿Por qué elegirnos?</h2>
            <h3>Porque no es solo un lugar: es un hogar.</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <span>Trato cálido, familiar y cercano</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <span>Personal capacitado y comprometido</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <span>Comunicación constante con la familia</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <span>Instalaciones seguras y adaptadas</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <span>Más de 10 años de experiencia cuidando con amor</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✅</span>
                <span>Actividades recreativas y estimulación cognitiva</span>
              </div>
            </div>
            <p className="tagline">"En Blanes no cuidamos pacientes, cuidamos personas."</p>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <h2>Preguntas frecuentes</h2>
            <div className="faq-content">
              <div className="faq-text">
                <div className="faq-item">
                  <h3>¿Puedo visitar antes de decidir?</h3>
                  <p>Sí, podés agendar una visita en el día y horario que te quede más cómodo. Nos encantará recibirte.</p>
                </div>
                <div className="faq-item">
                  <h3>¿Qué tipo de personas pueden ingresar?</h3>
                  <p>Recibimos adultos mayores autoválidos o con dependencia leve o moderada. Adaptamos el cuidado a cada caso.</p>
                </div>
                <div className="faq-item">
                  <h3>¿Puedo visitar a mi familiar todos los días?</h3>
                  <p>Sí, nuestras visitas son abiertas dentro del horario definido, con mucha flexibilidad y respeto por los vínculos.</p>
                </div>
                <div className="faq-item">
                  <h3>¿Qué incluye la estadía?</h3>
                  <p>Incluye alojamiento, 4 comidas diarias, higiene, medicación, atención de salud y actividades recreativas.</p>
                </div>
                <div className="faq-item">
                  <h3>¿Tienen médico en el lugar?</h3>
                  <p>Contamos con control médico regular y asistencia de enfermería permanente. Derivamos a especialistas cuando es necesario.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-background">
            <img src="/images/9.jpg" alt="Contact Background" className="contact-bg-image" />
            <div className="contact-overlay"></div>
          </div>
          <div className="container">
            <div className="contact-header">
              <h2>¿Querés conocer Residencial Blanes?</h2>
              <p className="contact-intro">Te invitamos a visitarnos y descubrir por qué tantas familias confían en nosotros.</p>
            </div>
            
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Dirección</h4>
                    <p>Blanes 1234 - Montevideo</p>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h4>Teléfono / WhatsApp</h4>
                    <p>094 123 456</p>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-details">
                    <h4>Horarios de atención</h4>
                    <p>Lunes a sábado de 9 a 18 hs</p>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>contacto@residencialblanes.com</p>
                  </div>
                </div>
                
                <div className="contact-cta">
                  <h3>¡Agendá tu visita hoy!</h3>
                  <p>Conocé nuestras instalaciones y conversá con nuestro equipo sin compromiso.</p>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Envianos tu consulta</h3>
                  
                  {submitStatus === 'success' && (
                    <div className="form-message success">
                      <span>✅ ¡Gracias! Tu consulta fue enviada exitosamente. Nos pondremos en contacto contigo pronto.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-message error">
                      <span>❌ Hubo un error al enviar tu consulta. Por favor, intentá nuevamente.</span>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Nombre completo" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Teléfono" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="message"
                      placeholder="Cuéntanos sobre tu consulta..." 
                      rows="5" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Enviando...</span>
                        <span className="btn-icon">⏳</span>
                      </>
                    ) : (
                      <>
                        <span>Agendá tu visita</span>
                        <span className="btn-icon">→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Residencial Blanes</h3>
              <p>📍 Blanes 1234 - Montevideo</p>
              <p>📞 Teléfono / WhatsApp: 094 123 456</p>
              <p>🕒 Lunes a sábado de 9 a 18 hs</p>
            </div>
            <div className="footer-contact">
              <p>&copy; 2024 Residencial Blanes. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={prevImage}>‹</button>
            <button className="modal-nav modal-next" onClick={nextImage}>›</button>
            <div className="modal-image-container">
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].alt} 
                className="modal-image"
              />
            </div>
            <div className="modal-info">
              <span className="modal-counter">
                {currentImageIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;