import { useParams,useNavigate } from "react-router-dom";

function ContactDetails() {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleContact = () =>{
        console.log("Contato enviado!")
        return navigate("/");
    };

    return <div>
        <h1>Contato: {id}</h1>
        <button onClick={handContact}>Enviar mensagem</button>
        </div> 
        )   
};

export default ContactDetails;
