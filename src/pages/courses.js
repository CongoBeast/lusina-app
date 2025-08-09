import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Form,
  ListGroup
} from 'react-bootstrap';
import { 
  Globe, 
  School, 
  Users,
  Clock,
  PlayCircle,
  FileText,
  Star,
  Award,
  Calendar,
  DollarSign,
  BookOpen,
  Download,
  CheckCircle,
  Target
} from 'lucide-react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const customStyles = {
    primaryGreen: '#0A400C',
    mediumGreen: '#819067',
    lightGreen: '#B1AB86',
    cream: '#FEFAE0',
    
    pageHeader: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '50vh',
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
      paddingTop: '120px',
      paddingBottom: '80px'
    },
    
    courseCard: {
      border: 'none',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(10, 64, 12, 0.15)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      backgroundColor: '#fff',
      overflow: 'hidden'
    },
    
    filterCard: {
      backgroundColor: '#FEFAE0',
      border: 'none',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(10, 64, 12, 0.1)',
      marginBottom: '40px'
    },
    
    priceSection: {
      backgroundColor: 'rgba(10, 64, 12, 0.05)',
      borderRadius: '12px',
      padding: '15px',
      marginBottom: '20px'
    }
  };

  const courses = [
    {
      id: 1,
      title: 'International School Leadership Certification',
      category: 'Leadership',
      level: 'Advanced',
      originalPrice: 1299,
      discountedPrice: 999,
      discount: 23,
      duration: '12 weeks',
      timeCommitment: '8-10 hours/week',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: 'Comprehensive leadership program designed for international school administrators and coordinators seeking to enhance their management skills.',
      materials: {
        videos: 45,
        documents: 28,
        assessments: 8,
        liveWebinars: 6
      },
      features: [
        'IB & Cambridge curriculum expertise',
        'Global school management strategies',
        'Staff development & retention',
        'Cultural leadership competencies',
        'Financial planning for international schools'
      ],
      instructor: 'Dr. James Morrison',
      rating: 4.9,
      students: 342
    },
    {
      id: 2,
      title: 'Cross-Cultural Teaching Excellence Program',
      category: 'Teaching Methods',
      level: 'Intermediate',
      originalPrice: 899,
      discountedPrice: 649,
      discount: 28,
      duration: '8 weeks',
      timeCommitment: '6-8 hours/week',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80',
      description: 'Master the art of teaching in diverse international environments with proven strategies for engaging multicultural classrooms.',
      materials: {
        videos: 32,
        documents: 24,
        assessments: 6,
        liveWebinars: 4
      },
      features: [
        'Multicultural classroom management',
        'Differentiated instruction techniques',
        'Language support strategies',
        'Parent-teacher communication across cultures',
        'Assessment in international contexts'
      ],
      instructor: 'Emma Thompson',
      rating: 4.8,
      students: 567
    },
    {
      id: 3,
      title: 'International Curriculum Coordinator Mastery',
      category: 'Curriculum Development',
      level: 'Advanced',
      originalPrice: 1199,
      discountedPrice: 899,
      discount: 25,
      duration: '10 weeks',
      timeCommitment: '7-9 hours/week',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Specialized training for curriculum coordinators in international schools, covering program implementation and quality assurance.',
      materials: {
        videos: 38,
        documents: 35,
        assessments: 10,
        liveWebinars: 5
      },
      features: [
        'IB, AP & A-Level program management',
        'Curriculum mapping & alignment',
        'Quality assurance protocols',
        'Teacher training & support',
        'Student performance analysis'
      ],
      instructor: 'Sarah Chen',
      rating: 4.9,
      students: 289
    },
    {
      id: 4,
      title: 'Digital Integration for International Educators',
      category: 'Technology',
      level: 'Beginner',
      originalPrice: 599,
      discountedPrice: 449,
      discount: 25,
      duration: '6 weeks',
      timeCommitment: '4-6 hours/week',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Learn to effectively integrate technology into international classroom settings while maintaining pedagogical excellence.',
      materials: {
        videos: 24,
        documents: 18,
        assessments: 4,
        liveWebinars: 3
      },
      features: [
        'Educational technology tools',
        'Blended learning strategies',
        'Digital assessment methods',
        'Online collaboration platforms',
        'Technology integration planning'
      ],
      instructor: 'Dr. Robert Kim',
      rating: 4.7,
      students: 445
    }
  ];

  const categories = ['All', 'Leadership', 'Teaching Methods', 'Curriculum Development', 'Technology'];
  const priceRanges = ['All', 'Under $500', '$500-$800', '$800-$1000', 'Over $1000'];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    let matchesPrice = true;
    
    if (priceRange !== 'All') {
      const price = course.discountedPrice;
      switch (priceRange) {
        case 'Under $500':
          matchesPrice = price < 500;
          break;
        case '$500-$800':
          matchesPrice = price >= 500 && price <= 800;
          break;
        case '$800-$1000':
          matchesPrice = price > 800 && price <= 1000;
          break;
        case 'Over $1000':
          matchesPrice = price > 1000;
          break;
        default:
          matchesPrice = true;
      }
    }
    
    return matchesCategory && matchesPrice;
  });

  return (
    <div>
      {/* Custom CSS */}
      <style jsx>{`
        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(10, 64, 12, 0.2) !important;
        }
        
        .course-image {
          height: 220px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .course-card:hover .course-image {
          transform: scale(1.05);
        }
        
        .discount-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(45deg, #ff4757, #ff3838);
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          z-index: 2;
        }
        
        .level-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          z-index: 2;
        }
        
        .filter-btn {
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 2px;
        }
        
        .filter-btn:hover {
          background-color: #819067 !important;
          color: #FEFAE0 !important;
        }
        
        .filter-btn.active {
          background-color: #0A400C !important;
          color: #FEFAE0 !important;
        }
        
        .material-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        
        .material-item:last-child {
          border-bottom: none;
        }
        
        .page-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        .page-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
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
                Professional
                <br />
                <span style={{ color: customStyles.lightGreen }}>Development</span>
              </h1>
              <p className="page-subtitle">
                Advance your career with our comprehensive training programs 
                designed specifically for international education professionals.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter Section */}
      <Container style={{ marginTop: '-40px', position: 'relative', zIndex: 3 }}>
        <Row>
          <Col lg={10} className="mx-auto">
            <Card style={customStyles.filterCard}>
              <Card.Body className="p-4">
                <Row>
                  <Col md={6}>
                    <h6 style={{ color: customStyles.primaryGreen, marginBottom: '15px' }}>
                      <Target size={18} style={{ marginRight: '8px' }} />
                      Course Category
                    </h6>
                    <div className="d-flex flex-wrap">
                      {categories.map(category => (
                        <Badge
                          key={category}
                          className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                          style={{
                            backgroundColor: selectedCategory === category ? customStyles.primaryGreen : customStyles.lightGreen,
                            color: selectedCategory === category ? customStyles.cream : customStyles.primaryGreen
                          }}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                  <Col md={6} className="mt-3 mt-md-0">
                    <h6 style={{ color: customStyles.primaryGreen, marginBottom: '15px' }}>
                      <DollarSign size={18} style={{ marginRight: '8px' }} />
                      Price Range
                    </h6>
                    <div className="d-flex flex-wrap">
                      {priceRanges.map(range => (
                        <Badge
                          key={range}
                          className={`filter-btn ${priceRange === range ? 'active' : ''}`}
                          style={{
                            backgroundColor: priceRange === range ? customStyles.primaryGreen : customStyles.lightGreen,
                            color: priceRange === range ? customStyles.cream : customStyles.primaryGreen
                          }}
                          onClick={() => setPriceRange(range)}
                        >
                          {range}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Courses Grid */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {filteredCourses.map((course) => (
              <Col lg={6} key={course.id}>
                <Card className="course-card" style={customStyles.courseCard}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    {course.discount > 0 && (
                      <div className="discount-badge">
                        -{course.discount}% OFF
                      </div>
                    )}
                    <Badge 
                      className="level-badge"
                      style={{ 
                        backgroundColor: course.level === 'Advanced' ? customStyles.primaryGreen : 
                                        course.level === 'Intermediate' ? customStyles.mediumGreen : customStyles.lightGreen,
                        color: course.level === 'Advanced' || course.level === 'Intermediate' ? customStyles.cream : customStyles.primaryGreen
                      }}
                    >
                      {course.level}
                    </Badge>
                    <Card.Img 
                      variant="top" 
                      src={course.image} 
                      className="course-image"
                      alt={course.title}
                    />
                  </div>
                  
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <Badge style={{ backgroundColor: customStyles.mediumGreen }}>
                        {course.category}
                      </Badge>
                      <div className="d-flex align-items-center">
                        <Star size={14} style={{ color: '#ffd700', fill: '#ffd700', marginRight: '4px' }} />
                        <small style={{ color: customStyles.mediumGreen, fontWeight: '600' }}>
                          {course.rating} ({course.students} students)
                        </small>
                      </div>
                    </div>
                    
                    <Card.Title style={{ 
                      color: customStyles.primaryGreen, 
                      fontWeight: '700',
                      fontSize: '1.4rem',
                      lineHeight: '1.3',
                      marginBottom: '15px'
                    }}>
                      {course.title}
                    </Card.Title>
                    
                    <Card.Text style={{ 
                      color: customStyles.mediumGreen, 
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      {course.description}
                    </Card.Text>

                    {/* Price Section */}
                    <div style={customStyles.priceSection}>
                      <Row className="align-items-center">
                        <Col>
                          <div className="d-flex align-items-baseline">
                            <h4 style={{ 
                              color: customStyles.primaryGreen, 
                              fontWeight: '700',
                              marginBottom: '0',
                              marginRight: '10px'
                            }}>
                              ${course.discountedPrice}
                            </h4>
                            {course.discount > 0 && (
                              <small style={{ 
                                textDecoration: 'line-through',
                                color: customStyles.mediumGreen
                              }}>
                                ${course.originalPrice}
                              </small>
                            )}
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-flex align-items-center">
                            <Clock size={16} style={{ color: customStyles.mediumGreen, marginRight: '6px' }} />
                            <small style={{ color: customStyles.mediumGreen }}>
                              {course.duration}
                            </small>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Course Materials */}
                    <div className="mb-4">
                      <h6 style={{ color: customStyles.primaryGreen, fontWeight: '600', marginBottom: '15px' }}>
                        Course Materials:
                      </h6>
                      <Row className="g-3">
                        <Col xs={6}>
                          <div className="material-item">
                            <PlayCircle size={16} style={{ color: customStyles.mediumGreen, marginRight: '8px' }} />
                            <small>{course.materials.videos} Videos</small>
                          </div>
                          <div className="material-item">
                            <FileText size={16} style={{ color: customStyles.mediumGreen, marginRight: '8px' }} />
                            <small>{course.materials.documents} Documents</small>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="material-item">
                            <Award size={16} style={{ color: customStyles.mediumGreen, marginRight: '8px' }} />
                            <small>{course.materials.assessments} Assessments</small>
                          </div>
                          <div className="material-item">
                            <Users size={16} style={{ color: customStyles.mediumGreen, marginRight: '8px' }} />
                            <small>{course.materials.liveWebinars} Live Webinars</small>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Time Commitment */}
                    <div className="mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h6 style={{ color: customStyles.primaryGreen, fontWeight: '600', marginBottom: '5px' }}>
                            Time Commitment:
                          </h6>
                          <p style={{ color: customStyles.mediumGreen, marginBottom: '0', fontSize: '14px' }}>
                            {course.timeCommitment}
                          </p>
                        </div>
                        <div className="text-end">
                          <small style={{ color: customStyles.mediumGreen }}>
                            Instructor: <strong>{course.instructor}</strong>
                          </small>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-grid gap-2">
                      <Button 
                        style={{ 
                          backgroundColor: customStyles.primaryGreen,
                          borderColor: customStyles.primaryGreen,
                          fontWeight: '600',
                          padding: '12px'
                        }}
                      >
                        Enroll Now
                      </Button>
                      <Button 
                        variant="outline-secondary"
                        size="sm"
                        style={{ 
                          color: customStyles.mediumGreen,
                          borderColor: customStyles.lightGreen
                        }}
                      >
                        View Course Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredCourses.length === 0 && (
            <Row>
              <Col lg={6} className="mx-auto text-center">
                <div style={{ padding: '60px 20px' }}>
                  <BookOpen size={48} style={{ color: customStyles.lightGreen, marginBottom: '20px' }} />
                  <h4 style={{ color: customStyles.primaryGreen, marginBottom: '15px' }}>
                    No courses found
                  </h4>
                  <p style={{ color: customStyles.mediumGreen }}>
                    Try adjusting your filters to find courses that match your criteria.
                  </p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center mb-5">
              <h3 style={{ color: customStyles.primaryGreen, fontWeight: '700', marginBottom: '20px' }}>
                Why Choose EduGlobal Professional Development?
              </h3>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3} className="text-center">
              <Award size={40} style={{ color: customStyles.primaryGreen, marginBottom: '15px' }} />
              <h5 style={{ color: customStyles.primaryGreen }}>Certified Programs</h5>
              <p style={{ color: customStyles.mediumGreen, fontSize: '14px' }}>
                All courses include internationally recognized certifications
              </p>
            </Col>
            <Col md={3} className="text-center">
              <Users size={40} style={{ color: customStyles.primaryGreen, marginBottom: '15px' }} />
              <h5 style={{ color: customStyles.primaryGreen }}>Expert Instructors</h5>
              <p style={{ color: customStyles.mediumGreen, fontSize: '14px' }}>
                Learn from experienced international education professionals
              </p>
            </Col>
            <Col md={3} className="text-center">
              <Clock size={40} style={{ color: customStyles.primaryGreen, marginBottom: '15px' }} />
              <h5 style={{ color: customStyles.primaryGreen }}>Flexible Learning</h5>
              <p style={{ color: customStyles.mediumGreen, fontSize: '14px' }}>
                Self-paced courses that fit your professional schedule
              </p>
            </Col>
            <Col md={3} className="text-center">
              <Globe size={40} style={{ color: customStyles.primaryGreen, marginBottom: '15px' }} />
              <h5 style={{ color: customStyles.primaryGreen }}>Global Network</h5>
              <p style={{ color: customStyles.mediumGreen, fontSize: '14px' }}>
                Connect with educators from schools worldwide
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Courses;