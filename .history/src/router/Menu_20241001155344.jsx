import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () =>{
  return (
    <nav>
      <ul>
      <li><Link to="/cadastro">Pessoa Física</Link></li>
      <ul>
      <li><Link to="/cadastropj">Pessoa Jurí</Link></li>
      </ul>

      </ul>
    </nav>
  )
}




export default Menu
