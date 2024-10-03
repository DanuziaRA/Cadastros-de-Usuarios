import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function Contact() {
    return (
    <div>
        <h1>Fale conosco!</h1>.
        <p>E-mail de Suporte: [suporte@uni.com.br]</p>
        <p>Horário de Atendimento: Segunda a Sexta, das 9h às 17h.</p>.

    const navigate = useNavigate();

    const handleContact = () = {
        console.log("Contato enviado!")
        return navigate("/");

    return (
    <div>
        <FaEnvelope alt=""/> 
        <h1>Para:centropro@uni.com.br</h1>
        <input type="text" 
            placeholder = "Mensagem"
            required
            onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleContact}>Enviar mensagem</button>
        </div>
        
        </div>
    );
)
    }

export default Contact;
