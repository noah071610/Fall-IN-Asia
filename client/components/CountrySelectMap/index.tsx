import React, { FC, useCallback, useRef, useState } from "react";
import { CountrySelectMapWrapper } from "./styles";
import ReactMapGL, { Marker, FlyToInterpolator, Source, Layer, MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Pin from "./pin";
//@ts-ignore
import Geocoder from "react-map-gl-geocoder";

interface IProps {
  setRegion: (value: string) => void;
}

const route1 = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [
      [126.98047832475031, 37.50529626491968],
      [139.64044156923396, 35.7066225827444],
      [114.37668379199201, 22.561031035250828],
    ],
  },
};

const CountrySelectMap: FC<IProps> = ({ setRegion }) => {
  const [marker, setMarker] = useState({
    latitude: 37.50529626491968,
    longitude: 126.98047832475031,
  });
  const mapRef = useRef<MapRef>(null);
  const [events, logEvents] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 500,
    latitude: 37.50529626491968,
    longitude: 126.98047832475031,
    zoom: 8,
  });
  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      setMarker(newViewport);
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <CountrySelectMapWrapper>
      <ReactMapGL
        className="map-gl"
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiamFuZ2h5dW5zb28iLCJhIjoiY2tyZ2l0NnhoMmtncjJ4bmp4YjZheXZvcCJ9.7aD4HiGVqpKqM7rUj8FfJg"
        onViewportChange={handleViewportChange}
        mapStyle="mapbox://sprites/mapbox/basic-v8"
        asyncRender={true}
        transitionInterpolator={new FlyToInterpolator()}
      >
        <Geocoder
          marker={false}
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoiamFuZ2h5dW5zb28iLCJhIjoiY2tyZ2l0NnhoMmtncjJ4bmp4YjZheXZvcCJ9.7aD4HiGVqpKqM7rUj8FfJg"
          position="top-left"
          onResult={(e: any) => {
            setRegion(e.result.place_name);
          }}
        />
        <Source type="geojson" data={route1}>
          <Layer
            id="route"
            type="line"
            source="route"
            layout={{ "line-join": "round", "line-cap": "round" }}
            paint={{ "line-color": "red", "line-width": 2 }}
          />
        </Source>
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={onMarkerDragStart}
          onDragEnd={onMarkerDragEnd}
        >
          <Pin size={20} />
        </Marker>
      </ReactMapGL>
    </CountrySelectMapWrapper>
  );
};

export default CountrySelectMap;
