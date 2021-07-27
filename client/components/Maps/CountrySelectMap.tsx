import React, { FC, useCallback, useRef, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator, Source, Layer, MapRef } from "react-map-gl";
import Pin from "./Pin";
//@ts-ignore
import Geocoder from "react-map-gl-geocoder";
import { ICoordinate } from "@typings/db";

interface IProps {
  setRegion: (value: string) => void;
  marker: ICoordinate;
  setMarker: (coordinate: ICoordinate) => void;
  lat: number | undefined;
  lng: number | undefined;
}
// const route1 = {
//   type: "Feature",
//   properties: {},
//   geometry: {
//     type: "LineString",
//     coordinates: [
//       [126.98047832475031, 37.50529626491968],
//       [139.64044156923396, 35.7066225827444],
//       [114.37668379199201, 22.561031035250828],
//     ],
//   },
// };

const CountrySelectMap: FC<IProps> = ({ setRegion, marker, setMarker, lat, lng }) => {
  const mapRef = useRef<MapRef>(null);
  const [events, logEvents] = useState({});
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 500,
    latitude: lat || 37.50529626491968,
    longitude: lng || 126.98047832475031,
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
    <ReactMapGL
      className="map-gl"
      ref={mapRef}
      {...viewport}
      mapboxApiAccessToken={process.env.MAPBOX_API_ACCESS_KEY}
      onViewportChange={handleViewportChange}
      mapStyle="mapbox://sprites/mapbox/basic-v8"
      asyncRender={true}
      transitionInterpolator={new FlyToInterpolator()}
    >
      <Geocoder
        marker={false}
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={process.env.MAPBOX_API_ACCESS_KEY}
        position="top-left"
        onResult={(e: any) => {
          setRegion(e.result.place_name);
        }}
      />
      {/* <Source type="geojson" data={route1}>
        <Layer
          id="route"
          type="line"
          source="route"
          layout={{ "line-join": "round", "line-cap": "round" }}
          paint={{ "line-color": "red", "line-width": 2 }}
        />
      </Source> */}
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
  );
};

export default CountrySelectMap;
