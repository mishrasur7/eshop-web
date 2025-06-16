import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import ProductCard from "./ProductCard";

const api = process.env.REACT_APP_API_URL_PRODUCTS;

const ProductList = ({ searchTerm = "" }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(api)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  return (
    <Container className="mt-4">
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
