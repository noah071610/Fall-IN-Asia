import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator, Source, Layer, MapRef } from "react-map-gl";
import Pin from "./Pin";
import { IStory } from "@typings/db";

interface IProps {
  stories: IStory[];
}

const CountryRouteMap: FC<IProps> = ({ stories }) => {
  const mapRef = useRef<MapRef>(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 350,
    latitude: stories?.[0]?.lat || 37.50529626491968,
    longitude: stories?.[0]?.lng || 126.98047832475031,
    zoom: 1,
  });

  const route = useMemo(() => {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: stories?.map((v) => [v.lng, v.lat]),
      },
    };
  }, [stories]);

  const handleViewportChange = useCallback(
    (newViewport) => setViewport({ ...newViewport, width: "100%" }),
    []
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
      <Source type="geojson" data={route as any}>
        <Layer
          id="route"
          type="line"
          source="route"
          layout={{ "line-join": "round", "line-cap": "round" }}
          paint={{ "line-color": "red", "line-width": 2 }}
        />
      </Source>
      {stories?.map((v, i) => (
        <Marker
          key={i}
          longitude={v.lng}
          latitude={v.lat}
          offsetTop={-20}
          offsetLeft={-10}
          draggable={false}
        >
          <Pin isUserInfoPage={true} story={v} size={20} />
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default CountryRouteMap;
