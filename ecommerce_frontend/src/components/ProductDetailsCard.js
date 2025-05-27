import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


const ProductDetailsCard = ({ product }) => {

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg">
        <Row>
          {/* Image Section */}
          <Col md={6}>
            {product.image_url && (
              <Card.Img
                src={product.image_url}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            )}
          </Col>

          {/* Details Section */}
          <Col md={6}>
            <Card.Body>
              <h2 className="mb-3">{product.name}</h2>

              <p className="lead text-muted mb-4">
                {product.description}
              </p>

              <h4 className="text-success mb-4">Price: €{product.price}</h4>

              <button
                className="btn btn-lg btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add Buy logic here
                }}
              >
                Add to cart
              </button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetailsCard;
