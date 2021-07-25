import React, { FC, useCallback, useRef, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator, Source, Layer, MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Pin from "./Pin";

interface IProps {}

const CountryMap: FC<IProps> = () => {
  const [marker, setMarker] = useState({
    latitude: 37.50529626491968,
    longitude: 126.98047832475031,
  });
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 37.50529626491968,
    longitude: 126.98047832475031,
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
      mapboxApiAccessToken="pk.eyJ1IjoiamFuZ2h5dW5zb28iLCJhIjoiY2tyZ2l0NnhoMmtncjJ4bmp4YjZheXZvcCJ9.7aD4HiGVqpKqM7rUj8FfJg"
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
