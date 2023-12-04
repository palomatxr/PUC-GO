import Head from 'next/head';
import Image from 'next/image';
import React, {useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker , StandaloneSearchBox } from '@react-google-maps/api';
import { findUser } from '@/firebase/querries';

type Position = {
  lat: number;
  lng: number;
};

export default function PrincipalMap() {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [userData, setUserData] = useState();

  const [pointB, setPointB] = React.useState<google.maps.LatLngLiteral>();

  const [origin, setOrigin] = React.useState<google.maps.LatLngLiteral | null>(
    null
  );
  const [destination, setDestination] =
    React.useState<google.maps.LatLngLiteral | null>(null);

  const [response, setResponse] =
    React.useState<google.maps.DistanceMatrixResponse | null>(null);
  
  const [searchBoxB, setSearchBoxB] =
    React.useState<google.maps.places.SearchBox>();

  const [selectedDestination, setSelectedDestination] = useState<Position | null>(null);

  const handleFindUser = async () =>{
    try{
      const userData = await findUser();
      if (userData) {
        console.log(userData.userAdditionalData); // Aqui está o objeto data
        window.alert(`
        Alguem pode te acompanhar nessa volta para casa ! 
        O nome é ${userData.userAdditionalData.nome}, seu telefone é ${userData.userAdditionalData.telefone} !
        Entre em contato ! `);
      }
    } catch (e) {
      console.log("Error ao buscar user")
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting the location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handlePlaceSelected = (place: any) => {
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setSelectedDestination(location);
    setPointB(location); 
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
  };

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
          top: 3px;
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
          top: 270px;
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
          top: 330px; 
          padding: 10px;
          border: 1px solid #ccc;
          color: white;
          font-size: 20px;
          overflow-y: auto; 
          max-height: calc(100vh - 350px); 
        }

        .checkboxes-container input {
          display: block;
          margin: 5px 0;
        }

        label {
          display: block;
          margin: 5px 0;
        }

        .map{
          width: 170vh;
          height: 95vh;
          position: absolute;
          top: 10px;
          left: 360px;
        }
      `}</style>

      <div className="header">
            <Image src="/PUC-GO-2-removebg-preview.png" alt="Puc-Go" width={250} height={350} />
      </div>

      <LoadScript googleMapsApiKey="AIzaSyAwiGGvtWLsUxLhhtgOzUbwLSLZhXwzBDA" libraries={['places']}>

        <div className="sidebar">
          <div className="search-bar">
        
            <StandaloneSearchBox
              onLoad={(ref) => setSearchBoxB(ref)}
              onPlacesChanged={() => {
                const places = searchBoxB?.getPlaces();
                if (places && places[0]) {
                  handlePlaceSelected(places[0]);
                }
                onPlacesChangedB();
              }}
              >
              <input
                type="text" 
                className="search-input" 
                placeholder="Pesquisar destino..."
              />
            </StandaloneSearchBox>

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

        <div className='map'>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={currentPosition || { lat: -22.977726, lng: -43.232090 }}
              zoom={15}
            >
              {currentPosition && <Marker position={currentPosition} />}
              {selectedDestination && 
              <Marker 
                position={selectedDestination}
                onClick={handleFindUser}/>}
            </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
}
