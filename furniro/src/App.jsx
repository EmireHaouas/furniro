import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Global/Header';
import Footer from './Components/Global/Footer';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import ProductDetail from './Components/Global/ProductDetail';
import ShoppingCart from "./Components/Global/ShoppingCart";
import Cart from './Components/Cart/Cart';
import Contact from "./Components/Contact/Contact";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} /> {/* Route dynamique */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />

                
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;