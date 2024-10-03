import { useParams } from "react-router-dom";

function ContactDetails() {
    const {id} = useParams();
    return <div>
        <h1>Exibir mais informações de contato</h1>>
        </div>;    
};

export default ContactDetails;
