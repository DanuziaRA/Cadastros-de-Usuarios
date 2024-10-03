import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Atualizar  ()  {
  const navigate = useNavigate();

  const handleContact = () =>{
    console.log("Buscar!")
    return navigate("/Menu");
};

return (
    <div>
        <h1>Para:centropro@uni.com.br</h1>
        <input type="text" 
            placeholder = "Nome ou CPF/CNPJ"
            required
            onChange={(e) => setUsername(e.target.value)}
            
            <div>
            <label>Professor tutor</label>
            <input type="checkbox" placeholder='professor tutor'
            />
            </div>
            />
        <button onClick={handleContact}>Buscar</button>
        </div>
    );    
};

export default Atualizar
