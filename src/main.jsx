import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import IconContextProvider from './Context/IconContextProvider.jsx'
import ProductProvider from './Context/ProductProvider.jsx'

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <IconContextProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </IconContextProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
