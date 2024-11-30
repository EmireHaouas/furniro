import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Global/Header';
import Footer from './Components/Global/Footer';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

{/* Road Map
    Ajout du panier dynamique 
    ajout page produit dynamique 
    fixer l'icone du panier  
    
*/}
