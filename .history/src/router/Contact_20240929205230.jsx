import { Link } from "react-router-dom";

function Contact() {
    return (
    <div>
        <h1>Página de contato</h1>
        {
            <p>
                <Link to="/contact/e-mail">e-mail</Link>
            </p>
            }
    </div>
    );
};

export default Contact;
