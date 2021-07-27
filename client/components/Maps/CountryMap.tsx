import React, { FC, useCallback, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Pin from "./Pin";

interface IProps {
  lat: number;
  lng: number;
}

const CountryMap: FC<IProps> = ({ lat, lng }) => {
  const [marker, setMarker] = useState({
    latitude: lat || 37.50529626491968,
    longitude: lng || 126.98047832475031,
  });
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: lat || 37.50529626491968,
    longitude: lng || 126.98047832475031,
    zoom: 6,
  });

  const handleViewportChange = useCallback(
    (newViewport) =>
      setViewport((prev) => {
        return { ...prev, zoom: newViewport.zoom };
      }),
    []
  );
  return (
    <ReactMapGL
      className="map-gl"
      style={{ marginBottom: "4rem" }}
      {...viewport}
      mapboxApiAccessToken={process.env.MAPBOX_API_ACCESS_KEY}
      onViewportChange={handleViewportChange}
      mapStyle="mapbox://sprites/mapbox/basic-v8"
    >
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        offsetTop={-20}
        offsetLeft={-10}
      >
        <Pin size={20} />
      </Marker>
    </ReactMapGL>
  );
};

export default CountryMap;
