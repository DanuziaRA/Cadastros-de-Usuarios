import React from 'react';
import {Link} from 'react-router-dom';

const 

function Menu() {
  return (
      <div className="mybutton"> 
        <button>Entrar</button>
            <div className="signup-link">
                <p>Não tem conta? <a href="contact/:id">Solicitar cadastro</a></p>
            </div>
    </div>
  )
}

export default Menu
