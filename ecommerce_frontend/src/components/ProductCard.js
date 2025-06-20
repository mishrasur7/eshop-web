import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AddToCart from './AddToCart'

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/details', { state: { product } });
  };

  return (
  <Card
      onClick={handleCardClick}
      style={{ height: '100%', cursor: 'pointer' }}
    >
      {product.image_url && (
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={product.image_url}
            alt={product.name}
            style={{
              width: '100%',
              height: '200px', // or any fixed height
              objectFit: 'cover',
              objectPosition: 'center',
              backgroundColor: '#f8f9fa' // optional: light background fill
            }}
          />
        </div>
      )}
      <Card.Body>
        <Card.Title className="mb-2">
          Product Name: {product.name}
        </Card.Title>
        <Card.Text className="text-truncate">
          Description: {product.description}
        </Card.Text>
        <div className="d-flex justify-content-around align-items-center">
          <strong className="text-success">Price: €{product.price}</strong>
          <AddToCart productId={product.id}/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
