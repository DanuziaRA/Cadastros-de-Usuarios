import { useParams,useNavigate } from "react-router-dom";

function ContactDetails() {
    const {id} = useParams();
    const navigate = use


    return <div>
        <h1>contato: {id}</h1>
        </div>;    
};

export default ContactDetails;
