import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './Menu.css';

const Menu = () => {

  return (
    <nav>
      <ul className="menu-links">
      <h1>Criar Cadastros:</h1>
      <div>
              <button>Pessoa Física</button>
              <li><a href = "/cadastropf"></li></a>
            </div>

            <div>
            <button>Pessoa Jurídica</button>
            <li><a href="/cadastropj"></li></a>
            </div>

            <div>
            <button>Professor</button>
            <li></li><a href="/cadastroprof"></a>
            </div>

            <div>
            <button>Aluno</button>
            <a href="/cadastroaluno"></a>
            </div>

            <div>
            <button>Fornecedor</button>
            <a href="/cadastroforn"></a>
            </div>
            </ul>
            </nav>
  );
}
export default Menu;


