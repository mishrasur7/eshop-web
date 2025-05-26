import React, { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const api = process.env.REACT_APP_API_URL_LOGIN

const LoginForm = () => {
  // State variable to hold user credentials
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  });

  // State to show success/error messages
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects
  const navigate = useNavigate()

  // Update credentials as user types
  const handleChange = (e) => {
    setUserCredentials({ 
      ...userCredentials, 
      [e.target.name]: e.target.value 
    });
  };

  // Submit login request
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(api, userCredentials);
      // Save token to local storage with name authToken
      localStorage.setItem('authToken', response.data.token);
      setMessage('Login successful!');
      setError('');
      setUserCredentials({ username: '', password: '' });
      navigate('/')
    } catch (err) {
      setError('Login failed. ');
      setMessage('');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <Card>
        <Card.Body>
          <h3 className="text-center mb-4">Login</h3>

          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={userCredentials.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={userCredentials.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

               <Row className="align-items-center">
              <Col className="text-start">
                <small>
                  Not a user yet? {''}
                  <Link to="/register" style={{ textDecoration: 'underline' }}>
                    Register here
                  </Link>
                </small>
              </Col>
              <Col className="text-end">
                <Button variant="success" type="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginForm;
