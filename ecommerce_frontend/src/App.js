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
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductListWithSearch() {
  const query = useQuery();
  const searchTerm = query.get("search") || "";
  return <ProductList searchTerm={searchTerm} />;
}

function App() {
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
    <Route
  path='/'
  element={
    <ProductListWithSearch />
  }
/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
