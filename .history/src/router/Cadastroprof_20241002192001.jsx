import React from 'react'
import { DiVim, DiVisualstudio } from 'react-icons/di'
import {useState} from "react";
import './Cadastro.css';


const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userusuario, setUserusuario] = useState("");
  const [usercpf, setCpf] = useState("");
  const [userdisciplinas, setDisciplinas] = useState("");
  const [useremail, setEmail] = useState("");
  const [usercep, setCep] = useState("");
  const [userbairro, setBairro] = useState("");
  const [userendereco, setEndereco] = useState("");
  const [usercontato, setContato] = useState("");
  const [userinativar, setInativar] = useState("");
  const [userreativar, setReativar] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
alert("Enviando os dados:" + username + " -" + password + "-" + userusuario + "-" + usercpf + "-" + userdisciplinas + "-" + usercep + "-" + userbairro + "-" + "-" + userendereco + "-" + useremail + "-" + usercontato + "-" + userinativar + "-" + userreativar);
};

const remove = (e) 
  
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
          <h2>Cadastro usuário: Professor</h2>

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
            <label>CPF*</label>
            <input type="number" placeholder='Somente números'
            required
            onChange={(e) => setCpf (e.target.value)} />
            </div>

            <div>
            <label>Disciplina</label>
            <input type="text" placeholder='disciplina(s)'
            onChange={(e) => setDisciplinas(e.target.value)} />
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
        <button>Excluir</button> 
    </div>
    )
}

export default Cadastro;