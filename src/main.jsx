import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import IconContextProvider from './Context/IconContextProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <IconContextProvider>
      <App />
    </IconContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
