import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom';
  
  import Contact from './router/Contact.jsx';
  import ErrorPage from './router/ErrorPage.jsx';
  import ContactDetails from './router/ContactDetails.jsx';
  import Login from './router/Login.jsx';
  import Company from './router/Company.jsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Login />,
        },
        {
          path: "company",
          element:< />,
        },
        {
          path: "contact",
          element:<Contact />,
        },
        //Nested routes - identificando unico
        {
          path: "/contact/:id",
          element: <ContactDetails />,
        },
        //Navigate para página não existentes
        {
          path: "oldcontact",
          element: <Navigate to="/contact" />,
        },
      ],
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
);
