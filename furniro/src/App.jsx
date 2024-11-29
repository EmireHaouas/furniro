import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Components/Global/Header';
import Main from './Components/Home/Main';
import Footer from './Components/Global/Footer';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import ShoppingCart  from './Components/Global/ShoppingCart ';
const App=() => {


  return (
    <div>
    <Shop  />
    </div>
    
  )
}

export default App;
