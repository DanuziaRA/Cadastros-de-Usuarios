import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom';
  
  import Contact from './router/Contact.jsx';
  import ErrorPage from './router/ErrorPage.jsx';
  import ContactDetails from './router/ContactDetails.jsx';
  import Login from './router/Login.jsx';
  import Company from './router/Company.jsx';
  import Forget from './router/Forget.jsx';
  import Cadastro from './router/Cadastro.jsx';
  import Cadastropj from './router/Cadastropj.jsx';
  import Cadastroprof from './router/Cadastroprof.jsx';
  import Cadastroforn from './router/Cadastroforn.jsx';
  import Cadastroaluno from './router/'
  

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
          path: "empresa",
          element:<Company />,
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
        {
          path: "forget",
          element: <Forget />,
        },
        {
          path: "cadastropf",
          element: <Cadastro />,
        },
        {
          path: "cadastropj",
          element: <Cadastropj />,
        },
        {
          path: "cadastroprof",
          element: <Cadastroprof />,
        },
        {
          path: "cadastroforn",
          element: <Cadastroforn />,
        },
        {
          path: "cadastroaluno",
          element: < />,
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
