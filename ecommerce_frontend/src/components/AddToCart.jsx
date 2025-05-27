import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const api = process.env.REACT_APP_API_URL_CART

const AddToCart = ({ productId })  => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  console.log('product id: ', productId)

  const handleAddToCart = async () => {
    const authToken = localStorage.getItem('authToken');
    console.log('authToken: ', authToken)

    if (!authToken) {
      setErrorMessage('Please log in with admin account to add items to your cart.');
      setSuccessMessage('');
      return;
    }

    try {
      await axios.post(api, 
        { 
            product: productId,
            quantity: 1,
        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );

      setSuccessMessage('Product added to cart!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to add product to cart.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      {successMessage && (
        <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
          {errorMessage}
        </Alert>
      )}

      <Button variant="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default AddToCart;
