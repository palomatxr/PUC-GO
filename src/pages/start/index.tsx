import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react';

export default function Home() {
  // Função para redirecionar para a página de login
  const redirectToLogin = () => {
    window.location.href = '/login'; // Substitua pelo caminho real da sua página de login
  }

  // Função para redirecionar para a página de registro
  const redirectToRegister = () => {
    window.location.href = '/register'; // Substitua pelo caminho real da sua página de registro
  }

  return (
    <div>
      <Head>
        <title>login/Puc-Go</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx>{`
        body {
          background-color: #2A0D3C;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .principal {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .logo {
          margin-bottom: 20px;
          left: 0px;
        }

        input[type="button"] {
          background-color: #021fd9;
          color: white;
          width: 150px;
          height: 60px;
          text-align: center;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px;
        }
      `}</style>
      <div className="principal">
        <div className="logo">
          <Image src="/PUC-GO.png" alt="Puc-Go" width={150} height={250} />
        </div>
        <div>
          <button value="LOGIN" onClick={redirectToLogin} id="login">LOGIN</button>
          <button value="REGISTRAR" onClick={redirectToRegister} id="registrar">REGISTRAR</button>
        </div>
      </div>
    </div>
  );
}
