import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function ContactDetails () {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const handleContact = () =>{
        console.log("Contato enviado!")
        return navigate("/");
    };
    const [username, setUsername] = useState("");
    return (
    <div>
        <h1>Confirme seu e-mail cadastrado {id}</h1>
                <onSubmit={handleSubmit}>
            <p>Acesse o sistema</p>
           
            <input type="email" 
            placeholder = "E-mail"
            required
            onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleContact}>Enviar</button>
        </div>
    );    
};

export default ContactDetails;