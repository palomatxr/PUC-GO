import React from 'react';
import Head from 'next/head';

export default function RecuperarSenha() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Puc-GO</title>
        <link rel="stylesheet" href="/src/styles/reset_passaword/reset_passaword.css"  />
      </Head>
      <div className="principal">
        <h1>RECUPERAR SENHA</h1>
        <h3>você poderá fazer login nesta conta de usuário com a nova senha</h3>
        <label htmlFor="Email">Email:</label><br />
        <input type="text" name="Email"  />
        <label htmlFor="NovaSenha">Digite uma nova senha:</label><br />
        <input type="text" name="NovaSenha"  />
        <label htmlFor="ConfirmarSenha">Digite a senha novamente para confirmá-la:</label><br />
        <input type="text" name="ConfirmarSenha"  />
      </div>
      <div>
        <input
          onClick={() => (window.location.href = 'index.html')}
          value="INICIO"
          type="button"
          id="go"
        />
      </div>
    </div>
  );
}
