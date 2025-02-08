import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGlobe, FaUserTie, FaUsers } from "react-icons/fa";
import "../styles/About.css"; // Ensure the CSS is imported

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <Container className="content-wrapper">
          {/* About Us Header */}
          <Row className="text-center mb-5">
            <Col>
              <h1>About Us</h1> <br></br>
              <p className="lead">
              At R/Nivi/Kahawatta Muslim Maha Vidyala, we are committed to providing a nurturing and inspiring 
              environment where students can achieve academic excellence, develop essential life skills, 
              and grow into responsible individuals. With a rich history of educational success, 
              we take pride in fostering a culture of innovation, discipline, and holistic development.
              </p>
            </Col>
          </Row>

          {/* About Us Image */}
          <Row className="text-center mb-5">
            <Col>
              <Image
                src="/assets/images/school-logo.jpg"
                alt="School Overview"
                className="about-us-image"
                fluid
              />
            </Col>
          </Row>

          {/* Mission Section */}
          <Row className="align-items-center my-5">
            <Col md={6}>
              <Image
                src="/assets/images/mission-image.jpg"
                alt="Mission"
                className="section-image small-image"
                fluid
              />
            </Col>
            <Col md={6}>
              <h2>Our Mission: Empowering Future Generations</h2> <br></br>
              <p>
                We believe in creating an inclusive learning environment where students 
                can grow academically and personally, preparing them for a successful future.
              </p>
            </Col>
          </Row>

          {/* Story Section */}
          <Row className="align-items-center my-5">
            <Col md={6} className="order-md-2">
              <Image
                src="/assets/images/vision-image.jpg"
                alt="Our Story"
                className="section-image small-image"
                fluid
              />
            </Col>
            <Col md={6} className="order-md-1">
              <h2>Our Story</h2><br></br>
              <p>
                Since its founding, R/Nivi/Kahawatta Muslim Maha Vidyala has been committed 
                to fostering excellence in education. From humble beginnings, we have 
                evolved into a leading institution that inspires students to achieve 
                their full potential.
              </p>
            </Col>
          </Row>

          {/* Statistics Section */}
          <Row className="text-center my-5">
            <Col>
              <h2>By the Numbers</h2>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4}>
              <Card className="stat-card">
                <Card.Body>
                  <FaGlobe className="stat-icon" />
                  <Card.Title>1000+ Alumni</Card.Title>
                  <p>Alumnis across multiple regions.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="stat-card">
                <Card.Body>
                  <FaUserTie className="stat-icon" />
                  <Card.Title>50+ Teachers</Card.Title>
                  <p>Experienced educators guiding students.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="stat-card">
                <Card.Body>
                  <FaUsers className="stat-icon" />
                  <Card.Title>500+ Students</Card.Title>
                  <p>Providing quality education for future leaders.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;