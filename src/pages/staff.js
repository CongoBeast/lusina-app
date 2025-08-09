// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Badge,
//   Button
// } from 'react-bootstrap';
// import { 
//   Globe, 
//   School, 
//   Languages, 
//   Users,
//   Award,
//   MapPin,
//   Calendar,
//   Target,
//   Heart,
//   Star
// } from 'lucide-react';

// const Staff = () => {
//   const customStyles = {
//     primaryGreen: '#0A400C',
//     mediumGreen: '#819067',
//     lightGreen: '#B1AB86',
//     cream: '#FEFAE0',
    
//     pageHeader: {
//       backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       minHeight: '40vh',
//       color: '#FEFAE0',
//       position: 'relative',
//       overflow: 'hidden'
//     },
    
//     headerOverlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'linear-gradient(135deg, rgba(10, 64, 12, 0.9) 0%, rgba(129, 144, 103, 0.8) 100%)',
//       zIndex: 1
//     },
    
//     headerContent: {
//       position: 'relative',
//       zIndex: 2,
//       paddingTop: '100px',
//       paddingBottom: '60px'
//     },
    
//     companyCard: {
//       backgroundColor: '#FEFAE0',
//       border: 'none',
//       borderRadius: '20px',
//       boxShadow: '0 15px 40px rgba(10, 64, 12, 0.15)',
//       position: 'relative',
//       zIndex: 3,
//       marginTop: '-80px'
//     },
    
//     teamCard: {
//       border: 'none',
//       borderRadius: '15px',
//       boxShadow: '0 8px 25px rgba(10, 64, 12, 0.1)',
//       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//       height: '100%',
//       backgroundColor: '#fff'
//     },
    
//     iconContainer: {
//       width: '80px',
//       height: '80px',
//       backgroundColor: '#B1AB86',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       margin: '0 auto 20px',
//       boxShadow: '0 4px 15px rgba(177, 171, 134, 0.3)'
//     },
    
//     smallIconContainer: {
//       width: '50px',
//       height: '50px',
//       backgroundColor: '#819067',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       margin: '0 auto 15px'
//     },
    
//     statItem: {
//       textAlign: 'center',
//       padding: '20px 15px'
//     },
    
//     sectionTitle: {
//       color: '#0A400C',
//       fontSize: '2.2rem',
//       fontWeight: '700',
//       marginBottom: '15px'
//     },
    
//     cardTitle: {
//       color: '#0A400C',
//       fontSize: '1.5rem',
//       fontWeight: '600',
//       marginBottom: '15px'
//     }
//   };

//   const companyStats = [
//     { icon: <Award size={24} />, number: '150+', label: 'Schools Managed' },
//     { icon: <Globe size={24} />, number: '40+', label: 'Countries' },
//     { icon: <Languages size={24} />, number: '25+', label: 'Languages' },
//     { icon: <Users size={24} />, number: '500+', label: 'Trained Educators' }
//   ];

//   const teamSections = [
//     {
//       title: 'International School Management Team',
//       icon: <School size={32} />,
//       description: 'Expert administrators and educational consultants with decades of experience in international school operations, curriculum development, and regulatory compliance.',
//       expertise: ['Curriculum Development', 'Administrative Excellence', 'Regulatory Compliance', 'Quality Assurance'],
//       teamSize: '25+ Professionals',
//       color: '#0A400C'
//     },
//     {
//       title: 'Translation Services Team',
//       icon: <Languages size={32} />,
//       description: 'Certified linguists and educational translation specialists ensuring accurate, culturally-sensitive communication across global education platforms.',
//       expertise: ['Document Translation', 'Curriculum Localization', 'Cultural Adaptation', 'Quality Control'],
//       teamSize: '18+ Specialists',
//       color: '#819067'
//     },
//     {
//       title: 'Educator Training Consultancy',
//       icon: <Users size={32} />,
//       description: 'Professional development experts and certified trainers dedicated to empowering educators with international teaching methodologies and best practices.',
//       expertise: ['Professional Development', 'Cultural Competency', 'Teaching Methodologies', 'Certification Programs'],
//       teamSize: '15+ Consultants',
//       color: '#B1AB86'
//     }
//   ];

