import React, { useEffect, useState } from 'react';
import { Container, Table, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

const api = process.env.REACT_APP_API_URL_CART;

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('Please login to see your cart.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(api, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setCartItems(response.data);
      } catch (err) {
        setError('Failed to fetch cart items.');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) return <Spinner animation="border" />;

  if (error) return <Alert variant="danger">{error}</Alert>;

  if (cartItems.length === 0) return <Alert variant="info">Your cart is empty.</Alert>;

  console.log('cart', cartItems)

  return (
    <Container className="mt-4">
      <h3>Your Cart</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Added Date</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ id, product, quantity, added_date }) => (
            <tr key={id}>
              <td>{product.name}</td>
              <td>{quantity}</td>
              <td>{new Date(added_date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CartItems;
