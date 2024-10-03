import { Link } from "react-router-dom";

function Contact() {
    return (
    <div>
        <h1>Fale conosco!</h1>
        
        {
            <p>
                <Link to="/contact/id">e-mail</Link>
            </p>
            }
    </div>
    );
};

export default Contact;
