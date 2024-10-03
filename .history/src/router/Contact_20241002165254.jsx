import { Link } from "react-router-dom";
import { FaGMAIL } from "react-icons/fa"

function Contact() {
    return (
    <div>
        <h1>Fale conosco!</h1>
        <p>E-mail de Suporte: [suporte@uni.com.br]</p>
        <p>Horário de Atendimento: Segunda a Sexta, das 9h às 17h.</p>

        {
            <p>
                <Link to="/contact/id">e-mail</Link>
                <  alt=""/>
            </p>
            }
    </div>
    );
};

export default Contact;
