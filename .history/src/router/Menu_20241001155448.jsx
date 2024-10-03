import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () =>{
  return (
    <nav>
      <ul>
      <li><Link to="/cadastro">Pessoa Física</Link></li>
      <li><Link to="/cadastropj">Pessoa Jurídica</Link></li>
      <li><Link to="/cadastro>Pessoa Física">Pessoa Física</Link></li>
      </ul>

      </ul>
    </nav>
  )
}




export default Menu
