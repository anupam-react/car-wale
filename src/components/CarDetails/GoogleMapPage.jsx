import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSearchParams } from "react-router-dom";

const containerStyle = {
  width: "72vw",
  height: "400px",
};


function GoogleMapPage() {
 const [queryParameters] = useSearchParams()

  // const lat = queryParameters.get("lat");
  // const lng = queryParameters.get("lng");

  const center = {
  lat: 28.570317 ,
  lng: 77.32182
  };

  const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:"AIzaSyByojLIEkfDNHKTqWY2q5XLWxkJ3spiuio",
  });

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapPage);
