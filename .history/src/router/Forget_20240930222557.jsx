import { useParams, useNavigate } from "react-router-dom";

function ContactDetails () {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleContact = () =>{
        console.log("Contato enviado!")
        return navigate("/");
    };

    return (
    <div>
        <h1>C {id}</h1>
        <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    );    
};

export default ContactDetails;