import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AboutMe from "./pages/AboutMe";
import Cookies from "./pages/Cookies";
import PageNotFound404 from "./pages/PageNotFound404";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="about-me" element={<AboutMe/>}/>
          <Route path="cookies" element={<Cookies/>}/>
          <Route path="*" element={<PageNotFound404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
