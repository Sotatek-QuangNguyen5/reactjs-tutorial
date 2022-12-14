import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import ThemeProvider from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ThemeProvider>
);
