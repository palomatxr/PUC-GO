import { useState } from 'react';
import Head from "next/head";
import { registerUser } from '@/firebase/authentication';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [tel, setTel] = useState('');

  // Função para redirecionar para a página de login
  const redirectToLogin = () => {
    window.location.href = '/login';
  };

  const handleRegister = async (email: string,senha: string, additionalData: { nome: any; genero: any; telefone: any; }) => {
    try {
      await registerUser(email, senha, { nome, genero, telefone: tel });
      redirectToLogin();
    } catch (error) {
      throw error;
      // Tratar erros ou exibir uma mensagem para o usuário
    }
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <style>
          {`
            body {
                background-color: #2A0D3C;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }

            .principal {
                display: block;
                text-align: center;
                color: black;
            }

            .Registro {
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                background-color: #2A0D3C;
                color: white;
                width: 650px;
                position: relative;
                padding: 40px;
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 5px;
            }

            #go {
                background-color: #021fd9;
                color: white;
                width: 150px;
                height: 60px;
                position: relative;
                top: 20px;
                right: 0;
                text-align: center;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            label {
                display: block;
                margin-bottom: 10px;
                margin-top: 10px;
                text-align: left;
            }

            input {
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                color: black;
            }
          `}
        </style>
      </Head>
      <div className="principal">
        <div className="Registro">
          <label htmlFor="Nome">Nome</label>
          <input type="text" name="Nome" onChange={(e)=>{setNome(e.target.value)} } />

          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" onChange={(e)=>{setEmail(e.target.value)} } />

          <label htmlFor="Senha">Senha</label>
          <input type="text" name="Senha" onChange={(e)=>{setSenha(e.target.value)} } />
          <label htmlFor="Genero">Gênero</label>

          <input type="text" name="Genero" onChange={(e)=>{setGenero(e.target.value)}} />
          <label htmlFor="Telefone">Telefone</label>

          <input type="text" name="Telefone" onChange={(e)=>{setTel(e.target.value)}} />

          <button id="go" onClick={ (e) => { handleRegister(email,senha, { nome, genero, telefone: tel }) } } >GO</button>

        </div>
      </div>
    </div>
  );
}
