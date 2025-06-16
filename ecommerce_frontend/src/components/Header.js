
import React, { useState } from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Form, 
  FormControl, 
  Button, 
  InputGroup,
  NavDropdown 
} from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

function Header() {
  //navigate function for navigation using useNavigate hook from react-router-dom
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  //getting boolean value using double negation operator 
  const isAuthenticated = !!localStorage.getItem('authToken');

  // Logout handler responsible for removing authentication token from the localStorage and redirect to login page 
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login'); 
  };

  const handleSearch = (e) => {
  e.preventDefault();
  if (searchTerm.trim()) {
    navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
  }
};

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
           {/* Menu bar added left of the brand name */}
          <Nav className="me-3">
            <NavDropdown title={<><i className="fas fa-bars"></i></>} >
              <NavDropdown.Item as={Link} to='/hone'>Home</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/offers'>Offers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/clubdeals'>Clubdeals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/about'>About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/logout'>Logout</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/settings'>Settings</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/contact'>ContactUS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/more'>More</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Navbar.Brand as={Link} to='/'>
            eshop-web
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>

            {/* Centered Search */}
            <Form className="mx-auto w-50" onSubmit={handleSearch}>
              <InputGroup>
                <FormControl
                  type='search'
                  placeholder='Search for products, categories or articles'
                  className='rounded-pill px-3'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ backgroundColor: '#f5f5f5' }}
                />
                <Button variant="link" type="submit" className="text-success ms-n5 me-2">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Form>

            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>

              {!isAuthenticated ? (
                <Nav.Link as={Link} to='/login'>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              ) : (
                <Nav.Link onClick={handleLogout}>
                  <i className='fas fa-sign-out-alt'></i> Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
