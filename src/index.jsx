import './style.css' 

import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'


function Principal() {
  return (
      <div className='App'>
        <Navbar />
        <h1></h1>
        <Outlet />
        <Footer />
    </div>
  );
}

export default Principal;
