import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  //navigate function for navigation using useNavigate hook from react-router-dom
  const navigate = useNavigate();
  //getting boolean value using double negation operator 
  const isAuthenticated = !!localStorage.getItem('authToken');

  // Logout handler responsible for removing authentication token from the localStorage and redirect to login page 
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login'); 
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            eshop-web
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Collapse id='basic-navbar-nav'>

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
