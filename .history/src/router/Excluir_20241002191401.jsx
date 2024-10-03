import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Excluir() {
    const navigate = useNavigate();
    const handleContact = () =>{
    console.log("Buscar!")
    return navigate("/Menu");
};

function removeCadastro(setUserusuario){
    fetch('http://localhost:5173/${setUserusuario}',{
    method: 'DELETE',
}).then(resp => resp.json())
.catch(err => console.log(err))}

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
export default Excluir