//   return (
//     <div>
//       {/* Custom CSS */}
//       <style jsx>{`
//         .team-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 15px 35px rgba(10, 64, 12, 0.2) !important;
//         }
        
//         .stat-item {
//           border-right: 2px solid #B1AB86;
//         }
        
//         .stat-item:last-child {
//           border-right: none;
//         }
        
//         .expertise-badge {
//           background-color: rgba(177, 171, 134, 0.2) !important;
//           color: #0A400C !important;
//           border: none !important;
//           margin: 2px !important;
//         }
        
//         @media (max-width: 768px) {
//           .stat-item {
//             border-right: none;
//             border-bottom: 2px solid #B1AB86;
//             margin-bottom: 15px;
//           }
//           .stat-item:last-child {
//             border-bottom: none;
//           }
//         }
        
//         .page-title {
//           font-size: 3.2rem;
//           font-weight: 800;
//           line-height: 1.2;
//           margin-bottom: 15px;
//         }
        
//         .page-subtitle {
//           font-size: 1.3rem;
//           opacity: 0.9;
//           margin-bottom: 0;
//         }
        
//         @media (max-width: 768px) {
//           .page-title {
//             font-size: 2.4rem;
//           }
//           .page-subtitle {
//             font-size: 1.1rem;
//           }
//         }
//       `}</style>

//       {/* Header Section */}
//       <section style={customStyles.pageHeader}>
//         <div style={customStyles.headerOverlay}></div>
//         <Container style={customStyles.headerContent}>
//           <Row className="justify-content-center text-center">
//             <Col lg={8}>
//               <h1 className="page-title">
//                 Meet Our
//                 <br />
//                 <span style={{ color: customStyles.lightGreen }}>Global Team</span>
//               </h1>
//               <p className="page-subtitle">
//                 Dedicated professionals committed to transforming international education 
//                 through expertise, innovation, and cultural understanding.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Company Information Card */}
//       <Container>
//         <Row>
//           <Col lg={10} className="mx-auto">
//             <Card style={customStyles.companyCard}>
//               <Card.Body className="p-5">
//                 <Row className="align-items-center mb-4">
//                   <Col lg={8}>
//                     <div className="d-flex align-items-center mb-3">
//                       <Globe size={32} style={{ color: customStyles.primaryGreen, marginRight: '15px' }} />
//                       <h2 style={customStyles.sectionTitle}>EduGlobal</h2>
//                     </div>
//                     <p style={{ 
//                       fontSize: '1.1rem', 
//                       color: customStyles.mediumGreen, 
//                       lineHeight: '1.6',
//                       marginBottom: '20px' 
//                     }}>
//                       Founded in 2010, EduGlobal has been at the forefront of international 
//                       education excellence. Our mission is to bridge cultural and linguistic 
//                       barriers in education, enabling institutions worldwide to deliver 
//                       exceptional learning experiences.
//                     </p>
//                     <div className="d-flex align-items-center mb-3">
//                       <MapPin size={18} style={{ color: customStyles.primaryGreen, marginRight: '10px' }} />
//                       <span style={{ color: customStyles.mediumGreen }}>
//                         Headquarters: Montreal, Quebec | Global Operations: 40+ Countries
//                       </span>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <Calendar size={18} style={{ color: customStyles.primaryGreen, marginRight: '10px' }} />
//                       <span style={{ color: customStyles.mediumGreen }}>
//                         Established 2010 | 14+ Years of Excellence
//                       </span>
//                     </div>
//                   </Col>
//                   <Col lg={4} className="text-center">
//                     <div style={{ 
//                       fontSize: '100px', 
//                       color: customStyles.lightGreen,
//                       opacity: 0.6
//                     }}>
//                       <Target size={120} />
//                     </div>
//                   </Col>
//                 </Row>
                
