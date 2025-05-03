import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../components/Products.js'



function homeScreen() {
  return (
    <div>
      <h1>Our Latest Products</h1>
      <Row>
   
          {/* {products.map(product => (
                 <Col key = {product._id} sm = {12} md = {6} lg= {4} xl = {3}>  
                   <h3>{product.name}</h3>
                 </Col>
          )  
        )} */}
      </Row>
    </div>
  )
}

export default homeScreen
