import React, { FC, memo, useCallback, useRef, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator, MapRef } from "react-map-gl";
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

const CountrySelectMap: FC<IProps> = ({ setRegion, marker, setMarker, lat, lng }) => {
  const mapRef = useRef<MapRef>(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 500,
    latitude: lat || 37.50529626491968,
    longitude: lng || 126.98047832475031,
    zoom: 8,
  });

  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      setMarker(newViewport);
      return handleViewportChange({
        width: "100%",
        height: 500,
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
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      onViewportChange={handleViewportChange}
      mapStyle="mapbox://sprites/mapbox/basic-v8"
      asyncRender={true}
      transitionInterpolator={new FlyToInterpolator()}
    >
      <Geocoder
        marker={false}
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        position="top-left"
        onResult={(e: any) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000 };
          setRegion(e.result.place_name);
          handleViewportChange({
            width: "100%",
            height: 500,
            zoom: 9.3,
            latitude: e.result.center[1],
            longitude: e.result.center[0],
            ...geocoderDefaultOverrides,
          });
        }}
      />
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

export default memo(CountrySelectMap);
