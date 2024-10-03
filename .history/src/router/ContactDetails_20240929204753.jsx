import { useParams } from "react-router-dom";

function ContactDetails() {
    const {id} = useParams
    return <div>ContactDetails</div>;    
};

export default ContactDetails;
