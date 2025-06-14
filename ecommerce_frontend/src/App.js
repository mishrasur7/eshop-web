import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import LoginForm from './components/LoginForm';
import RegisterationForm from './components/RegisterationForm';
import ProductDetails from './components/ProductDetails'
import CartItems from './components/CartItems'

function App() {
  const [searchText] = useState("");
  return (
    <Router>
      <Header />
      <AddProduct />
      <main>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path='/register' element={<RegisterationForm />}/>
          <Route path='/cart' element={<CartItems />}/>
          <Route path='/details' element={<ProductDetails />}/>
          <Route path='/' element={<ProductList searchText={searchText} />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
