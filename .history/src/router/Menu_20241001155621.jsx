import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () =>{
  return (
    <nav>
      <h1Cadastros</h1>
      <ul>
      <li><Link to="/cadastro">Pessoa Física</Link></li>
      <li><Link to="/cadastropj">Pessoa Jurídica</Link></li>
      <li><Link to="/cadastroprof">Professor</Link></li>
      <li><Link to="/cadastroaluno">Aluno</Link></li>
      <li><Link to="/cadastroforn">Fornecedor</Link></li>

      </ul>
    </nav>
  )
}




export default Menu
