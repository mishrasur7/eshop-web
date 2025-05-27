import React, { useEffect, useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import axios from 'axios';

import AddToCart from './AddToCart'
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
            <Card style={{ height: '100%' }}>
              {product.image_url && (
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={product.image_url}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}
              <Card.Body>
                <Card.Title className="mb-2">Product Name: {product.name}</Card.Title>
                <Card.Text className="text-truncate">Description: {product.description}</Card.Text>
                <div className="d-flex justify-content-around align-items-center">
                  <strong className="text-success">Price: €{product.price}</strong>
                  <AddToCart productId={product.id}/>
                </div>
              </Card.Body>
            </Card>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