//                 {/* Company Stats */}
//                 <Row className="mt-4">
//                   {companyStats.map((stat, index) => (
//                     <Col md={3} sm={6} key={index}>
//                       <div className="stat-item">
//                         <div style={{
//                           ...customStyles.smallIconContainer,
//                           backgroundColor: customStyles.primaryGreen
//                         }}>
//                           <span style={{ color: customStyles.cream }}>
//                             {stat.icon}
//                           </span>
//                         </div>
//                         <h3 style={{ 
//                           color: customStyles.primaryGreen, 
//                           fontSize: '2rem', 
//                           fontWeight: '700',
//                           marginBottom: '5px' 
//                         }}>
//                           {stat.number}
//                         </h3>
//                         <p style={{ 
//                           color: customStyles.mediumGreen, 
//                           fontWeight: '500',
//                           marginBottom: '0' 
//                         }}>
//                           {stat.label}
//                         </p>
//                       </div>
//                     </Col>
//                   ))}
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Team Sections */}
//       <section className="py-5" style={{ marginTop: '80px' }}>
//         <Container>
//           <Row className="mb-5">
//             <Col lg={8} className="mx-auto text-center">
//               <h2 style={customStyles.sectionTitle}>Our Specialized Teams</h2>
//               <p style={{ 
//                 color: customStyles.mediumGreen, 
//                 fontSize: '1.2rem',
//                 marginBottom: '0' 
//               }}>
//                 Three expert divisions working in harmony to deliver comprehensive 
//                 international education solutions.
//               </p>
//             </Col>
//           </Row>
          
//           <Row className="g-4">
//             {teamSections.map((team, index) => (
//               <Col lg={4} md={6} key={index}>
//                 <Card className="team-card" style={customStyles.teamCard}>
//                   <Card.Body className="p-4">
//                     <div style={{
//                       ...customStyles.iconContainer,
//                       backgroundColor: team.color
//                     }}>
//                       <span style={{ color: customStyles.cream }}>
//                         {team.icon}
//                       </span>
//                     </div>
                    
//                     <h4 style={{
//                       ...customStyles.cardTitle,
//                       color: team.color
//                     }}>
//                       {team.title}
//                     </h4>
                    
//                     <p style={{ 
//                       color: customStyles.mediumGreen, 
//                       lineHeight: '1.6',
//                       marginBottom: '20px' 
//                     }}>
//                       {team.description}
//                     </p>
                    
//                     <div className="mb-3">
//                       <h6 style={{ 
//                         color: customStyles.primaryGreen, 
//                         fontWeight: '600',
//                         marginBottom: '10px' 
//                       }}>
//                         Core Expertise:
//                       </h6>
//                       <div>
//                         {team.expertise.map((skill, skillIndex) => (
//                           <Badge 
//                             key={skillIndex}
//                             className="expertise-badge"
//                             pill
//                           >
//                             {skill}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="d-flex align-items-center justify-content-between mt-4">
//                       <div className="d-flex align-items-center">
//                         <Users size={16} style={{ color: team.color, marginRight: '8px' }} />
//                         <span style={{ 
//                           color: customStyles.primaryGreen, 
//                           fontWeight: '600',
//                           fontSize: '14px'
//                         }}>
//                           {team.teamSize}
//                         </span>
//                       </div>
//                       <div className="d-flex">
//                         {[...Array(5)].map((_, starIndex) => (
//                           <Star 
//                             key={starIndex} 
//                             size={14} 
//                             style={{ 
//                               color: customStyles.lightGreen,
//                               fill: customStyles.lightGreen,
//                               marginRight: '2px'
//                             }} 
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
//         <Container>
//           <Row>
//             <Col lg={10} className="mx-auto">
//               <Card style={{ 
//                 border: 'none', 
//                 borderRadius: '15px',
//                 backgroundColor: customStyles.mediumGreen,
//                 color: customStyles.cream
//               }}>
//                 <Card.Body className="p-5 text-center">
//                   <Heart size={40} style={{ 
//                     color: customStyles.cream, 
//                     marginBottom: '20px' 
//                   }} />
//                   <h3 style={{ 
//                     color: customStyles.cream, 
//                     fontWeight: '700',
//                     marginBottom: '20px' 
//                   }}>
//                     Our Mission
//                   </h3>
//                   <p style={{ 
//                     fontSize: '1.2rem', 
//                     lineHeight: '1.7',
//                     marginBottom: '20px',
//                     maxWidth: '800px',
//                     margin: '0 auto'
//                   }}>
//                     To empower educational institutions worldwide by providing comprehensive 
//                     management solutions, breaking down language barriers, and fostering 
//                     excellence in international education through dedicated professional 
//                     development and cultural understanding.
//                   </p>
//                   <Button 
//                     variant="light" 
//                     size="lg"
//                     style={{ 
//                       backgroundColor: customStyles.cream,
//                       color: customStyles.primaryGreen,
//                       border: 'none',
//                       fontWeight: '600',
//                       padding: '12px 30px'
//                     }}
//                   >
//                     Join Our Team
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Staff;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button
} from 'react-bootstrap';
import { 
  Globe, 
  School, 
  Languages, 
  Users,
  Award,
  MapPin,
  Calendar,
  Target,
  Heart,
  Star
} from 'lucide-react';

