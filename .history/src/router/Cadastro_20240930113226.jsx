import React from 'react'
import { DiVim, DiVisualstudio } from 'react-icons/di'
import {useState} from "react";
import './Cadastro.css';
import { Link } from "react-router-dom";


const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userusuario, setUserusuario] = useState("");
  const [usercpf, setCpf] = useState("");
  const [userproftutor, setProftutor] = useState("");
  const [userpais, setPais] = useState("");
  const [usernaluno, setNaluno] = useState("");
  const [useremail, setEmail] = useState("");
  const [usercep, setCep] = useState("");
  const [userbairro, setBairro] = useState("");
  const [userendereco, setEndereco] = useState("");
  const [usercontato, setContato] = useState("");
  const [userinativar, setInativar] = useState("");
  const [userreativar, setReativar] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
alert("Enviando os dados");
};

function Cadastro() {
  return (
      <div>
        <h2>

        </h2>
          {
              <p>
                  <Link to="/cadastro"></Link>
              </p>
              }
      </div>
  )
}

    