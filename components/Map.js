import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";
import settings from "../settings/settings-development";
import MarkerIcon from "../assets/icons/marker.png";
import ClockIcon from "../assets/icons/clock.png";

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };
  const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: -2.9002285, lng: -79.0058365 },
      temperature: "20°",
      humidity: "50%",
      presure: "754.92 hPa",
    },
    {
      id: 7,
      name: "Chicago, Illinois",
      position: { lat: -2.3002195, lng: -79.0058365 },
      temperature: "20°",
      humidity: "50%",
      presure: "754.92 hPa",
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position: { lat: -2.9001225, lng: -78.9801999 },
      temperature: "25°",
      humidity: "33.6%",
      presure: "454.92 hPa",
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position: { lat: -2.9211285, lng: -79.0058965 },
      temperature: "22.2°",
      humidity: "31.7%",
      presure: "769.12 hPa",
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: -2.9081285, lng: -79.0051965 },
      temperature: "21°",
      humidity: "43.1%",
      presure: "610.41 hPa",
    },
    {
      id: 5,
      name: "New York, New York",
      position: { lat: -2.9004285, lng: -79.0199965 },
      temperature: "26.1°",
      humidity: "34.1%",
      presure: "693.21 hPa",
    },
  ];
  const center = {
    lat: -2.9001285,
    lng: -79.0058965,
  };

  const onLoad = (marker) => {};
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: settings.googleMaps.apiKey,
  });
  if (!isLoaded) {
    return <h1>Cargando ...</h1>;
  }
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <>
      <article className="prose flex justify-between items-center w-screen">
        <div>
          <h3 className="text-3xl font-light my-4">
            Nodos Sensores de Referencia
          </h3>
          <h4 className="text-2xl font-light my-6">Mediciones</h4>
        </div>
        <Image src={MarkerIcon} alt="Picture of the author" />
      </article>
      {isLoaded && (
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={mapContainerStyle}
        >
          {markers.map(
            ({ id, name, position, temperature, humidity, presure }) => (
              <Marker
                key={`${position.lat}-${position.lng}`}
                position={position}
                onLoad={onLoad}
                icon="https://ierse.uazuay.edu.ec/proyectos/meteorologia-continua/img/met_markermed.png"
                onClick={() => handleActiveMarker(id)}
              >
                {activeMarker === id ? (
                  <InfoWindow
                    onCloseClick={() => setActiveMarker(null)}
                    className="w-20"
                  >
                    <div>
                      <div>
                        <p className="bg-red-600 p-4 rounded-md text-white text-lg">
                          {name}
                        </p>
                      </div>
                      <div className="mx-10">
                        <div className="pt-2 flex justify-between gap-2">
                          <Image
                            src={ClockIcon}
                            className="my-auto"
                            alt="clock.png"
                            width={30}
                            height={30}
                          />
                          <p className="text-lg">{new Date().toString()}</p>
                        </div>
                        <div className="flex justify-between gap-2">
                          <div className="my-5 flex justify-between flex-col gap-2">
                            <div>
                              <h1>Temperatura:</h1>
                              <p className="bg-green-500 text-white font-semibold px-1 rounded-md text-center">
                                {temperature}
                              </p>
                            </div>
                            <div>
                              <h1>Humedad:</h1>
                              <p className="bg-blue-900 text-white font-semibold px-1 rounded-md text-center">
                                {humidity}
                              </p>
                            </div>
                            <div>
                              <h1>Presión:</h1>
                              <p className="bg-blue-400 text-white font-semibold px-1 rounded-md text-center">
                                {presure}
                              </p>
                            </div>
                          </div>
                          <Image
                            src={ClockIcon}
                            className="my-auto"
                            alt="clock.png"
                            width={100}
                          />
                        </div>
                      </div>
                    </div>
                  </InfoWindow>
                ) : null}
              </Marker>
            )
          )}
        </GoogleMap>
      )}
    </>
  );
};
export default Map;
