import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

const Menu = () =>{
  return (
    <nav>
      <h1>Criar Cadastros</h1>
      <ul>
        <div>    
      <li><Link to="/cadastropf"></Link></li>
      </div>
      <div>
      <button>Pessoa Jurídica</button>
      <li><Link to="/cadastropj"></Link></li>
      </div>
      <div>
      <button>Professor</button>
      <li><Link to="/cadastroprof">Professor</Link></li>
      </div>
      <div>
      <button>Aluno</button>
      <li><Link to="/cadastroaluno">Aluno</Link></li>
      </div>
      <div>
      <button>Fornecedor</button>
      <li><Link to="/cadastroforn">Fornecedor</Link></li>
      </div>

      </ul>
    </nav>
  )
}

export default Menu
