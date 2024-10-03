import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

const Menu = () =>{
  return (
    <nav>
      <h1>Criar  Cadastro:</h1>
      <ul>
        <div>    
      <li><Link to="/cadastropf">Pessoa Física</Link></li>
      </div>
      <div>
      <li><Link to="/cadastropj">Pessoa Jurídica</Link></li>
      </div>
      <div>
        <li><Link to="/cadastroprof">Professor</Link></li>
      </div>
      <div>
      <li><Link to="/cadastroaluno">Aluno</Link></li>
      </div>
      <div>
      <li><Link to="/cadastroforn">Fornecedor</Link></li>
      </div>
      <h2>Atualizar cadastro:</h2>
              <li><Link to="/">Buscar</Link></li>

      </ul>
    </nav>
  )
}

export default Menu
