import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/images/logo.png";

function Footer() {
    return (
        <footer style={{ backgroundColor: "#f8f9fa", color: "#212529", padding: "30px 0", borderTop: "1px solid #dee2e6" }}>
            <Container>
                <Row className="align-items-center text-center text-md-left">
                    {/* Logo and Brand */}
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <img src={logo} alt="Logo" style={{ width: "80px", height: "80px" }} />
                        <p className="mt-2 mb-0"><strong>eshop-web</strong></p>
                    </Col>

                    {/* Contact Info */}
                    <Col xs={12} md={4} className="mb-4 mb-md-0">
                        <h6 className="mb-2">Contact Us</h6>
                        <p className="mb-1">Valimotie 00380, Helsinki, Finland</p>
                        <p className="mb-1">
                            <a href="mailto:eshop-web@gmail.com" style={{ color: "#212529", textDecoration: "none" }}>
                                eshop-web@gmail.com
                            </a>
                        </p>
                        <p className="mb-0">+358XXXXXXXX</p>
                    </Col>

                    {/* Social Media */}
                    <Col xs={12} md={4}>
                        <h6 className="mb-2">Follow Us</h6>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark text-decoration-none">
                            Facebook
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark text-decoration-none">
                            LinkedIn
                        </a>
                        <a href="https://wa.me/358417278258" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                            WhatsApp
                        </a>
                    </Col>
                </Row>

                {/* Bottom copyright */}
                <hr className="my-4" />
                <Row>
                    <Col className="text-center">
                        <small>&copy; {new Date().getFullYear()} eshop-web. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
