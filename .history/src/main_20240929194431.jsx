import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider} from 'react-router-dom';
  
  import Home from './router/Home.jsx';
  import Contact from './router/Contact.jsx';

  const react = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "contact",
      element:<Contact/>,
    },
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={}/>
  </StrictMode>,
);
