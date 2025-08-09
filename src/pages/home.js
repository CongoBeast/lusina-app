import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Badge
} from 'react-bootstrap';
import { 
  Globe, 
  School, 
  Languages, 
  GraduationCap,
  BookOpen,
  Users
} from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'School Management',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation request:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const customStyles = {
    primaryGreen: '#0A400C',
    mediumGreen: '#819067',
    lightGreen: '#B1AB86',
    cream: '#FEFAE0',
    
    navbar: {
      backgroundColor: '#0A400C',
      boxShadow: '0 2px 10px rgba(10, 64, 12, 0.1)'
    },
    
    heroSection: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '70vh',
      color: '#FEFAE0',
      position: 'relative',
      overflow: 'hidden'
    },
    
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(10, 64, 12, 0.85) 0%, rgba(129, 144, 103, 0.75) 100%)',
      zIndex: 1
    },
    
    heroContent: {
      position: 'relative',
      zIndex: 2,
      paddingTop: '80px',
      paddingBottom: '80px'
    },
    
    consultationCard: {
      backgroundColor: '#FEFAE0',
      border: 'none',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(10, 64, 12, 0.15)',
      position: 'relative',
      zIndex: 3,
      marginTop: '-50px'
    },
    
    primaryButton: {
      backgroundColor: '#0A400C',
      borderColor: '#0A400C',
      padding: '12px 30px',
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    },
    
    secondaryButton: {
      backgroundColor: '#819067',
      borderColor: '#819067',
      color: '#FEFAE0'
    },
    
    serviceCard: {
      border: 'none',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(10, 64, 12, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%'
    },
    
    serviceIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: '#B1AB86',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      color: '#0A400C',
      margin: '0 auto 20px'
    },
    
    sectionTitle: {
      color: '#0A400C',
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '20px'
    },
    
    sectionSubtitle: {
      color: '#819067',
      fontSize: '1.2rem',
      marginBottom: '50px'
    }
  };

  return (
    <div>
      {/* Custom CSS */}
      <style jsx>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(10, 64, 12, 0.2) !important;
        }
        
        .btn-primary:hover {
          background-color: #819067 !important;
          border-color: #819067 !important;
          transform: translateY(-2px);
        }
        
        .navbar-brand {
          font-size: 1.8rem !important;
          font-weight: 700 !important;
        }
        
        .nav-link {
          font-weight: 500 !important;
          transition: color 0.3s ease !important;
        }
        
        .nav-link:hover {
          color: #B1AB86 !important;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 30px;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>

      {/* Navigation */}
      {/* <Navbar expand="lg" style={customStyles.navbar} variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ color: customStyles.cream }}>
            <Globe className="me-2" size={24} />
            EduGlobal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" style={{ color: customStyles.cream }}>Home</Nav.Link>
              <Nav.Link href="#services" style={{ color: customStyles.cream }}>Our Services</Nav.Link>
              <Nav.Link href="#about" style={{ color: customStyles.cream }}>About</Nav.Link>
              <Nav.Link href="/#/staff" style={{ color: customStyles.cream }}>Our Staff</Nav.Link>
              <Nav.Link href="#contact" style={{ color: customStyles.cream }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Hero Section */}
      <section id="home" style={customStyles.heroSection}>
        <div style={customStyles.heroOverlay}></div>
        <Container style={customStyles.heroContent}>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="hero-title">
                Transform Education
                <br />
                <span style={{ color: customStyles.lightGreen }}>Across Borders</span>
              </h1>
              <p className="hero-subtitle">
                Expert international education management, translation services, 
                and educator training programs designed to bridge cultures and 
                expand learning opportunities worldwide.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button 
                  style={customStyles.primaryButton} 
                  size="lg"
                  onClick={() => document.getElementById('consultation').scrollIntoView()}
                >
                  Get Free Consultation
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  style={{ borderColor: customStyles.lightGreen, color: customStyles.lightGreen }}
                >
                  Learn More
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div style={{ 
                fontSize: '120px', 
                opacity: 0.4,
                color: customStyles.cream 
              }}>
                <BookOpen size={200} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Consultation Form Card */}
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <Card style={customStyles.consultationCard} id="consultation">
              <Card.Body className="p-4">
                <h3 className="text-center mb-4" style={{ color: customStyles.primaryGreen }}>
                  Book Your Free Consultation
                </h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: customStyles.primaryGreen, fontWeight: '600' }}>
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{ borderColor: customStyles.lightGreen }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: customStyles.primaryGreen, fontWeight: '600' }}>
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{ borderColor: customStyles.lightGreen }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: customStyles.primaryGreen, fontWeight: '600' }}>
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          style={{ borderColor: customStyles.lightGreen }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: customStyles.primaryGreen, fontWeight: '600' }}>
                          Service of Interest
                        </Form.Label>
                        <Form.Select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          style={{ borderColor: customStyles.lightGreen }}
                        >
                          <option value="School Management">School Management</option>
                          <option value="Translation Services">Translation Services</option>
                          <option value="Educator Training">Educator Training</option>
                          <option value="All Services">All Services</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: customStyles.primaryGreen, fontWeight: '600' }}>
                      Tell us about your needs
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ borderColor: customStyles.lightGreen }}
                      placeholder="Describe your educational goals and challenges..."
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      style={customStyles.primaryButton}
                      size="lg"
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <section id="services" className="py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '80px' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h2 style={customStyles.sectionTitle}>Our Services</h2>
              <p style={customStyles.sectionSubtitle}>
                Comprehensive solutions for international education excellence
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="service-card" style={customStyles.serviceCard}>
                <Card.Body className="p-4 text-center">
                  <div style={customStyles.serviceIcon}>
                    <School size={28} />
                  </div>
                  <h4 style={{ color: customStyles.primaryGreen, marginBottom: '15px' }}>
                    School Management
                  </h4>
                  <p style={{ color: customStyles.mediumGreen }}>
                    Complete administrative solutions for international schools, 
                    including curriculum development, staff management, and 
                    regulatory compliance.
                  </p>
                  <Badge bg="light" text="dark" style={{ backgroundColor: customStyles.lightGreen }}>
                    Full Service
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="service-card" style={customStyles.serviceCard}>
                <Card.Body className="p-4 text-center">
                  <div style={customStyles.serviceIcon}>
                    <Languages size={28} />
                  </div>
                  <h4 style={{ color: customStyles.primaryGreen, marginBottom: '15px' }}>
                    Translation Services
                  </h4>
                  <p style={{ color: customStyles.mediumGreen }}>
                    Professional educational document translation, curriculum 
                    localization, and multilingual communication support for 
                    global education initiatives.
                  </p>
                  <Badge bg="light" text="dark" style={{ backgroundColor: customStyles.lightGreen }}>
                    Certified
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="service-card" style={customStyles.serviceCard}>
                <Card.Body className="p-4 text-center">
                  <div style={customStyles.serviceIcon}>
                    <Users size={28} />
                  </div>
                  <h4 style={{ color: customStyles.primaryGreen, marginBottom: '15px' }}>
                    Educator Training
                  </h4>
                  <p style={{ color: customStyles.mediumGreen }}>
                    Comprehensive training programs for international educators, 
                    cultural competency development, and professional certification 
                    courses.
                  </p>
                  <Badge bg="light" text="dark" style={{ backgroundColor: customStyles.lightGreen }}>
                    Accredited
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ backgroundColor: customStyles.mediumGreen }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 style={{ color: customStyles.cream, marginBottom: '20px' }}>
                Ready to Transform Your Educational Journey?
              </h2>
              <p style={{ color: customStyles.lightGreen, fontSize: '1.2rem', marginBottom: '30px' }}>
                Join hundreds of institutions worldwide that trust us with their 
                international education needs.
              </p>
              <Button 
                style={{ 
                  ...customStyles.primaryButton, 
                  backgroundColor: customStyles.cream,
                  color: customStyles.primaryGreen,
                  borderColor: customStyles.cream
                }}
                size="lg"
                onClick={() => document.getElementById('consultation').scrollIntoView()}
              >
                Start Your Free Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: customStyles.primaryGreen, color: customStyles.cream }}>
        <Container className="py-4">
          <Row>
            <Col md={6}>
              <h5>🌍 EduGlobal</h5>
              <p>Bridging cultures through exceptional international education.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>&copy; 2024 EduGlobal. All rights reserved.</p>
              <p>
                <a href="#" style={{ color: customStyles.lightGreen }}>Privacy Policy</a> | 
                <a href="#" style={{ color: customStyles.lightGreen }}> Terms of Service</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;