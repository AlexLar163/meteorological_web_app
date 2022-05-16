import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import settings from "../settings/settings-development";
const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: settings.googleMaps.apiKey,
  });
  if (!isLoaded) {
    return <h1>Cargando ...</h1>;
  }
  return (
    <>
      <article className="prose lg:prose-xl">
        <h3 className="my-4">Mapa</h3>
      </article>
      <GoogleMap
        center={{ lat: 48.8584, lng: 2.2945 }}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "400px" }}
      ></GoogleMap>
    </>
  );
};
export default Map;
