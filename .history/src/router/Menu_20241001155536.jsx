import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () =>{
  return (
    <nav>
      <ul>
      <li><Link to="/cadastro">Pessoa Física</Link></li>
      <li><Link to="/cadastropj">Pessoa Jurídica</Link></li>
      <li><Link to="/cadastroprof">Professor</Link></li>
      <li><Link to="/cadastroaluno">Pessoa Física</Link></li>
      <li><Link to="/cadastroforn">Pessoa Física</Link></li>

      </ul>
    </nav>
  )
}




export default Menu
