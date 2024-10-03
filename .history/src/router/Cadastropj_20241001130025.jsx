import React from 'react'
import { DiVim, DiVisualstudio } from 'react-icons/di'
import {useState} from "react";
import './Cadastro.css';


const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userusuario, setUserusuario] = useState("");
  const [usercnpj, setCnpj] = useState("");
  const [useremail, setEmail] = useState("");
  const [usercep, setCep] = useState("");
  const [userbairro, setBairro] = useState("");
  const [userendereco, setEndereco] = useState("");
  const [usercontato, setContato] = useState("");
  const [userinativar, setInativar] = useState("");
  const [userreativar, setReativar] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
alert("Enviando os dados:" + username + " -" + password + "-" + userusuario + "-" + usercnpj + "-" +  usercep + "-" + userbairro + "-" + "-" + userendereco + "-" + useremail + "-" + usercontato + "-" + userinativar + "-" + userreativar);
};
  
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
          <h2>Cadastro usuário: Pessoa Física</h2>

            <div>
            <label>Nome*</label>
            <input type="text" placeholder='Nome Completo'
            required 
            onChange={(e) => setUsername(e.target.value)} 
            />          
            </div>

            <div>
            <label>Usuário*</label>
            <input type="text" placeholder='Nome de login'
            required
            onChange={(e) => setUserusuario(e.target.value)} />
            </div>
            
            <div>
            <label>CNPJ*</label>
            <input type="number" placeholder='Somente números'
            required
            onChange={(e) => setCnpj (e.target.value)} />
            </div>

            <div>
            <label>Professor tutor</label>
            <input type="checkbox" placeholder='professor tutor'
            onChange={(e) => setProftutor(e.target.value)} />
            </div>

            <div>
            <label>Pais de Aluno</label>
            <input type="checkbox"placeholder='responsável pelo aluno'
            onChange={(e) => setPais(e.target.value)} />
            </div>

            <div>
            <label>Aluno</label>
            <input type="text" placeholder='Nome completo do aluno'
            onChange={(e) => setNaluno(e.target.value)} />
            </div>

            <div>
            <label>E-mail*</label>
            <input type="email" placeholder='e-mail de login'
            required
            onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
            <label>Senha*</label>
            <input type="password" placeholder='Usar números e letras'
            required
            onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div>
            <label>CEP*</label>
            <input type="number" placeholder='Usar somente números'
            required
            onChange={(e) => setCep(e.target.value)} />
            </div>

            <div>
            <label>Bairro</label>
            <input type="text"placeholder='Bairro'
            onChange={(e) => setBairro(e.target.value)} />
            </div>
            
            <div>
              <label>Endereço*</label>
            <input type="text" placeholder='Endereço Completo'
            required
            onChange={(e) => setEndereco(e.target.value)} />
            </div>

            <div>
            <label>Contato</label>
            <input type="text" placeholder='DD + telefone'
            onChange={(e) => setContato(e.target.value)} />
            </div>

            <div>
            <label>Inativar usuário</label>
            <input type="checkbox"placeholder='inativar'
            onChange={(e) => setInativar(e.target.value)} />
            </div>

            <div>
            <label>Reativar usuário</label>
            <input type="checkbox"placeholder='ativar'
            onChange= {(e) => setReativar(e.target.value)} />
            </div>  

            <p>(*) Campos obrigatórios.</p>
            
            <button>Salvar</button> 
            <button>Enviar</button> 

        </form>
    </div>
    )
}

export default Cadastro;