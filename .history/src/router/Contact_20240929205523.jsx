import { Link } from "react-router-dom";

function Contact() {
    return (
    <div>
        <h1>Página de contato</h1>
        {
            <p>
                <Link to="/contact/centro@univ">e-mail</Link>
            </p>
            }
    </div>
    );
};

export default Contact;
