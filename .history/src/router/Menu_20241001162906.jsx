import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
  setIsDropdownOpen = useState(true);
};
const handleMouseLeave = () => {
  setIsDropdownOpen = useState(false);
};
  return (
    <nav>
      <h1>Criar Cadastros:</h1>
      <ul>
        <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', listStyle: 'none'}}
        >
          <button>Menu</button>
          {isDropdownOpen &&(
            <ul style={dropdownStyle}>
            <li><a href = "/cadastropf">Pessoa Física</a></li>
            <li><a href="/cadastropj">Pessoa Jurídica</a></li>
            <li><a href="/cadastroprof">Professor</a></li>
            <li><a href="/cadastroaluno">Aluno</a></li>
            <li><a href="/cadastroforn">Fornecedor</a></li>
      </ul>
          )}
      </li>
        </ul>
    </nav>
  );
};
const dropdownStyle ={
  position: 'absolute',
  top:'100%',
  left: 0,
  backgroundcolor: '#fff',
  border: '1px solic #ccc',
  padding: '10px',
  listStyle: 'none',
  display: 'block',
  minWidth: ''

 


}
export default Menu;