const Staff = () => {
  const customStyles = {
    primaryGreen: '#0A400C',
    mediumGreen: '#819067',
    lightGreen: '#B1AB86',
    cream: '#FEFAE0',
    
    pageHeader: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '40vh',
      color: '#FEFAE0',
      position: 'relative',
      overflow: 'hidden'
    },
    
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(10, 64, 12, 0.9) 0%, rgba(129, 144, 103, 0.8) 100%)',
      zIndex: 1
    },
    
    headerContent: {
      position: 'relative',
      zIndex: 2,
      paddingTop: '100px',
      paddingBottom: '60px'
    },
    
    companyCard: {
      backgroundColor: '#FEFAE0',
      border: 'none',
      borderRadius: '20px',
      boxShadow: '0 15px 40px rgba(10, 64, 12, 0.15)',
      position: 'relative',
      zIndex: 3,
      marginTop: '-80px'
    },
    
    teamCard: {
      border: 'none',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(10, 64, 12, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      backgroundColor: '#fff'
    },
    
    iconContainer: {
      width: '80px',
      height: '80px',
      backgroundColor: '#B1AB86',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      boxShadow: '0 4px 15px rgba(177, 171, 134, 0.3)'
    },
    
    smallIconContainer: {
      width: '50px',
      height: '50px',
      backgroundColor: '#819067',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 15px'
    },
    
    statItem: {
      textAlign: 'center',
      padding: '20px 15px'
    },
    
    sectionTitle: {
      color: '#0A400C',
      fontSize: '2.2rem',
      fontWeight: '700',
      marginBottom: '15px'
    },
    
    cardTitle: {
      color: '#0A400C',
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '15px'
    }
  };

  const companyStats = [
    { icon: <Award size={24} />, number: '150+', label: 'Schools Managed' },
    { icon: <Globe size={24} />, number: '40+', label: 'Countries' },
    { icon: <Languages size={24} />, number: '25+', label: 'Languages' },
    { icon: <Users size={24} />, number: '500+', label: 'Trained Educators' }
  ];

  const teamSections = [
    {
      title: 'International School Management Team',
      icon: <School size={32} />,
      description: 'Expert administrators and educational consultants with decades of experience in international school operations, curriculum development, and regulatory compliance.',
      expertise: ['Curriculum Development', 'Administrative Excellence', 'Regulatory Compliance', 'Quality Assurance'],
      teamSize: '25+ Professionals',
      color: '#0A400C'
    },
    {
      title: 'Translation Services Team',
      icon: <Languages size={32} />,
      description: 'Certified linguists and educational translation specialists ensuring accurate, culturally-sensitive communication across global education platforms.',
      expertise: ['Document Translation', 'Curriculum Localization', 'Cultural Adaptation', 'Quality Control'],
      teamSize: '18+ Specialists',
      color: '#819067'
    },
    {
      title: 'Educator Training Consultancy',
      icon: <Users size={32} />,
      description: 'Professional development experts and certified trainers dedicated to empowering educators with international teaching methodologies and best practices.',
      expertise: ['Professional Development', 'Cultural Competency', 'Teaching Methodologies', 'Certification Programs'],
      teamSize: '15+ Consultants',
      color: '#B1AB86'
    }
  ];

  return (
    <div>
      {/* Custom CSS */}
      <style jsx>{`
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(10, 64, 12, 0.2) !important;
        }
        
        .stat-item {
          border-right: 2px solid #B1AB86;
        }
        
        .stat-item:last-child {
          border-right: none;
        }
        
        .expertise-badge {
          background-color: rgba(177, 171, 134, 0.2) !important;
          color: #0A400C !important;
          border: none !important;
          margin: 2px !important;
        }
        
        @media (max-width: 768px) {
          .stat-item {
            border-right: none;
            border-bottom: 2px solid #B1AB86;
            margin-bottom: 15px;
          }
          .stat-item:last-child {
            border-bottom: none;
          }
        }
        
        .page-title {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
        }
        
        .page-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .page-title {
            font-size: 2.4rem;
          }
          .page-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>

      {/* Header Section */}
      <section style={customStyles.pageHeader}>
        <div style={customStyles.headerOverlay}></div>
        <Container style={customStyles.headerContent}>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="page-title">
                Meet Our
                <br />
                <span style={{ color: customStyles.lightGreen }}>Global Team</span>
              </h1>
              <p className="page-subtitle">
                Dedicated professionals committed to transforming international education 
                through expertise, innovation, and cultural understanding.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Information Card */}
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <Card style={customStyles.companyCard}>
              <Card.Body className="p-5">
                <Row className="align-items-center mb-4">
                  <Col lg={8}>
                    <div className="d-flex align-items-center mb-3">
                      <Globe size={32} style={{ color: customStyles.primaryGreen, marginRight: '15px' }} />
                      <h2 style={customStyles.sectionTitle}>EduGlobal</h2>
                    </div>
                    <p style={{ 
                      fontSize: '1.1rem', 
                      color: customStyles.mediumGreen, 
                      lineHeight: '1.6',
                      marginBottom: '20px' 
                    }}>
                      Founded in 2010, EduGlobal has been at the forefront of international 
                      education excellence. Our mission is to bridge cultural and linguistic 
                      barriers in education, enabling institutions worldwide to deliver 
                      exceptional learning experiences.
                    </p>
                    <div className="d-flex align-items-center mb-3">
                      <MapPin size={18} style={{ color: customStyles.primaryGreen, marginRight: '10px' }} />
                      <span style={{ color: customStyles.mediumGreen }}>
                        Headquarters: Montreal, Quebec | Global Operations: 40+ Countries
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Calendar size={18} style={{ color: customStyles.primaryGreen, marginRight: '10px' }} />
                      <span style={{ color: customStyles.mediumGreen }}>
                        Established 2010 | 14+ Years of Excellence
                      </span>
                    </div>
                  </Col>
                  <Col lg={4} className="text-center">
                    <div style={{ 
                      fontSize: '100px', 
                      color: customStyles.lightGreen,
                      opacity: 0.6
                    }}>
                      <Target size={120} />
                    </div>
                  </Col>
                </Row>
                
                {/* Company Stats */}
                <Row className="mt-4">
                  {companyStats.map((stat, index) => (
                    <Col md={3} sm={6} key={index}>
                      <div className="stat-item">
                        <div style={{
                          ...customStyles.smallIconContainer,
                          backgroundColor: customStyles.primaryGreen
                        }}>
                          <span style={{ color: customStyles.cream }}>
                            {stat.icon}
                          </span>
                        </div>
                        <h3 style={{ 
                          color: customStyles.primaryGreen, 
                          fontSize: '2rem', 
                          fontWeight: '700',
                          marginBottom: '5px' 
                        }}>
                          {stat.number}
                        </h3>
                        <p style={{ 
                          color: customStyles.mediumGreen, 
                          fontWeight: '500',
                          marginBottom: '0' 
                        }}>
                          {stat.label}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Team Sections */}
      <section className="py-5" style={{ marginTop: '80px' }}>
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 style={customStyles.sectionTitle}>Our Specialized Teams</h2>
              <p style={{ 
                color: customStyles.mediumGreen, 
                fontSize: '1.2rem',
                marginBottom: '0' 
              }}>
                Three expert divisions working in harmony to deliver comprehensive 
                international education solutions.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {teamSections.map((team, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="team-card" style={customStyles.teamCard}>
                  <Card.Body className="p-4">
                    <div style={{
                      ...customStyles.iconContainer,
                      backgroundColor: team.color
                    }}>
                      <span style={{ color: customStyles.cream }}>
                        {team.icon}
                      </span>
                    </div>
                    
                    <h4 style={{
                      ...customStyles.cardTitle,
                      color: team.color
                    }}>
                      {team.title}
                    </h4>
                    
                    <p style={{ 
                      color: customStyles.mediumGreen, 
                      lineHeight: '1.6',
                      marginBottom: '20px' 
                    }}>
                      {team.description}
                    </p>
                    
                    <div className="mb-3">
                      <h6 style={{ 
                        color: customStyles.primaryGreen, 
                        fontWeight: '600',
                        marginBottom: '10px' 
                      }}>
                        Core Expertise:
                      </h6>
                      <div>
                        {team.expertise.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            className="expertise-badge"
                            pill
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <div className="d-flex align-items-center">
                        <Users size={16} style={{ color: team.color, marginRight: '8px' }} />
                        <span style={{ 
                          color: customStyles.primaryGreen, 
                          fontWeight: '600',
                          fontSize: '14px'
                        }}>
                          {team.teamSize}
                        </span>
                      </div>
                      <div className="d-flex">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star 
                            key={starIndex} 
                            size={14} 
                            style={{ 
                              color: customStyles.lightGreen,
                              fill: customStyles.lightGreen,
                              marginRight: '2px'
                            }} 
                          />
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 style={customStyles.sectionTitle}>Meet Our Leaders</h2>
              <p style={{ 
                color: customStyles.mediumGreen, 
                fontSize: '1.1rem' 
              }}>
                Experienced professionals driving excellence in international education
              </p>
            </Col>
          </Row>

          {/* School Management Team */}
          <Row className="mb-5">
            <Col xs={12}>
              <h4 style={{ 
                color: customStyles.primaryGreen, 
                fontWeight: '600',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <School size={24} style={{ marginRight: '10px' }} />
                International School Management Team
              </h4>
            </Col>
            <Col lg={6} className="mb-4">
              <Card style={{ ...customStyles.teamCard, border: `3px solid ${customStyles.primaryGreen}` }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      alt="Dr. James Morrison"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '20px'
                      }}
                    />
                    <div>
                      <h5 style={{ color: customStyles.primaryGreen, fontWeight: '600' }}>
                        Dr. James Morrison
                      </h5>
                      <Badge style={{ backgroundColor: customStyles.primaryGreen, marginBottom: '10px' }}>
                        Director of School Operations
                      </Badge>
                      <p style={{ color: customStyles.mediumGreen, fontSize: '14px', marginBottom: '0' }}>
                        With over 15 years in international education, Dr. Morrison specializes in 
                        curriculum integration and school accreditation processes. He has successfully 
                        managed operations for 30+ international schools across Europe and Asia.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card style={{ ...customStyles.teamCard, border: `3px solid ${customStyles.primaryGreen}` }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      alt="Sarah Chen"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '20px'
                      }}
                    />
                    <div>
                      <h5 style={{ color: customStyles.primaryGreen, fontWeight: '600' }}>
                        Sarah Chen
                      </h5>
                      <Badge style={{ backgroundColor: customStyles.primaryGreen, marginBottom: '10px' }}>
                        Curriculum Development Lead
                      </Badge>
                      <p style={{ color: customStyles.mediumGreen, fontSize: '14px', marginBottom: '0' }}>
                        A former IB coordinator with 12 years of experience, Sarah leads our curriculum 
                        development initiatives. Her expertise in cross-cultural education design has 
                        transformed learning outcomes for thousands of students globally.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Translation Services Team */}
          <Row className="mb-5">
            <Col xs={12}>
              <h4 style={{ 
                color: customStyles.mediumGreen, 
                fontWeight: '600',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Languages size={24} style={{ marginRight: '10px' }} />
                Translation Services Team
              </h4>
            </Col>
            <Col lg={6} className="mb-4">
              <Card style={{ ...customStyles.teamCard, border: `3px solid ${customStyles.mediumGreen}` }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Miguel Rodriguez"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '20px'
                      }}
                    />
                    <div>
                      <h5 style={{ color: customStyles.mediumGreen, fontWeight: '600' }}>
                        Miguel Rodriguez
                      </h5>
                      <Badge style={{ backgroundColor: customStyles.mediumGreen, marginBottom: '10px' }}>
                        Senior Translation Manager
                      </Badge>
                      <p style={{ color: customStyles.mediumGreen, fontSize: '14px', marginBottom: '0' }}>
                        Fluent in 6 languages with specialized certification in educational translation, 
                        Miguel oversees our multilingual document services. His 18-year career includes 
                        work with UNESCO and major international education publishers.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card style={{ ...customStyles.teamCard, border: `3px solid ${customStyles.mediumGreen}` }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Aisha Patel"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '20px'
                      }}
                    />
                    <div>
                      <h5 style={{ color: customStyles.mediumGreen, fontWeight: '600' }}>
                        Aisha Patel
                      </h5>
                      <Badge style={{ backgroundColor: customStyles.mediumGreen, marginBottom: '10px' }}>
                        Cultural Localization Expert
                      </Badge>
                      <p style={{ color: customStyles.mediumGreen, fontSize: '14px', marginBottom: '0' }}>
                        With expertise in South Asian and Middle Eastern educational systems, Aisha 
                        ensures cultural authenticity in all our translations. Her PhD in Comparative 
                        Education helps bridge cultural gaps in international curricula.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Educator Training Team */}
          <Row className="mb-5">
            <Col xs={12}>
              <h4 style={{ 
                color: '#B1AB86', 
                fontWeight: '600',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Users size={24} style={{ marginRight: '10px' }} />
                Educator Training Consultancy
              </h4>
            </Col>
            <Col lg={6} className="mb-4">
              <Card style={{ ...customStyles.teamCard, border: `3px solid #B1AB86` }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      alt="Dr. Robert Kim"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '20px'
                      }}
                    />
                    <div>
                      <h5 style={{ color: '#B1AB86', fontWeight: '600' }}>
                        Dr. Robert Kim
                      </h5>
                      <Badge style={{ backgroundColor: '#B1AB86', color: customStyles.primaryGreen, marginBottom: '10px' }}>
                        Training Program Director
                      </Badge>
                      <p style={{ color: customStyles.mediumGreen, fontSize: '14px', marginBottom: '0' }}>
                        A former international school principal with 20+ years experience, Dr. Kim 
                        designs our professional development programs. He holds certifications in 
                        leadership training and has mentored over 1,000 educators worldwide.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card style={{ ...customStyles.teamCard, border: `3px solid #B1AB86` }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                      alt="Emma Thompson"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '20px'
                      }}
                    />
                    <div>
                      <h5 style={{ color: '#B1AB86', fontWeight: '600' }}>
                        Emma Thompson
                      </h5>
                      <Badge style={{ backgroundColor: '#B1AB86', color: customStyles.primaryGreen, marginBottom: '10px' }}>
                        Cultural Competency Specialist
                      </Badge>
                      <p style={{ color: customStyles.mediumGreen, fontSize: '14px', marginBottom: '0' }}>
                        With a Master's in Cross-Cultural Psychology and 14 years in international 
                        education, Emma develops cultural awareness programs for educators. Her workshops 
                        have empowered teachers to create inclusive, globally-minded classrooms.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <Card style={{ 
                border: 'none', 
                borderRadius: '15px',
                backgroundColor: customStyles.mediumGreen,
                color: customStyles.cream
              }}>
                <Card.Body className="p-5 text-center">
                  <Heart size={40} style={{ 
                    color: customStyles.cream, 
                    marginBottom: '20px' 
                  }} />
                  <h3 style={{ 
                    color: customStyles.cream, 
                    fontWeight: '700',
                    marginBottom: '20px' 
                  }}>
                    Our Mission
                  </h3>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    To empower educational institutions worldwide by providing comprehensive 
                    management solutions, breaking down language barriers, and fostering 
                    excellence in international education through dedicated professional 
                    development and cultural understanding.
                  </p>
                  <Button 
                    variant="light" 
                    size="lg"
                    style={{ 
                      backgroundColor: customStyles.cream,
                      color: customStyles.primaryGreen,
                      border: 'none',
                      fontWeight: '600',
                      padding: '12px 30px'
                    }}
                  >
                    Join Our Team
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Staff;