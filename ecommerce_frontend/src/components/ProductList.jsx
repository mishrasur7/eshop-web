import React, { useEffect, useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import axios from 'axios';

import ProductCard from "./ProductCard"

//accessing products api from .env file 
const api = process.env.REACT_APP_API_URL_PRODUCTS;

const ProductList = () => {
  //State hook to store the list of products fetched from an API
  const [products, setProducts] = useState([]);

  //fetching products upon page render
  useEffect(() => fetchProducts(), []);

  //fetching products from api and saving to state variable 
  const fetchProducts = () => {
    axios.get(api)
      .then(res => {
        console.log('Data: ', res.data)
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };


  return (
    <Container className="mt-4">
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
