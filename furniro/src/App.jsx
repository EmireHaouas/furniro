import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const App=() => {


  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    
  )
}

export default App;
