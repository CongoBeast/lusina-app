import React, { useState } from 'react';
import { 
  Globe, 
  School, 
  Languages, 
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Award,
  Star,
  CheckCircle,
  Calendar,
  Video,
  Menu,
  X
} from 'lucide-react';

const ChineseLearning = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    level: 'Beginner',
    preferredTime: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Free class booking:', bookingData);
    alert('Thank you! We will contact you within 24 hours to schedule your free class.');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const colors = {
    primaryGreen: '#0A400C',
    mediumGreen: '#819067',
    lightGreen: '#B1AB86',
    cream: '#FEFAE0'
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.primaryGreen,
      boxShadow: '0 2px 10px rgba(10, 64, 12, 0.1)',
      zIndex: 1000,
      padding: '1rem 0'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    navBrand: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: colors.cream,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: colors.cream,
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: colors.cream,
      fontSize: '1.5rem',
      cursor: 'pointer'
    },
    mobileMenu: {
      display: 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: colors.primaryGreen,
      padding: '1rem 2rem',
      flexDirection: 'column',
      gap: '1rem'
    },
    heroSection: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '60vh',
      color: colors.cream,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      marginTop: '80px'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, ${colors.primaryGreen}d9 0%, ${colors.mediumGreen}bf 100%)`,
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '3.2rem',
      fontWeight: 800,
      lineHeight: 1.2,
      marginBottom: '1.5rem'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: colors.primaryGreen,
      color: 'white',
      padding: '12px 30px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease'
    },
    outlineButton: {
      backgroundColor: 'transparent',
      color: colors.lightGreen,
      padding: '12px 30px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      border: `2px solid ${colors.lightGreen}`,
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease'
    },
    section: {
      padding: '5rem 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    sectionTitle: {
      color: colors.primaryGreen,
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      textAlign: 'center'
    },
    sectionSubtitle: {
      color: colors.mediumGreen,
      fontSize: '1.2rem',
      marginBottom: '3rem',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto 3rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '2rem',
      transition: 'transform 0.3s ease'
    },
    featureIcon: {
      width: '50px',
      height: '50px',
      backgroundColor: colors.lightGreen,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.primaryGreen,
      flexShrink: 0
    },
    featureContent: {
      flex: 1
    },
    featureTitle: {
      color: colors.primaryGreen,
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.5rem'
    },
    featureText: {
      color: colors.mediumGreen,
      lineHeight: 1.6
    },
    classesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    classCard: {
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 25px rgba(10, 64, 12, 0.15)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    classHeader: {
      background: `linear-gradient(135deg, ${colors.primaryGreen} 0%, ${colors.mediumGreen} 100%)`,
      color: colors.cream,
      padding: '2rem',
      textAlign: 'center'
    },
    beginnerHeader: {
      background: `linear-gradient(135deg, ${colors.mediumGreen} 0%, ${colors.lightGreen} 100%)`
    },
    classBody: {
      padding: '2rem'
    },
    badgeContainer: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    },
    badge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: 500
    },
    badgePrimary: {
      backgroundColor: colors.primaryGreen,
      color: 'white'
    },
    badgeWarning: {
      backgroundColor: '#ffc107',
      color: '#000'
    },
    badgeSuccess: {
      backgroundColor: '#198754',
      color: 'white'
    },
    badgeInfo: {
      backgroundColor: '#0dcaf0',
      color: '#000'
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 1.5rem 0'
    },
    featureListItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.75rem',
      color: colors.mediumGreen
    },
    priceSection: {
      textAlign: 'center',
      marginTop: '1.5rem'
    },
    price: {
      color: colors.mediumGreen,
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '1rem'
    },
    bookingCard: {
      backgroundColor: colors.cream,
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(10, 64, 12, 0.15)',
      padding: '3rem',
      maxWidth: '800px',
      margin: '0 auto'
    },
    bookingHeader: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    form: {
      display: 'grid',
      gap: '1rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      color: colors.primaryGreen,
      fontWeight: 600,
      fontSize: '0.9rem'
    },
    input: {
      padding: '0.75rem',
      border: `2px solid ${colors.lightGreen}`,
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      padding: '0.75rem',
      border: `2px solid ${colors.lightGreen}`,
      borderRadius: '8px',
      fontSize: '1rem',
      minHeight: '100px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease'
    },
    select: {
      padding: '0.75rem',
      border: `2px solid ${colors.lightGreen}`,
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: 'white',
      transition: 'border-color 0.3s ease'
    },
    footer: {
      backgroundColor: colors.primaryGreen,
      color: colors.cream,
      padding: '2rem 0'
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    footerLinks: {
      display: 'flex',
      gap: '1rem'
    },
    footerLink: {
      color: colors.lightGreen,
      textDecoration: 'none'
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <a href="#" style={styles.navBrand}>
            <Globe size={24} />
            EduGlobal
          </a>
          <ul style={{
            ...styles.navLinks,
            ...(window.innerWidth <= 768 ? { display: 'none' } : {})
          }}>
            <li><a style={styles.navLink} onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a style={styles.navLink} onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a></li>
            <li><a style={styles.navLink} onClick={() => scrollToSection('classes')}>Classes</a></li>
            <li><a style={styles.navLink} onClick={() => scrollToSection('book-class')}>Book Free Class</a></li>
          </ul>
          <button 
            style={{
              ...styles.mobileMenuButton,
              ...(window.innerWidth <= 768 ? { display: 'block' } : { display: 'none' })
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div style={{
            ...styles.mobileMenu,
            display: 'flex'
          }}>
            <a style={styles.navLink} onClick={() => scrollToSection('home')}>Home</a>
            <a style={styles.navLink} onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a>
            <a style={styles.navLink} onClick={() => scrollToSection('classes')}>Classes</a>
            <a style={styles.navLink} onClick={() => scrollToSection('book-class')}>Book Free Class</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Master Chinese Language
            <br />
            <span style={{ color: colors.lightGreen }}>With Expert Guidance</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Unlock opportunities in the world's most spoken language with our 
            comprehensive Chinese learning programs designed for global success.
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton}
              onClick={() => scrollToSection('book-class')}
              onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
              onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
            >
              Start Free Trial Class
            </button>
            <button 
              style={styles.outlineButton}
              onClick={() => scrollToSection('classes')}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colors.lightGreen;
                e.target.style.color = colors.primaryGreen;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.lightGreen;
              }}
            >
              View Classes
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" style={{ ...styles.section, backgroundColor: colors.cream }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Choose Our Chinese Learning Program?</h2>
          <p style={styles.sectionSubtitle}>
            Experience the difference with our proven methodology and expert instructors
          </p>
          
          <div style={styles.featuresGrid}>
            <div>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <Users size={20} />
                </div>
                <div style={styles.featureContent}>
                  <h4 style={styles.featureTitle}>Native Chinese Instructors</h4>
                  <p style={styles.featureText}>
                    Learn from certified native speakers with years of teaching experience 
                    and deep cultural knowledge.
                  </p>
                </div>
              </div>
              
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <Clock size={20} />
                </div>
                <div style={styles.featureContent}>
                  <h4 style={styles.featureTitle}>Flexible Scheduling</h4>
                  <p style={styles.featureText}>
                    Choose from morning, afternoon, or evening classes that fit your busy schedule.
                  </p>
                </div>
              </div>
              
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <Award size={20} />
                </div>
                <div style={styles.featureContent}>
                  <h4 style={styles.featureTitle}>HSK Certification Prep</h4>
                  <p style={styles.featureText}>
                    Structured curriculum aligned with HSK standards for official certification.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <Video size={20} />
                </div>
                <div style={styles.featureContent}>
                  <h4 style={styles.featureTitle}>Interactive Online Platform</h4>
                  <p style={styles.featureText}>
                    State-of-the-art virtual classroom with interactive whiteboards and multimedia resources.
                  </p>
                </div>
              </div>
              
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <BookOpen size={20} />
                </div>
                <div style={styles.featureContent}>
                  <h4 style={styles.featureTitle}>Comprehensive Materials</h4>
                  <p style={styles.featureText}>
                    Access to digital textbooks, audio resources, and practice materials included.
                  </p>
                </div>
              </div>
              
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <Globe size={20} />
                </div>
                <div style={styles.featureContent}>
                  <h4 style={styles.featureTitle}>Cultural Integration</h4>
                  <p style={styles.featureText}>
                    Learn language through cultural context for deeper understanding and retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" style={{ ...styles.section, backgroundColor: '#f8f9fa' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Chinese Classes</h2>
          <p style={styles.sectionSubtitle}>
            Choose the perfect program for your learning journey
          </p>
          
          <div style={styles.classesGrid}>
            {/* Advanced Classes */}
            <div 
              style={styles.classCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(10, 64, 12, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(10, 64, 12, 0.15)';
              }}
            >
              <div style={styles.classHeader}>
                <GraduationCap size={40} style={{ marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.75rem' }}>Advanced Chinese</h3>
                <p style={{ margin: 0, opacity: 0.75 }}>For intermediate to advanced learners</p>
              </div>
              <div style={styles.classBody}>
                <div style={styles.badgeContainer}>
                  <span style={{ ...styles.badge, ...styles.badgeSuccess }}>HSK 4-6 Prep</span>
                  <span style={{ ...styles.badge, ...styles.badgeInfo }}>Business Chinese</span>
                </div>
                
                <h5 style={{ color: colors.primaryGreen, marginBottom: '1rem' }}>
                  Course Features:
                </h5>
                
                <ul style={styles.featureList}>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Complex grammar structures and advanced vocabulary
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Business Chinese and professional communication
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Literature analysis and cultural deep-dives
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Mock interviews and presentation skills
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Small group discussions (max 6 students)
                  </li>
                </ul>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <strong style={{ color: colors.primaryGreen }}>Duration:</strong>
                    <br />12 weeks
                  </div>
                  <div>
                    <strong style={{ color: colors.primaryGreen }}>Schedule:</strong>
                    <br />3x/week, 90 min
                  </div>
                </div>
                
                <div style={styles.priceSection}>
                  <h4 style={styles.price}>$899 / course</h4>
                  <button 
                    style={styles.primaryButton}
                    onClick={() => scrollToSection('book-class')}
                    onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
                    onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
                  >
                    Try Free Class
                  </button>
                </div>
              </div>
            </div>

            {/* Beginner Classes */}
            <div 
              style={styles.classCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(10, 64, 12, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(10, 64, 12, 0.15)';
              }}
            >
              <div style={{ ...styles.classHeader, ...styles.beginnerHeader }}>
                <Star size={40} style={{ marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.75rem' }}>Beginner Chinese</h3>
                <p style={{ margin: 0, opacity: 0.75 }}>Perfect for complete beginners</p>
              </div>
              <div style={styles.classBody}>
                <div style={styles.badgeContainer}>
                  <span style={{ ...styles.badge, ...styles.badgePrimary }}>HSK 1-2 Prep</span>
                  <span style={{ ...styles.badge, ...styles.badgeWarning }}>Most Popular</span>
                </div>
                
                <h5 style={{ color: colors.primaryGreen, marginBottom: '1rem' }}>
                  Course Features:
                </h5>
                
                <ul style={styles.featureList}>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Pinyin mastery and pronunciation fundamentals
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Essential vocabulary for daily conversations
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Basic character writing and recognition
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Interactive games and cultural activities
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Small group practice (max 8 students)
                  </li>
                </ul>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <strong style={{ color: colors.primaryGreen }}>Duration:</strong>
                    <br />10 weeks
                  </div>
                  <div>
                    <strong style={{ color: colors.primaryGreen }}>Schedule:</strong>
                    <br />2x/week, 75 min
                  </div>
                </div>
                
                <div style={styles.priceSection}>
                  <h4 style={styles.price}>$599 / course</h4>
                  <button 
                    style={styles.primaryButton}
                    onClick={() => scrollToSection('book-class')}
                    onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
                    onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
                  >
                    Try Free Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Free Class Section */}
      <section id="book-class" style={{ ...styles.section, backgroundColor: colors.mediumGreen }}>
        <div style={styles.container}>
          <div style={styles.bookingCard}>
            <div style={styles.bookingHeader}>
              <Calendar size={50} style={{ color: colors.primaryGreen, marginBottom: '1rem' }} />
              <h2 style={{ color: colors.primaryGreen, marginBottom: '1rem' }}>
                Book Your Free Trial Class
              </h2>
              <p style={{ color: colors.mediumGreen, fontSize: '1.1rem', margin: 0 }}>
                Experience our teaching methodology with a complimentary 45-minute session
              </p>
            </div>
            
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    style={styles.input}
                  />
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Current Level</label>
                  <select
                    name="level"
                    value={bookingData.level}
                    onChange={handleInputChange}
                    style={styles.select}
                  >
                    <option value="Complete Beginner">Complete Beginner</option>
                    <option value="Beginner">Beginner (HSK 1-2)</option>
                    <option value="Intermediate">Intermediate (HSK 3-4)</option>
                    <option value="Advanced">Advanced (HSK 5-6)</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={bookingData.preferredTime}
                    onChange={handleInputChange}
                    style={styles.select}
                  >
                    <option value="">Select preferred time</option>
                    <option value="Morning (8AM-12PM)">Morning (8AM-12PM)</option>
                    <option value="Afternoon (12PM-6PM)">Afternoon (12PM-6PM)</option>
                    <option value="Evening (6PM-9PM)">Evening (6PM-9PM)</option>
                    <option value="Weekend">Weekend</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Learning Goals</label>
                  <textarea
                    name="message"
                    value={bookingData.message}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    placeholder="Tell us about your Chinese learning goals..."
                  />
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  type="submit" 
                  style={{ ...styles.primaryButton, fontSize: '18px', padding: '15px 40px' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
                  onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
                >
                  Book My Free Trial Class
                </button>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: colors.mediumGreen }}>
                  * No credit card required. We'll contact you to schedule your session.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div>
              <h5 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.5rem 0' }}>
                <Globe size={20} />
                EduGlobal - Chinese Learning
              </h5>
              <p style={{ margin: 0 }}>Master Chinese. Master Opportunities.</p>
            </div>
            <div>
              <p style={{ margin: '0 0 0.5rem 0' }}>&copy; 2024 EduGlobal. All rights reserved.</p>
              <div style={styles.footerLinks}>
                <a href="#" style={styles.footerLink}>Privacy Policy</a>
                <span style={{ color: colors.lightGreen }}>|</span>
                <a href="#" style={styles.footerLink}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.3rem !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
          .nav-links {
            display: none !important;
          }
          .classes-grid {
            grid-template-columns: 1fr !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .footer-content {
            flex-direction: column !important;
            text-align: center !important;
          }
          .button-container {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem !important;
          }
          .hero-title {
            font-size: 1.8rem !important;
          }
          .booking-card, .class-card {
            margin: 0 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChineseLearning;