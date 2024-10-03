import { Link } from "react-router-dom";

function Contact() {
    return (
    <div>
        <h1>Fale conosco! </h1>
        {
            <p>
                <Link to="/contact/centro@univ.com.br">e-mail</Link>
            </p>
            }
    </div>
    );
};

export default Contact;
