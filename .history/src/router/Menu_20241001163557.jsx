import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Menu = () => {

  return (
    <nav>
      <h1>Criar Cadastros:</h1>
      <ul>
        <li
        >
        <ul>
              <button>Pessoa Física</button>
            <li><a href = "/cadastropf">Pessoa Física</a></li>
            Fa
            <li><a href="/cadastropj">Pessoa Jurídica</a></li>
            <li><a href="/cadastroprof">Professor</a></li>
            <li><a href="/cadastroaluno">Aluno</a></li>
            <li><a href="/cadastroforn">Fornecedor</a></li>
      </ul>
          
      </li>
        </ul>
    </nav>
  );
}
export default Menu;


