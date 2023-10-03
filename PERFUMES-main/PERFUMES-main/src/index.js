import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About';
import Products from './Products';
import Order from './Order';
import Contact from './contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "products",
    element: <Products/>,
  },
  {
    path: "order",
    element: <Order/>
  },
  {
    path: "contact",
    element: <Contact/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
