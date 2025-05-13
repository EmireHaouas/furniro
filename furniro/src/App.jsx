import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Global/Cartcontext";
import Header from "./Components/Global/Header";
import Footer from "./Components/Global/Footer";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import ProductDetail from "./Components/Global/ProductDetail";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Contact from './Components/Contact/Contact';
import Payment from "./Components/Payment/Payment.jsx";
import "./App.css";

const App = () => {
  
  return (
    <CartProvider>
      <Router basename="/furniro"> 
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
