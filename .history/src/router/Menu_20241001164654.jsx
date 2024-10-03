import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {

  return (
    <nav>
      <h1>Criar Cadastros:</h1>
      <div>
              <button>Pessoa Física</button>
            <a href = "/cadastropf"></a>
            </div>

            <div></div>
            <button>Pessoa Jurídica</button>
            <a href="/cadastropj"></a>
            <button>Professor</button>
            <a href="/cadastroprof"></a>
            <button>Aluno</button>
            <a href="/cadastroaluno"></a>
            <button>Fornecedor</button>
            <a href="/cadastroforn">Fornecedor</a>
            </nav>
  );
}
export default Menu;


