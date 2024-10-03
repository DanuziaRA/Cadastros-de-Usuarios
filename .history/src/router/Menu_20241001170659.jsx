import React from 'react';
import './Menu.css';

const Menu = () =>{
  return (
    <nav>
      <h1>Criar Cadastros</h1>
      <ul>
        <div>
        <button>Pessoa Física</button>
      <li><Link to="/cadastro"></Link></li>
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

      <li><Link to="/cadastroaluno">Aluno</Link></li>
      <li><Link to="/cadastroforn">Fornecedor</Link></li>

      </ul>
    </nav>
  )
}




export default Menu
