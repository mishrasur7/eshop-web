import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import ProductCard from "./ProductCard"

//accessing products api from .env file 
const api = process.env.REACT_APP_API_URL_PRODUCTS;

const ProductList = () => {
  const location = useLocation();
  const searchText = location.state?.searchText || "";

  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!searchText || searchText.trim() === "") {
      // If search is cleared, show all
      setDisplayProducts(products);
    } else {
      // Else filter
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setDisplayProducts(filtered);
    }
  }, [searchText, products]); // Run when searchText or products change

  const fetchProducts = () => {
    axios.get(api)
      .then(res => {
        setProducts(res.data);
        setDisplayProducts(res.data); // Set initial product list
      })
      .catch(err => console.error(err));
  };

  return (
    <Container className="mt-4">
      {displayProducts.length > 0 ? (
        <Row>
          {displayProducts.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <h5 className="text-muted">No products found.</h5>
        </div>
      )}
    </Container>
  );
};

export default ProductList;