// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Button } from "react-bootstrap";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, useLocation , useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";


// import { RxDashboard, RxPinLeft } from "react-icons/rx";
// import { GiTruck } from "react-icons/gi";
// import { IoPieChartSharp } from "react-icons/io5";
// import { FaInfoCircle } from "react-icons/fa";
// import { FaFileInvoiceDollar } from "react-icons/fa";
// import { IoIosPeople } from "react-icons/io";
// import { GiCoalWagon } from "react-icons/gi";
// import { BiSupport } from "react-icons/bi";
// import { SiMicrosoftexcel } from "react-icons/si";
// import { RiAlarmWarningFill } from "react-icons/ri";
// import { FaHome , FaTruck} from "react-icons/fa";
// import { BsFillFileBarGraphFill } from "react-icons/bs";
// import { IoIosInformationCircle } from "react-icons/io";
// import { FaNewspaper } from "react-icons/fa6";
// import { BiLogInCircle } from "react-icons/bi";



// function TopNavBar() {

//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if token exists in local storage
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [location]); // Check login status on location change

//   const isLinkActive = (path) => location.pathname === path;

//   const handleLogout = () => {
//     // Remove token from local storage and update state
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/'); // Redirect to home after logout
//   };

//   return (
//     // <Navbar collapseOnSelect expand="md" className="bg-body-tertiary d-lg-none mb-3 mx p-1">
//     <Navbar 
//       collapseOnSelect 
//       expand="md" 
//       style={{ backgroundColor: '#3a0ca3' }} 
//       className="mb-3 mx p-1 navbar-dark d-lg-none"
//       onToggle={() => setIsOpen(!isOpen)}
//       expanded={isOpen}
//     >
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="text-white">
//           <img 
//             src="https://github.com/CongoBeast/SpaceShare/blob/main/public/Meli-removebg-preview.png?raw=true" 
//             alt="Imat Tech Logo"
//             style={{ maxHeight: "50px", maxWidth: "50px" }}
//             className="d-flex align-items-center"
//           />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto" style={{ textAlign: "right" }}>
//             <Nav.Link 
//               as={Link}
//               to="/"
//               className={`text-left d-flex align-items-center text-white ${isLinkActive("/") ? "active" : ""}`}
//               style={{ marginBottom: "1rem" }}
//               onClick={() => setIsOpen(false)}
//             >
//               <FaHome />
//               <span style={{ marginLeft: "1rem" }}>Home</span>
//             </Nav.Link>

//             {!isLoggedIn && (
//               <Nav.Link
//                 as={Link}
//                 to="/auth"
//                 className={`text-left d-flex align-items-center text-white ${isLinkActive("/auth") ? "active" : ""}`}
//                 style={{ marginBottom: "1rem" }}
//                 onClick={() => setIsOpen(false)}
//               >
//                 <BiLogInCircle />
//                 <span style={{ marginLeft: "1rem" }}>Client Login</span>
//               </Nav.Link>
//             )}

//             <Nav.Link 
//               as={Link}
//               to="/profile"
//               className={`text-left d-flex align-items-center text-white ${isLinkActive("/profile") ? "active" : ""}`}
//               style={{ marginBottom: "1rem" }}
//               onClick={() => setIsOpen(false)}
//             >
//               <FaNewspaper />
//               <span style={{ marginLeft: "1rem" }}>Profile</span>
//             </Nav.Link>

//             <Nav.Link 
//               as={Link}
//               to="/shippers"
//               className={`text-left d-flex align-items-center text-white ${isLinkActive("/shippers") ? "active" : ""}`}
//               style={{ marginBottom: "1rem" }}
//               onClick={() => setIsOpen(false)}
//             >
//               <FaTruck />
//               <span style={{ marginLeft: "1rem" }}>Pro Shippers</span>
//             </Nav.Link>

//             <Nav.Link
//               as={Link}
//               to="/about"
//               className={`text-left d-flex align-items-center text-white ${isLinkActive("/about") ? "active" : ""}`}
//               style={{ marginBottom: "1rem" }}
//               onClick={() => setIsOpen(false)}
//             >
//               <IoIosInformationCircle />
//               <span style={{ marginLeft: "1rem" }}>About Us</span>
//             </Nav.Link>

//             {isLoggedIn && (
//               <>
//                 <Nav.Link
//                   as={Link}
//                   to="/notifications"
//                   className={`text-left d-flex align-items-center text-white ${isLinkActive("/notifications") ? "active" : ""}`}
//                   style={{ marginBottom: "1rem" }}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <IoIosInformationCircle />
//                   <span style={{ marginLeft: "1rem" }}>Notifications</span>
//                 </Nav.Link>
//                 <Nav.Link
//                   onClick={() => {
//                     handleLogout();
//                     setIsOpen(false);
//                   }}
//                   className="text-left d-flex align-items-center text-white"
//                   style={{ marginBottom: "1rem" }}
//                 >
//                   <span style={{ marginLeft: "1rem" }}>Logout</span>
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default TopNavBar;

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { 
  Home, Briefcase, Info, Users2, 
  Book, Rss, LogOut, Stethoscope,
  ClipboardCheck, Pill, BookOpen, Settings,
  BarChart2, Megaphone, Building, Shield,
  Menu, X, Globe
} from 'lucide-react';
// import './topnavbar.css';
import { Link, useLocation, useNavigate } from "react-router-dom";


const TopNavbar = ({ userRole = localStorage.userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(window.innerWidth < 992);

  const navigate = useNavigate();
  

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const shouldShow = window.innerWidth < 992; // Show only below lg (992px)
      setShowNavbar(shouldShow);
      if (!shouldShow) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const handleNavClick = (href) => {
    console.log('Navigate to:', href);
    setIsMenuOpen(false);
    navigate(href)
  };

  // Don't render on large screens
  // if (!showNavbar) {
  //   return null;
  // }

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
    <>
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
                    <Nav.Link href="/#/courses" style={{ color: customStyles.cream }}>Our Courses</Nav.Link>
                    <Nav.Link href="/#/blog" style={{ color: customStyles.cream }}>Blog</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar> */}
      
      <Navbar expand="lg" style={customStyles.navbar} variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" style={{ color: customStyles.cream }}>
            <Globe className="me-2" size={24} />
            EduGlobal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleNavClick("/")} style={{ color: customStyles.cream }}>
                <Home size={18} /> Home
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("/services")} style={{ color: customStyles.cream }}>
                <Briefcase size={18} /> Our Services
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("/about")} style={{ color: customStyles.cream }}>
                <Info size={18} /> About
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("/staff")} style={{ color: customStyles.cream }}>
                <Users2 size={18} /> Our Staff
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("/courses")} style={{ color: customStyles.cream }}>
                <Book size={18} /> Our Courses
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("/blog")} style={{ color: customStyles.cream }}>
                <Rss size={18} /> Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="navbar-spacer"></div>
    </>
  );
};

export default TopNavbar;