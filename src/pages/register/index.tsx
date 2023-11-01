import { useEffect, useState } from 'react';
import Head from "next/head";

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [tel, setTel] = useState('');

  // Função para redirecionar para a página de login
  const redirectToLogin = () => {
    // Usamos o componente Link para navegação no Next.js
    // Substitua '/login' pelo caminho real da sua página de login
    window.location.href = '/principal';
  };

  const nomeChange = (e) => {
    setNome(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const senhaChange = (e) => {
    setSenha(e.target.value);
  };
  const generoChange = (e) => {
    setGenero(e.target.value);
  };
  const telChange = (e) => {
    setTel(e.target.value);
  };

  useEffect(() => {
    // Não é mais necessário adicionar manipuladores de eventos manualmente
  }, []);

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
            }
          `}
        </style>
      </Head>
      <div className="principal">
        <div className="Registro">
        <h1>Cadastra-se</h1>
          <h3>Se cadastre aqui e em breve você terá acesso ao Puc-go</h3>

          <label htmlFor="Nome">Nome</label>
          <input type="text" name="Nome" onChange={nomeChange} />

          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" onChange={emailChange} />

          <label htmlFor="Senha">Senha</label>
          <input type="text" name="Senha" onChange={senhaChange} />
          <label htmlFor="Genero">Gênero</label>

          <input type="text" name="Genero" onChange={generoChange} />
          <label htmlFor="Telefone">Telefone</label>

          <input type="text" name="Telefone" onChange={telChange} />
          <button id="go" onClick={redirectToLogin}>GO</button>

        </div>
      </div>
    </div>
  );
}
