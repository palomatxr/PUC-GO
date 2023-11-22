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
    window.location.href = '/login';
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
          <link rel="stylesheet" href="/src/styles/register/register.css" />
        </Head>
        <div className="principal">
          <div className="Registro">
            <label htmlFor="Nome">Nome</label>
            <br />
            <input type="text" name="Nome" />
            <label htmlFor="Email">Email</label>
            <br />
            <input type="text" name="Email" onChange={(e)=>{setEmail(e.target.value)}/>
            <label htmlFor="Senha">Senha</label>
            <br />
            <input type="text" name="Senha" onChange={(e)=>{setSenha(e.target.value)}/>
            <label htmlFor="Genero">Gênero</label>
            <br />
            <input type="text" name="Genero" />
            <label htmlFor="Telefone">Telefone</label>
            <br />
            <input type="text" name="Telefone" />
          </div>
          <div>
            <input value="GO" type="button" id="go" onClick{(e) => {registerUser(email,password)}/>
          </div>
        </div>
      </div>
  );
}
