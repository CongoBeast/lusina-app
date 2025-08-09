import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Form
} from 'react-bootstrap';
import { 
  Globe, 
  School, 
  Languages, 
  Users,
  Calendar,
  User,
  Clock,
  Search,
  Tag,
  ArrowRight
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const customStyles = {
    primaryGreen: '#0A400C',
    mediumGreen: '#819067',
    lightGreen: '#B1AB86',
    cream: '#FEFAE0',
    
    pageHeader: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80")',
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
      background: 'linear-gradient(135deg, rgba(10, 64, 12, 0.85) 0%, rgba(129, 144, 103, 0.8) 100%)',
      zIndex: 1
    },
    
    headerContent: {
      position: 'relative',
      zIndex: 2,
      paddingTop: '120px',
      paddingBottom: '80px'
    },
    
    blogCard: {
      border: 'none',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(10, 64, 12, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
      backgroundColor: '#fff',
      overflow: 'hidden'
    },
    
    searchCard: {
      backgroundColor: '#FEFAE0',
      border: 'none',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(10, 64, 12, 0.1)',
      marginBottom: '40px'
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of International Education: Trends for 2024',
      excerpt: 'Exploring emerging technologies and methodologies that are reshaping how we approach global education in the digital age.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      tags: ['Education Technology', 'International Schools', 'Future Trends'],
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Breaking Language Barriers: Best Practices in Educational Translation',
      excerpt: 'A comprehensive guide to effective translation strategies for educational materials across different cultural contexts.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      author: 'Miguel Rodriguez',
      date: '2024-01-08',
      tags: ['Translation', 'Language Services', 'Cultural Adaptation'],
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'Building Cultural Competency in International Educators',
      excerpt: 'Essential strategies for developing cross-cultural understanding and sensitivity in global educational environments.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80',
      author: 'Emma Thompson',
      date: '2024-01-02',
      tags: ['Professional Development', 'Cultural Competency', 'Teacher Training'],
      readTime: '7 min'
    },
    {
      id: 4,
      title: 'School Management in the Digital Age: Tools and Strategies',
      excerpt: 'How modern technology is revolutionizing international school administration and improving operational efficiency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      author: 'Dr. James Morrison',
      date: '2023-12-28',
      tags: ['School Management', 'Digital Tools', 'Administration'],
      readTime: '9 min'
    },
    {
      id: 5,
      title: 'Accreditation Success: A Step-by-Step Guide for International Schools',
      excerpt: 'Navigate the complex world of international school accreditation with our comprehensive roadmap to success.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      author: 'Dr. Robert Kim',
      date: '2023-12-20',
      tags: ['Accreditation', 'International Schools', 'Quality Assurance'],
      readTime: '10 min'
    },
    {
      id: 6,
      title: 'Multilingual Curriculum Design: Challenges and Solutions',
      excerpt: 'Insights into creating effective multilingual educational programs that maintain academic rigor across languages.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
      author: 'Aisha Patel',
      date: '2023-12-15',
      tags: ['Curriculum Development', 'Multilingual Education', 'Language Learning'],
      readTime: '8 min'
    }
  ];

  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      {/* Custom CSS */}
      <style jsx>{`
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(10, 64, 12, 0.2) !important;
        }
        
        .blog-image {
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .blog-card:hover .blog-image {
          transform: scale(1.05);
        }
        
        .tag-badge {
          background-color: rgba(177, 171, 134, 0.2) !important;
          color: #0A400C !important;
          border: none !important;
          margin-right: 5px !important;
          margin-bottom: 5px !important;
          font-size: 11px !important;
        }
        
        .tag-filter {
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 2px;
          font-size: 12px;
        }
        
        .tag-filter:hover {
          background-color: #819067 !important;
          color: #FEFAE0 !important;
        }
        
        .tag-filter.active {
          background-color: #0A400C !important;
          color: #FEFAE0 !important;
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
                Education
                <br />
                <span style={{ color: customStyles.lightGreen }}>Insights</span>
              </h1>
              <p className="page-subtitle">
                Stay informed with the latest trends, insights, and best practices 
                in international education management and professional development.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <Container style={{ marginTop: '-40px', position: 'relative', zIndex: 3 }}>
        <Row>
          <Col lg={10} className="mx-auto">
            <Card style={customStyles.searchCard}>
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <Search size={20} style={{ color: customStyles.primaryGreen, marginRight: '10px' }} />
                      <Form.Control
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ border: `2px solid ${customStyles.lightGreen}`, borderRadius: '8px' }}
                      />
                    </div>
                  </Col>
                  <Col md={6} className="mt-3 mt-md-0">
                    <div className="d-flex align-items-center flex-wrap">
                      <Tag size={16} style={{ color: customStyles.primaryGreen, marginRight: '10px' }} />
                      {allTags.map(tag => (
                        <Badge
                          key={tag}
                          className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
                          style={{
                            backgroundColor: selectedTag === tag ? customStyles.primaryGreen : customStyles.lightGreen,
                            color: selectedTag === tag ? customStyles.cream : customStyles.primaryGreen
                          }}
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
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

      {/* Blog Posts Grid */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {filteredPosts.map((post) => (
              <Col lg={4} md={6} key={post.id}>
                <Card className="blog-card" style={customStyles.blogCard}>
                  <div style={{ overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={post.image} 
                      className="blog-image"
                      alt={post.title}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} className="tag-badge" pill>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Card.Title style={{ 
                      color: customStyles.primaryGreen, 
                      fontWeight: '600',
                      fontSize: '1.3rem',
                      lineHeight: '1.4',
                      marginBottom: '15px'
                    }}>
                      {post.title}
                    </Card.Title>
                    
                    <Card.Text style={{ 
                      color: customStyles.mediumGreen, 
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      {post.excerpt}
                    </Card.Text>
                    
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <User size={14} style={{ color: customStyles.lightGreen, marginRight: '6px' }} />
                        <small style={{ color: customStyles.mediumGreen, fontWeight: '500' }}>
                          {post.author}
                        </small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Clock size={14} style={{ color: customStyles.lightGreen, marginRight: '6px' }} />
                        <small style={{ color: customStyles.mediumGreen }}>
                          {post.readTime} read
                        </small>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <Calendar size={14} style={{ color: customStyles.lightGreen, marginRight: '6px' }} />
                        <small style={{ color: customStyles.mediumGreen }}>
                          {formatDate(post.date)}
                        </small>
                      </div>
                      <Button 
                        variant="link" 
                        className="p-0"
                        style={{ 
                          color: customStyles.primaryGreen,
                          textDecoration: 'none',
                          fontWeight: '600'
                        }}
                      >
                        Read More
                        <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          {filteredPosts.length === 0 && (
            <Row>
              <Col lg={6} className="mx-auto text-center">
                <div style={{ padding: '60px 20px' }}>
                  <Search size={48} style={{ color: customStyles.lightGreen, marginBottom: '20px' }} />
                  <h4 style={{ color: customStyles.primaryGreen, marginBottom: '15px' }}>
                    No articles found
                  </h4>
                  <p style={{ color: customStyles.mediumGreen }}>
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-5" style={{ backgroundColor: customStyles.mediumGreen }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h3 style={{ color: customStyles.cream, marginBottom: '20px' }}>
                Stay Updated with EduGlobal Insights
              </h3>
              <p style={{ 
                color: customStyles.lightGreen, 
                fontSize: '1.1rem', 
                marginBottom: '30px' 
              }}>
                Subscribe to our newsletter and never miss the latest trends 
                in international education.
              </p>
              <div className="d-flex justify-content-center">
                <div className="d-flex" style={{ maxWidth: '400px', width: '100%' }}>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    style={{ 
                      borderRadius: '8px 0 0 8px',
                      border: 'none'
                    }}
                  />
                  <Button 
                    style={{ 
                      backgroundColor: customStyles.primaryGreen,
                      borderColor: customStyles.primaryGreen,
                      borderRadius: '0 8px 8px 0',
                      padding: '0 25px'
                    }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;