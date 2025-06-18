import React, { useState } from 'react';
import { Form, Button, Container, Alert, Collapse, Row, Col } from 'react-bootstrap';
import axios from 'axios';

//accessing products api from .env file
const api = process.env.REACT_APP_API_URL_PRODUCTS;

const AddProduct = () => {
    //state hook to hold form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
  });

  //state variable to control form visibility
  const [showForm, setShowForm] = useState(false);

  //state variables to set user action messages
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  //toggle form visibility to user upon button clicked
  const toggleForm = () => {
    setShowForm(!showForm);
    setSuccessMessage('');
    setError('');
  };

  //update form data when user types in
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const token = localStorage.getItem('authToken') 
  console.log('token', token)
  const config = {
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json'
    }
  }

  //submit form data to the backend through api
  const handleSubmit = async (e) => {
    //By default, submitting a form causes the page to reload. Using e.preventDefault() allows you to handle the form 
    // submission with JavaScript, keeping the user on the same page and providing a smoother experience 
    //for reference visit -> https://www.reddit.com/r/webdev/comments/1gajalx/why_do_developers_use_preventdefault_on_form/
    e.preventDefault();
    setSuccessMessage('');
    setError('');

    try {
        //send post request to backend
      await axios.post(api, formData, config);

      //upon success request, set the message, empty the form and close close it 
      setSuccessMessage('Product added successfully!');
      setFormData({ name: '', description: '', price: '', image_url: '' });
      setShowForm(false);
    } catch (err) {
        // upon failure console.log the err and set the error message 
      console.error(err);
      setError('Failed to add product.');
    }
  };

  //render the toggle button and form the the screen 
 return (
    <Container style={{ marginTop: '30px' }}>
      <div className="w-100 d-flex justify-content-end mb-3">
        <Button onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Add Product'}
        </Button>
      </div>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Collapse in={showForm}>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="price" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="image_url" className="mb-4">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Form button row: Cancel on left, Submit on right */}
            <Row>
              <Col className="d-flex justify-content-start">
                <Button variant="secondary" onClick={toggleForm}>
                  Cancel
                </Button>
              </Col>
              <Col className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Collapse>
    </Container>
  );
};

export default AddProduct;
