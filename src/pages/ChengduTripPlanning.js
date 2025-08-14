import React, { useState } from 'react';
import { 
  MapPin, 
  Utensils, 
  Camera, 
  Mountain,
  Users,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  Plane,
  Heart,
  Coffee,
  Building,
  TreePine,
  Compass,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const ChengduTripPlanning = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'Cultural Explorer',
    dates: '',
    groupSize: '2',
    interests: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trip planning request:', bookingData);
    alert('Thank you! Our Chengdu travel experts will contact you within 24 hours to design your perfect itinerary.');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const colors = {
    primaryGreen: '#0A400C',
    mediumGreen: '#819067',
    lightGreen: '#B1AB86',
    cream: '#FEFAE0'
  };

  const styles = {
    heroSection: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '70vh',
      color: colors.cream,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, ${colors.primaryGreen}e6 0%, ${colors.mediumGreen}cc 100%)`,
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
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      marginBottom: '1.5rem'
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      opacity: 0.9,
      marginBottom: '2rem',
      maxWidth: '700px',
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
      padding: '15px 35px',
      fontSize: '18px',
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
      padding: '15px 35px',
      fontSize: '18px',
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
    packagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    packageCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 15px 35px rgba(10, 64, 12, 0.15)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      position: 'relative'
    },
    packageHeader: {
      background: `linear-gradient(135deg, ${colors.primaryGreen} 0%, ${colors.mediumGreen} 100%)`,
      color: colors.cream,
      padding: '2.5rem',
      textAlign: 'center',
      position: 'relative'
    },
    culturalHeader: {
      background: `linear-gradient(135deg, ${colors.mediumGreen} 0%, ${colors.lightGreen} 100%)`
    },
    immersiveHeader: {
      background: `linear-gradient(135deg, ${colors.primaryGreen} 0%, ${colors.mediumGreen} 100%)`
    },
    packageIcon: {
      marginBottom: '1rem',
      opacity: 0.9
    },
    packageTitle: {
      fontSize: '1.8rem',
      fontWeight: 700,
      marginBottom: '0.5rem'
    },
    packageSubtitle: {
      opacity: 0.85,
      fontSize: '1.1rem'
    },
    packageBody: {
      padding: '2.5rem'
    },
    badgeContainer: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    badge: {
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 500
    },
    badgePremium: {
      backgroundColor: '#ffd700',
      color: '#000'
    },
    badgePopular: {
      backgroundColor: '#28a745',
      color: 'white'
    },
    badgeExclusive: {
      backgroundColor: '#6f42c1',
      color: 'white'
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 2rem 0'
    },
    featureListItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      marginBottom: '1rem',
      color: colors.mediumGreen
    },
    highlightList: {
      backgroundColor: colors.cream,
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '2rem'
    },
    highlightTitle: {
      color: colors.primaryGreen,
      fontWeight: 600,
      marginBottom: '1rem',
      fontSize: '1.1rem'
    },
    priceSection: {
      textAlign: 'center',
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px'
    },
    price: {
      color: colors.primaryGreen,
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '0.5rem'
    },
    priceNote: {
      color: colors.mediumGreen,
      fontSize: '0.9rem',
      marginBottom: '1.5rem'
    },
    bookingCard: {
      backgroundColor: colors.cream,
      borderRadius: '20px',
      boxShadow: '0 15px 40px rgba(10, 64, 12, 0.2)',
      padding: '3rem',
      maxWidth: '900px',
      margin: '0 auto'
    },
    bookingHeader: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    },
    form: {
      display: 'grid',
      gap: '1.5rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      color: colors.primaryGreen,
      fontWeight: 600,
      fontSize: '0.95rem'
    },
    input: {
      padding: '1rem',
      border: `2px solid ${colors.lightGreen}`,
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      padding: '1rem',
      border: `2px solid ${colors.lightGreen}`,
      borderRadius: '8px',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease'
    },
    select: {
      padding: '1rem',
      border: `2px solid ${colors.lightGreen}`,
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: 'white',
      transition: 'border-color 0.3s ease'
    },
    whySection: {
      backgroundColor: '#f8f9fa',
      padding: '5rem 0'
    },
    whyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    whyItem: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '15px',
      boxShadow: '0 10px 25px rgba(10, 64, 12, 0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease'
    },
    whyIcon: {
      width: '70px',
      height: '70px',
      backgroundColor: colors.lightGreen,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.primaryGreen,
      margin: '0 auto 1.5rem',
      fontSize: '24px'
    },
    whyTitle: {
      color: colors.primaryGreen,
      fontSize: '1.3rem',
      fontWeight: 600,
      marginBottom: '1rem'
    },
    whyText: {
      color: colors.mediumGreen,
      lineHeight: 1.6
    },
    footer: {
      backgroundColor: colors.primaryGreen,
      color: colors.cream,
      padding: '3rem 0'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    footerSection: {
      textAlign: 'center'
    },
    footerTitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    footerText: {
      margin: '0.5rem 0',
      color: colors.lightGreen
    },
    footerBottom: {
      textAlign: 'center',
      paddingTop: '2rem',
      borderTop: `1px solid ${colors.mediumGreen}`,
      color: colors.lightGreen
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Discover Authentic
            <br />
            <span style={{ color: colors.lightGreen }}>Chengdu Experiences</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Immerse yourself in the heart of Sichuan culture with our expertly crafted 
            concierge travel experiences. From panda encounters to culinary adventures, 
            we unlock the hidden treasures of Chengdu just for you.
          </p>
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton}
              onClick={() => scrollToSection('packages')}
              onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
              onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
            >
              Explore Packages
            </button>
            <button 
              style={styles.outlineButton}
              onClick={() => scrollToSection('contact')}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colors.lightGreen;
                e.target.style.color = colors.primaryGreen;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.lightGreen;
              }}
            >
              Plan Custom Trip
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.whySection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Choose Our Chengdu Concierge Service?</h2>
          <p style={styles.sectionSubtitle}>
            Experience Chengdu like a local with our insider knowledge and personalized service
          </p>
          
          <div style={styles.whyGrid}>
            <div 
              style={styles.whyItem}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.whyIcon}>
                <Users size={28} />
              </div>
              <h4 style={styles.whyTitle}>Local Expert Guides</h4>
              <p style={styles.whyText}>
                Our native Chengdu guides share insider stories and hidden gems 
                that only locals know, ensuring authentic cultural connections.
              </p>
            </div>

            <div 
              style={styles.whyItem}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.whyIcon}>
                <Heart size={28} />
              </div>
              <h4 style={styles.whyTitle}>Personalized Itineraries</h4>
              <p style={styles.whyText}>
                Every trip is tailored to your interests, pace, and preferences. 
                No cookie-cutter tours - just experiences designed for you.
              </p>
            </div>

            <div 
              style={styles.whyItem}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.whyIcon}>
                <Clock size={28} />
              </div>
              <h4 style={styles.whyTitle}>24/7 Concierge Support</h4>
              <p style={styles.whyText}>
                Round-the-clock assistance throughout your journey ensures 
                peace of mind and seamless travel experience.
              </p>
            </div>

            <div 
              style={styles.whyItem}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.whyIcon}>
                <Star size={28} />
              </div>
              <h4 style={styles.whyTitle}>VIP Access & Reservations</h4>
              <p style={styles.whyText}>
                Skip the lines and access exclusive venues, private tastings, 
                and special experiences not available to regular tourists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Cultural Immersion Packages</h2>
          <p style={styles.sectionSubtitle}>
            Choose your level of cultural immersion and let us craft the perfect Chengdu adventure
          </p>
          
          <div style={styles.packagesGrid}>
            {/* Cultural Explorer Package */}
            <div 
              style={styles.packageCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(10, 64, 12, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(10, 64, 12, 0.15)';
              }}
            >
              <div style={{ ...styles.packageHeader, ...styles.culturalHeader }}>
                <div style={styles.packageIcon}>
                  <Compass size={50} />
                </div>
                <h3 style={styles.packageTitle}>Cultural Explorer</h3>
                <p style={styles.packageSubtitle}>Perfect introduction to Chengdu culture</p>
              </div>
              
              <div style={styles.packageBody}>
                <div style={styles.badgeContainer}>
                  <span style={{ ...styles.badge, ...styles.badgePopular }}>Most Popular</span>
                </div>

                <div style={styles.highlightList}>
                  <h4 style={styles.highlightTitle}>Package Highlights:</h4>
                  <ul style={styles.featureList}>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Giant Panda Research Base with behind-the-scenes access</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Traditional Sichuan cooking class with local chef</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Wenshu Monastery meditation session</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Kuanzhai Alley cultural walking tour</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Traditional Sichuan Opera performance</span>
                    </li>
                  </ul>
                </div>

                <h5 style={{ color: colors.primaryGreen, marginBottom: '1rem', fontSize: '1.1rem' }}>
                  What's Included:
                </h5>
                <ul style={styles.featureList}>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    3 days / 2 nights premium accommodation
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Private English-speaking guide
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    All meals at carefully selected restaurants
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Transportation in comfortable vehicle
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Entry tickets to all attractions
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Cultural souvenir package
                  </li>
                </ul>

                <div style={styles.priceSection}>
                  <div style={styles.price}>$1,299</div>
                  <div style={styles.priceNote}>per person (minimum 2 people)</div>
                  <button 
                    style={styles.primaryButton}
                    onClick={() => scrollToSection('contact')}
                    onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
                    onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            </div>

            {/* Deep Immersion Package */}
            <div 
              style={styles.packageCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(10, 64, 12, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(10, 64, 12, 0.15)';
              }}
            >
              <div style={{ ...styles.packageHeader, ...styles.immersiveHeader }}>
                <div style={styles.packageIcon}>
                  <Mountain size={50} />
                </div>
                <h3 style={styles.packageTitle}>Deep Immersion</h3>
                <p style={styles.packageSubtitle}>Complete cultural immersion experience</p>
              </div>
              
              <div style={styles.packageBody}>
                <div style={styles.badgeContainer}>
                  <span style={{ ...styles.badge, ...styles.badgePremium }}>Premium Experience</span>
                </div>

                <div style={styles.highlightList}>
                  <h4 style={styles.highlightTitle}>Package Highlights:</h4>
                  <ul style={styles.featureList}>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Private panda keeper experience for a day</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Master chef mentorship in family restaurant</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Home stay with local Chengdu family</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Traditional tea ceremony with tea master</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Leshan Giant Buddha private sunrise visit</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Emei Mountain spiritual retreat</span>
                    </li>
                  </ul>
                </div>

                <h5 style={{ color: colors.primaryGreen, marginBottom: '1rem', fontSize: '1.1rem' }}>
                  What's Included:
                </h5>
                <ul style={styles.featureList}>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    6 days / 5 nights luxury accommodation
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Dedicated cultural ambassador guide
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    All meals including exclusive dining experiences
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Private luxury vehicle with driver
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    VIP access to cultural sites
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Custom cultural workshop sessions
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Professional photography service
                  </li>
                </ul>

                <div style={styles.priceSection}>
                  <div style={styles.price}>$2,899</div>
                  <div style={styles.priceNote}>per person (minimum 2 people)</div>
                  <button 
                    style={styles.primaryButton}
                    onClick={() => scrollToSection('contact')}
                    onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
                    onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            </div>

            {/* Luxury Cultural Retreat Package */}
            <div 
              style={styles.packageCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(10, 64, 12, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(10, 64, 12, 0.15)';
              }}
            >
              <div style={styles.packageHeader}>
                <div style={styles.packageIcon}>
                  <Star size={50} />
                </div>
                <h3 style={styles.packageTitle}>Luxury Cultural Retreat</h3>
                <p style={styles.packageSubtitle}>Ultimate exclusive Chengdu experience</p>
              </div>
              
              <div style={styles.packageBody}>
                <div style={styles.badgeContainer}>
                  <span style={{ ...styles.badge, ...styles.badgeExclusive }}>Exclusive</span>
                </div>

                <div style={styles.highlightList}>
                  <h4 style={styles.highlightTitle}>Package Highlights:</h4>
                  <ul style={styles.featureList}>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Private villa accommodation in traditional courtyard</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Exclusive after-hours panda sanctuary access</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Private Michelin-starred chef experiences</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Helicopter tour over Sichuan landscapes</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Private concert by renowned Sichuan Opera artists</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Ancient silk road trading post recreation</span>
                    </li>
                    <li style={styles.featureListItem}>
                      <CheckCircle size={18} style={{ color: colors.mediumGreen, marginTop: '2px' }} />
                      <span>Private calligraphy master class</span>
                    </li>
                  </ul>
                </div>

                <h5 style={{ color: colors.primaryGreen, marginBottom: '1rem', fontSize: '1.1rem' }}>
                  What's Included:
                </h5>
                <ul style={styles.featureList}>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    10 days / 9 nights ultra-luxury accommodation
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Personal cultural concierge team
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    All meals at exclusive venues
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Private helicopter and luxury car fleet
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    24/7 butler and translator services
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Bespoke cultural artifact collection
                  </li>
                  <li style={styles.featureListItem}>
                    <CheckCircle size={16} style={{ color: colors.mediumGreen }} />
                    Private documentary of your journey
                  </li>
                </ul>

                <div style={styles.priceSection}>
                  <div style={styles.price}>$8,999</div>
                  <div style={styles.priceNote}>per person (minimum 2 people)</div>
                  <button 
                    style={styles.primaryButton}
                    onClick={() => scrollToSection('contact')}
                    onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
                    onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" style={{ ...styles.section, backgroundColor: colors.mediumGreen }}>
        <div style={styles.container}>
          <div style={styles.bookingCard}>
            <div style={styles.bookingHeader}>
              <Calendar size={60} style={{ color: colors.primaryGreen, marginBottom: '1rem' }} />
              <h2 style={{ color: colors.primaryGreen, marginBottom: '1rem', fontSize: '2.2rem' }}>
                Plan Your Perfect Chengdu Adventure
              </h2>
              <p style={{ color: colors.mediumGreen, fontSize: '1.15rem', margin: 0 }}>
                Let our travel experts create a personalized itinerary that matches your interests and dreams
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
                    placeholder="Enter your full name"
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
                    placeholder="your.email@example.com"
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
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Preferred Package</label>
                  <select
                    name="package"
                    value={bookingData.package}
                    onChange={handleInputChange}
                    style={styles.select}
                  >
                    <option value="Cultural Explorer">Cultural Explorer ($1,299)</option>
                    <option value="Deep Immersion">Deep Immersion ($2,899)</option>
                    <option value="Luxury Cultural Retreat">Luxury Cultural Retreat ($8,999)</option>
                    <option value="Custom Package">Custom Package (Quote Required)</option>
                  </select>
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Preferred Travel Dates</label>
                  <input
                    type="text"
                    name="dates"
                    value={bookingData.dates}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="e.g., March 15-22, 2025"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Group Size</label>
                  <select
                    name="groupSize"
                    value={bookingData.groupSize}
                    onChange={handleInputChange}
                    style={styles.select}
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3-4">3-4 people</option>
                    <option value="5-8">5-8 people</option>
                    <option value="9+">9+ people (group rate)</option>
                  </select>
                </div>
              </div>
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Special Interests</label>
                  <input
                    type="text"
                    name="interests"
                    value={bookingData.interests}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="e.g., Photography, Food, History, Art"
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Tell us about your ideal Chengdu experience</label>
                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="Describe what you'd love to experience in Chengdu, any special occasions, dietary restrictions, accessibility needs, or dream activities..."
                />
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  type="submit" 
                  style={{ ...styles.primaryButton, fontSize: '20px', padding: '18px 45px' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = colors.mediumGreen}
                  onMouseOut={(e) => e.target.style.backgroundColor = colors.primaryGreen}
                >
                  Get My Custom Itinerary
                </button>
                <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: colors.mediumGreen }}>
                  * Our travel experts will contact you within 24 hours with a personalized proposal
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
            <div style={styles.footerSection}>
              <h4 style={styles.footerTitle}>
                <MapPin size={20} />
                Visit Us
              </h4>
              <p style={styles.footerText}>Chengdu Cultural District</p>
              <p style={styles.footerText}>Sichuan Province, China</p>
            </div>
            
            <div style={styles.footerSection}>
              <h4 style={styles.footerTitle}>
                <Phone size={20} />
                Contact
              </h4>
              <p style={styles.footerText}>+86 28 8888 8888</p>
              <p style={styles.footerText}>+1 (555) 123-TRIP</p>
            </div>
            
            <div style={styles.footerSection}>
              <h4 style={styles.footerTitle}>
                <Mail size={20} />
                Email
              </h4>
              <p style={styles.footerText}>chengdu@eduglobal.com</p>
              <p style={styles.footerText}>concierge@eduglobal.com</p>
            </div>
            
            <div style={styles.footerSection}>
              <h4 style={styles.footerTitle}>
                <MessageCircle size={20} />
                Connect
              </h4>
              <p style={styles.footerText}>WeChat: EduGlobal_CD</p>
              <p style={styles.footerText}>WhatsApp: +86 138 0000 0000</p>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p>&copy; 2024 EduGlobal Chengdu Concierge Services. All rights reserved.</p>
            <p>Licensed Travel Operator | Sichuan Tourism Authority Certified</p>
          </div>
        </div>
      </footer>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          .packages-grid {
            grid-template-columns: 1fr !important;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .footer-content {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .button-container {
            flex-direction: column !important;
            align-items: center !important;
          }
          .package-body, .booking-card {
            padding: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem !important;
          }
          .hero-title {
            font-size: 2rem !important;
          }
          .footer-content {
            grid-template-columns: 1fr !important;
          }
          .package-card, .booking-card {
            margin: 0 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChengduTripPlanning;