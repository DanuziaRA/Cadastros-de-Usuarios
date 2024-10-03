import React from 'react';
import { useState } from "react";


function Atualizar() {
  return (
    <div className="Atualizar">
      <form onSubmit={handleSubmit}>
        <h1>Para:centropro@uni.com.br</h1>
        <input type="text" 
            placeholder = "Mensagem"
            required
            onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleContact}>Enviar mensagem</button>
    </form></div>
  )
}

export default Atualizar
