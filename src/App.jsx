import React, { lazy, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Vision from "./Components/Vision.jsx";
import WhyUs from "./Components/WhyUs.jsx";
import Error from "./Components/Error.jsx";
import Cart from "./Components/Cart.jsx";
import Login from "./Components/Login.jsx";
import Registration from "./Components/Registration.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import SeeDiscover from "./Components/SeeDiscover.jsx";
import Wishlists from "./Components/Wishlists.jsx";
import Loader from "./Components/Loader.jsx";
import Wallets from "./Components/CategoriesPages/Wallets.jsx";
import Watches from "./Components/CategoriesPages/Watches_Content.jsx";
import NotFound from "./Components/NotFound.jsx";
import Bracelets from "./Components/CategoriesPages/Bracelets.jsx";
import EarRings from "./Components/CategoriesPages/EarRings.jsx";
import LatestHead from "./Components/LatestHead.jsx";
import styled from "styled-components";
import Checkout from "./Components/Checkout.jsx";
import KeyChains from "./Components/CategoriesPages/KeyChains.jsx";
import Rings from "./Components/CategoriesPages/Rings.jsx";
import Caps from "./Components/CategoriesPages/Caps.jsx";
import Goggles from "./Components/CategoriesPages/Goggles.jsx";
import Offers from "./Components/CategoriesPages/Offers.jsx";

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
      {loader && <Loader />}
      {!loader && (
        <div> <LatestHead />
          <Div>
            <Routes>
              <Route path="/" element={<Home />} />
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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/wishlist" element={<Wishlists />} />
              <Route path ="/Categories/KeyChain" element={<KeyChains />} />
              <Route path ="/Categories/Rings" element={<Rings />} />
              <Route path ="/Categories/Caps" element={<Caps />} />
              <Route path ="/Categories/Goggles" element={<Goggles />} />
              <Route path ="/Categories/Offers" element={<Offers />} />
            </Routes>
            {/* <ChatBoxLogo /> */}
            <Footer />
          </Div>
        </div>
      )}
    </>
  );
}

export default App;
const Div = styled.div`
  height: calc(100vh - 80px); /* Subtract header height from 100vh */
  overflow-y: scroll; /* Allow scrolling within the container */
`;
