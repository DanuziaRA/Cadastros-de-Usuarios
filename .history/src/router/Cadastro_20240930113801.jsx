import { Link } from "react-router-dom";

function Cadastro() {
    return (
    <div>
        <h1>Cadastro</h1>
        {
            <p>
                <Link to="/cadastro">e-mail</Link>
            </p>
            }
    </div>
    );
};

export default Cadastro;