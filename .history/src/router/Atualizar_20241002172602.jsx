import { useState } from "react";


function Atualizar()  {
  return (
    <div className="Atualizar">
      <form>
        <h1>Para:centropro@uni.com.br</h1>
        <div className="input-field">
            <input type="email" 
            placeholder = "E-mail"
            required
        <button onClick={handleContact}>Enviar mensagem</button>
    </form>
    </div>
  );
}

export default Atualizar
