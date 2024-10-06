import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Atualizar  ()  {
    const navigate = useNavigate();

const handleContact = () =>{
    console.log("Contato enviado!")
    return navigate("/atualizar/id");
};


return (
    <div>
        <h1>Buscar cadastro de usuários</h1>
        <input type="text" 
            placeholder = "Nome ou CPF/CNPJ"
            required
            onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleContact}>Buscar</button>
        </div>
    );    
};

export default Atualizar
