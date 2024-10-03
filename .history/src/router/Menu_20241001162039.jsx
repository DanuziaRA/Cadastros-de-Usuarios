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
            <Link to="/cadastropf">Pessoa Física</Link></li>
      <li><Link to="/cadastropj">Pessoa Jurídica</Link></li>
      <li><Link to="/cadastroprof">Professor</Link></li>
      <li><Link to="/cadastroaluno">Aluno</Link></li>
      <li><Link to="/cadastroforn">Fornecedor</Link></li>

      </ul>
      </li>
        )}
        </ul>
    </nav>
  );
};
export default Menu;
