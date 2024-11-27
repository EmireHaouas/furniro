import react from "react";
import Header from '../Global/Header';
import Main from './Main';
import Footer from '../Global/Footer';
import { Link } from 'react-router-dom';

const Home=() =>{
    return(
        <div>
          <Header />
          <Main />
          <Footer />
          
    
        </div>
    )
};
export default Home;