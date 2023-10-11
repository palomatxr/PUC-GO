import Image from 'next/image'
import Script from 'next/script'
import Head from 'next/head'

export default function Home() {
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
