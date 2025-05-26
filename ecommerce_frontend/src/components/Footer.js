import React from 'react'
import {  Container, Row, Col} from 'react-bootstrap'
import logo from "../assets/images/logo.png";


function Footer() {
    return (
        <footer style={{ backgroundColor: "#fff", color: "black", paddingTop: "20px", paddingBottom: "20px" }}>
            <Container>
                <Row className="align-items-center">
                    {/* Logo on the left */}
                    <Col xs={12} md={4} className="text-center text-md-left">
                        <img src={logo} alt="Logo" style={{ width: "100px", height: "100px" }} />
                    </Col>

                    {/* Contact Information in the middle */}
                    <Col xs={12} md={4} className="text-center">
                        <p>
                            <strong>Contact Information:</strong><br />
                            Address: Valimotie 00380 <br />00380 Helsinki, Finland<br /><br />
                            Email: <a href="mailto:eshop-web@gmail.com" style={{ color: "#000" }}>eshop-web@gmail.com</a><br />
                            Contact: +358XXXXXXXX
                        </p>
                    </Col>

                    {/* Social Media Links on the right */}
                    <Col xs={12} md={4} className="text-center text-md-right">
                        <p>
                            <strong>Follow us:</strong><br />
                            
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000", marginRight: "10px" }}>Facebook</a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#000", marginRight: "10px" }}>LinkedIn</a>
                            <a href="https://wa.me/358417278258" target="_blank" rel="noopener noreferrer" style={{ color: "#000" }}>WhatsApp</a><br />

                            <br />
                            <p>&copy; copyright@eshop-web
                            </p>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
