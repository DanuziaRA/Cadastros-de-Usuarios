import React from 'react'

function Menu() {
  return (
    <div>
      <div className="">
                <label>
                    <input type="checkbox" />
                    Lembrar usuário?
                    </label>
                <a href="/forget"> Esqueceu a senha?</a>
                </div>

            <button>Entrar</button>
            <div className="signup-link">
                <p>Não tem conta? <a href="contact/:id">Solicitar cadastro</a></p>
            </div>
    </div>
  )
}

export default Menu
