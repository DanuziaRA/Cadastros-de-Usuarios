import React from 'react'
import './Principal/style.css'
import Trash from '../assets/lixeirinha.svg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function DetailsCadastro() {
    const navigate = useNavigate();
    const handleContact = () =>{
        return navigate("/Menu");
    };

    const remove = (e) =>{
        e.preventDefault();
        alert("O cadastro será excluido!")
    }

return (
    <div className='container'>
        <div>
        <h1>Cadastro de usuários</h1>
        
        <p>Nome:</p>
        <p>Email:</p>
        <p>CPF:</p>
        <p>Endereço:</p>
                <button onClick={remove}>
                    <img src={Trash}/>
                    </button>
                    <button onClick={handleContact}>Voltar</button>
                    </div>
                    </div>
                    
)
}   
        
export default DetailsCadastro