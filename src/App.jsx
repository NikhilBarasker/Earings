import React, { lazy } from 'react'
import './App.css'
import Header4 from './Components/Header4';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer.jsx'
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import Vision from './Components/Vision.jsx';
import WhyUs from './Components/WhyUs.jsx';
import Error from './Components/Error.jsx';
import Scrolup from './Components/Scrolup.jsx';
import Cart from './Components/Cart.jsx';
import Login from './Components/Login.jsx';
import Registration from './Components/Registration.jsx'
import Home2 from './Components/Home2.jsx';
import ProductDetails from './Components/ProductDetails.jsx';

// const ProductDetails = lazy( () => import('./Components/ProductDetails'));  

function App() {
  return (
    <div>
      <Header4 />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductDetail" element={<ProductDetails />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Scrolup />
      <Footer />
    </div>
  );
}

export default App;
