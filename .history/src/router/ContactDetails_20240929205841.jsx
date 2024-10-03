import { useParams,useNavigate } from "react-router-dom";

function ContactDetails() {
    const {id} = useParams();
    const navigate = useNavite()

    const


    return <div>
        <h1>contato: {id}</h1>
        <button onClick={handContact}>Enviar mensagem</button>
        </div>;    
};

export default ContactDetails;
