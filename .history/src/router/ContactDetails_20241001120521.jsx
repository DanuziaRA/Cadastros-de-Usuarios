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
        <h1>Para: {id}</h1>
        <input type="text" 
            placeholder = "Mensagem"
            required
            onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    );    
};

export default ContactDetails;
