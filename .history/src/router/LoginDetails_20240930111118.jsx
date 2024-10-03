import { useParams, useNavigate } from "react-router-dom";

function LoginDetails () {
    const {Entrar} = useParams();
    const navigate = useNavigate();

    const handleContact = () =>{
        console.log("Contato enviado!")
        return navigate("/");
    };

    return (
    <div>
        <h1>{Entrar}</h1>
        <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    );    
};

export default ContactDetails;