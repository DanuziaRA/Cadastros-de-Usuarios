import { useParams,useNavigate } from "react-router-dom";

function ContactDetails() {
    const {id} = useParams();
    const navigate = useNavite()


    return <div>
        <h1>contato: {id}</h1>
        <butt
        </div>;    
};

export default ContactDetails;
