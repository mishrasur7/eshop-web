import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/homeScreen'
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';


function App() {
  return (
    <div className="App">
      <Header />
      <AddProduct />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
