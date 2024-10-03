import { Link } from "react-router-dom";

function Cadastro() {
    return (
    <div>
        <h1>Cadastro</h1>
        {
            <p>
                <Link to="/cadastro"></Link>
            </p>
            }
    </div>
    );
};

export default Cadastro;