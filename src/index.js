import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import HomePage from './pages/HomePage';
import BlankPage from './pages/BlankPage';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: "about-us",
    element: <Home /> // change later
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // react dom compile everything and only needs to be downloaded once
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
