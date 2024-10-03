import { useState } from "react";


function Atualizar  ()  {
  const handleContact = () =>{
    console.log("Contato enviado!")
    return navigate("/");
};
  return (
    <div className="Atualizar">
      <form>
        <h1>Para:centropro@uni.com.br</h1>
        <div className="input-field">
            <input type="email" 
            placeholder = "E-mail"
            required
        <button>Enviar mensagem</button>
        </div>
    </form>
    </div>
  );
}

export default Atualizar
