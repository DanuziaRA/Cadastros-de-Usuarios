import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function ContactDetails () {
    const {id} = useParams();
    const navigate = useNavigate();
    

    const handleContact = () =>{
        console.log("Contato enviado!")
        return navigate("/");
    };

    return (
    <div>
        <h1>Confirme seu e-mail cadastrado {id}</h1>
        <button onClick={handleContact}>Enviar</button>
        </div>
    );    
};

export default ContactDetails;