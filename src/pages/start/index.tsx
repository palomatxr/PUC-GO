import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react';

export default function Home() {
  // Função para redirecionar para a página de login
  const redirectToLogin = () => {
    window.location.href = '/src/pages/login'; // Substitua pelo caminho real da sua página de login
  }

  // Função para redirecionar para a página de registro
  const redirectToRegister = () => {
    window.location.href = '/src/pages/register'; // Substitua pelo caminho real da sua página de registro
  }

  useEffect(() => {
    // Adiciona os manipuladores de eventos aos botões no momento da montagem do componente
    const loginButton = document.getElementById("login");
    const registerButton = document.getElementById("registrar");

    if (loginButton) {
      loginButton.addEventListener("click", redirectToLogin);
    }

    if (registerButton) {
      registerButton.addEventListener("click", redirectToRegister);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>login/Puc-Go</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/src/styles/login/login.css" />
      </Head>
      <div className="principal">
        <div className="logo">
          <Image src="/PUC-GO.png" alt="Puc-Go" width={150} height={250} />
        </div>
        <div>
          <input value="LOGIN" type="button" id="login" />
          <input value="REGISTRAR" type="button" id="registrar" />
        </div>
      </div>
    </div>
  );
}
