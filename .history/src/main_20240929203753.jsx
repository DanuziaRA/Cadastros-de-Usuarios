import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
  
  import Home from './router/Home.jsx';
  import Contact from './router/Contact.jsx';
  import ErrorPage from './router/ErrorPage.jsx';
  import ContactDetails from './router/ContactDetails.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Home />,
        },
        {
          path: "contact",
          element:<Contact />,
        },
        //Nested routes - identificando unico
        {
          path: "/contact/:id",
          
        }

      ]
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
);
