import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {

  return (
    <nav>
      <h1>Criar Cadastros:</h1>
              <button>Pessoa Física</button>
            <a href = "/cadastropf"></a>
            <button>Pessoa Jurídica</button>
            <a href="/cadastropj"></a>
            <button>Professor</button>
            <a href="/cadastroprof">Professor</a>
            <button>Aluno</button>
            <a href="/cadastroaluno">Aluno</a>
            <button>Fornecedor</button>
            <a href="/cadastroforn">Fornecedor</a>
            </nav>
  );
}
export default Menu;


