import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ProductDetailsCard from './ProductDetailsCard';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import ProductCard from "./ProductCard"

//accessing products api from .env file 
const api = process.env.REACT_APP_API_URL_PRODUCTS;


const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product;


    //State hook to store the list of products fetched from an API
  const [similarProducts, setProducts] = useState([]);

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
    <Container>
      {product ? (
        <ProductDetailsCard product={product} />
      ) : (
        <p>No product data provided.</p>
      )}

      {similarProducts.length > 0 && (
        <>
          <h4 className="mt-5 mb-3">Similar Products</h4>
          <Row>
            {similarProducts.map(similar => (
              <Col key={similar.id} md={4} className="mb-4">
                <ProductCard product={similar} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
