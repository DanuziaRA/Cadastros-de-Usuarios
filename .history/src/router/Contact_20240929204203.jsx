import { Link } from "react-router-dom";

function Contact() {
    return (
    <div>
        <h1>Página de contato</h1>
        {
            <p>
                <Link> to="/contact/">Forma de contato 1</Link>
            </p>
        }
    </div>
    );
};

export default Contact;
