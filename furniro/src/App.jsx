import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Home from './Components/Home';

const App=() => {


  return (
    <div>
    <Home />
    </div>
    
  )
}

export default App;
