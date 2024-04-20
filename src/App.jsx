import React, { lazy, useEffect, useState } from 'react'
import './App.css'
import Header4 from './Components/Header4';
// import Header from './Components/Header';
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
import TestHeader from './Components/TestHeader.jsx';
import Loader from './Components/Loader.jsx';
import Wallets from './Components/CategoriesPages/Wallets.jsx';
import Watches from './Components/CategoriesPages/Watches.jsx';
import NotFound from './Components/NotFound.jsx';
import Bracelets from './Components/CategoriesPages/Bracelets.jsx';
import EarRings from './Components/CategoriesPages/EarRings.jsx';
import LatestHead from './Components/LatestHead.jsx';

// const ProductDetails = lazy( () => import('./Components/ProductDetails'));  

function App() {
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoader(false);
    }, 3000);
  
    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <>
      {loader && <Loader/>}
      {!loader && 
      
        <div>
      {/* <Header4 /> */}
      {/* <Header /> */}
      {/* <TestHeader/> */}
      <LatestHead/>
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
        <Route path="/Categories/Wallets" element={<Wallets />} />
        <Route path="/Categories/Watches" element={<Watches />} />
        <Route path="/Categories/Bracelets" element={<Bracelets />} />
        <Route path="/Categories/Earrings" element={<EarRings />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Scrolup />
      <Footer />
    </div>
      }
    </>
  );
}

export default App;
