import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Principal from './router/Principal'
import './index.css'

import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom';
  
  import Contact from './router/Contact.jsx';
  import ErrorPage from './router/ErrorPage.jsx';
  import ContactDetails from './router/ContactDetails.jsx';
  import Login from './router/Login.jsx';
  import Menu from './router/Menu.jsx';
  import Suporte from './router/Suporte.jsx';
  import Forget from './router/Forget.jsx';
  import Atualizar from './router/Atualizar.jsx';
  import Cadastro from './router/Cadastro.jsx';
  import Cadastropj from './router/Cadastropj.jsx';
  import Cadastroprof from './router/Cadastroprof.jsx';
  import Cadastroforn from './router/Cadastroforn.jsx';
  import Cadastroaluno from './router/Cadastroaluno.jsx';
  import DetailsCadastro from './router/DetailsCadastro.jsx';
  

  const router = createBrowserRouter([
        {
      path: "/",
      element: <Principal/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Login />,
        },
        {
          path: "suporte",
          element:<Suporte />,
        },
        {
          path: "menu",
          element:<Menu />,
        },
        {
          path: "/atualizar/id",
          element:<DetailsCadastro />,
        },
        {
          path: "contact",
          element:<Contact />,
        },
        //Nested routes - identificando unico
        {
          path: "/contact/id",
          element: <ContactDetails />,
        },
        {
          path: "forget",
          element: <Forget />,
        },
        {
          path: "atualizar",
          element: <Atualizar />,
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
          element: <Cadastroaluno />,
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
