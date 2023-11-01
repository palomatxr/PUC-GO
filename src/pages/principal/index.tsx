import Head from 'next/head';
import Image from 'next/image'
import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';

export default function PrincipalMap() {
  const toLogin = () => {
    window.location.href = '/login';
  };

  /* useEffect(() => {
    const key = 'YhHsv9wIrpJVmMcw6HXf';

    const map = new maplibregl.Map({
      container: 'map',
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
      center: [0.11, 51.49],
      zoom: 6,
    });

    const london = new maplibregl.Marker()
      .setLngLat([0.11, 51.49])
      .addTo(map);

    map.on('error', function (err) {
      throw new Error("To load the map, you must replace YOUR_MAPTILER_API_KEY_HERE first, see README");
    });
  }, []); */

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
          height: 100vh;
          margin: 0;
        }
        
        .header {
          position: absolute;
          top: 5px;
          left: 50px;
          width: 300px;
          height: 300px;
          padding: 10px;
        }

        .containerMap {
          position: absolute;
          top: 10px;
          right: 0;
          bottom: 0;
          left: 360px;
        }

        .containerMap iframe {
          width: 100%;
          height: 100%;
        }
        
        .sidebar {
          position: fixed;
          left: 50px;
          top: 230px;
          width: 300px;
          height: 100%;
          color: white;
          padding: 10px;
        }

        .search-bar {
          color: black;
          padding: 10px;
          text-align: center;
          display: flex;
          align-items: center;
        }

        .search-input {
          width: 100%;
          padding: 5px;
          margin: 0 auto;
          border: none;
          border-radius: 5px;
        }

        .checkboxes-container {
          margin-top: 20px;
          position: fixed;
          top: 300px; /* Ajuste essa posição conforme necessário */
          padding: 10px;
          border: 1px solid #ccc;
          color: white;
          font-size: 20px;
          overflow-y: auto; /* Add this property to enable vertical scrolling */
          max-height: calc(100vh - 350px); /* Adjust the max height as needed */
        }

        .checkboxes-container input {
          display: block;
          margin: 5px 0;
        }

        label {
          display: block;
          margin: 5px 0;
        }
      `}</style>

      <div className="header">
            <Image src="/PUC-GO-2-removebg-preview.png" alt="Puc-Go" width={250} height={350} />
      </div>


      <div className="sidebar">
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Pesquisar destino..." />
        </div>
        <div className="checkboxes-container">
          <input type="checkbox" name="opcoes" /> ÔNIBUS
          <input type="checkbox" name="opcoes" /> A PÉ
          <input type="checkbox" name="opcoes" /> CARRO 4PSS (MOTORISTA)
          <input type="checkbox" name="opcoes" /> CARRO 7PSS (MOTORISTA)
          <input type="checkbox" name="opcoes" /> METRÔ
          <input type="checkbox" name="opcoes" /> METRÔ NA SUPERFÍCIE
          <input type="checkbox" name="opcoes" /> CARRO 4PSS (PASSAGEIRO)
          <input type="checkbox" name="opcoes" /> CARRO 7PSS (PASSAGEIRO)
        </div>
      </div>
      
      <div className="containerMap">
        <iframe width="500" height="400" src="https://api.maptiler.com/maps/basic-v2/?key=YhHsv9wIrpJVmMcw6HXf#3.3/-24.23322/-43.98134"></iframe>
      </div> 

    </div>
  );
}
