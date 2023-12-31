import React from 'react';
import Head from 'next/head';

export default function RecuperarSenha() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Puc-GO</title>
      </Head>
      <style>{`
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
          margin-bottom: 20px;
          margin-top: 5px;
          text-align: left;
      }

      input {
          width: 100%;
          padding: 5px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
      }
      `}</style>
      <div className="principal">
        <div className="Registro">
          <h1>RECUPERAR SENHA</h1>
          <h3>Você poderá fazer login nesta conta de usuário com a nova senha</h3>
          <label htmlFor="Email">Email:</label><br />
          <input type="text" name="Email" />
          <label htmlFor="NovaSenha">Digite uma nova senha:</label><br />
          <input type="text" name="NovaSenha" />
          <label htmlFor="ConfirmarSenha">Digite a senha novamente para confirmá-la:</label><br />
          <input type="text" name="ConfirmarSenha" />
        <input
          onClick={() => (window.location.href = 'index.html')}
          value="GO"
          type="button"
          id="go"
        />
        </div>  
      </div>
    </div>
  );
}
