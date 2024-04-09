import React, { lazy } from 'react'
import './App.css'
import Header4 from './Components/Header4';
import Header from './Components/Header';
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
import ProductDetails from './Components/ProductDetails.jsx';
import SeeDiscover from './Components/SeeDiscover.jsx'
import Wishlists from "./Components/Wishlists.jsx"

// const ProductDetails = lazy( () => import('./Components/ProductDetails'));  

function App() {
  return (
    <div>
      {/* <Header4 /> */}
      <Header />
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
        <Route path="/NewColections" element={<SeeDiscover />} />
        <Route path="/wishlists" element={<Wishlists />} />

      </Routes>
      <Scrolup />
      <Footer />
    </div>
  );
}

export default App;
