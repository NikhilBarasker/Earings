<<<<<<< HEAD
import React from "react";
import "./App.css";
import Header4 from "./Components/Header4";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Management from "./Components/Management.jsx";
import Quality from "./Components/Quality.jsx";
import Vision from "./Components/Vision.jsx";
import WhyUs from "./Components/WhyUs.jsx";
import Error from "./Components/Error.jsx";
import Scrolup from "./Components/Scrolup.jsx";
=======
import React from 'react'
import './App.css'
import Header4 from './Components/Header4';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer.jsx'
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import Management from './Components/Management.jsx'
import Quality from './Components/Quality.jsx';
import Vision from './Components/Vision.jsx';
import WhyUs from './Components/WhyUs.jsx';
import Error from './Components/Error.jsx';
import Scrolup from './Components/Scrolup.jsx';
import Cart from './Components/Cart.jsx';
>>>>>>> b8136826c1c140c0c2039da5eec4380b7bc2927a

function App() {
  return (
    <div>
      <Header4 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/management" element={<Management />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Scrolup />
      <Footer />
    </div>
  );
}

export default App;
