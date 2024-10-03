import { useParams } from "react-router-dom";

function ContactDetails() {
    const {id} = useParams();
    return <div>
        <h1>contato: {id}</h1>
        </div>;    
};

export default ContactDetails;
