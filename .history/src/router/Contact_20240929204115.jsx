import { Link } from "react-router-dom";

function Contact() {
    return (
    <div>
        <h1>Página de contato</h1>
        {
            <p>
                <Link> to="/con</Link>
            </p>
        }
    </div>
    );
};

export default Contact;
