import React, { useState } from 'react';
import Head from 'next/head';
import {loginUser } from '@/firebase/authentication';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');    

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
          <h1>FAÇA LOGIN</h1>
          <h3>Para aqueles que já tem conta  no Puc-go</h3>

          <label htmlFor="Email">Email:</label>
          <input type="email" onChange= {(e) => {setEmail(e.target.value)}}/>

          <label htmlFor="Senha">Senha:</label>
          <input type="password" onChange= {(e) => {setPassword(e.target.value)}} />

          <button id="go" onClick= {(e) => {loginUser(email,password)}} >GO</button>
        </div>
      </div>
    </div>
  );
}

