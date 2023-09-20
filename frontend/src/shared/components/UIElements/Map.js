import React, { useRef, useEffect } from "react";
import "./Map.css";

import { Loader } from "@googlemaps/js-api-loader";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const MAP_API_KEY = process.env.MAP_API_KEY;
    const loader = new Loader({
      apiKey: MAP_API_KEY,
      version: "weekly",
    });

    loader.load().then(async () => {
      const { Map } = await window.google.maps.importLibrary("maps");

      const map = new Map(document.getElementById("map"), {
        center,
        zoom,
      });
      new window.google.maps.Marker({ position: center, map: map });
    });
  }, [center, zoom]);

  return (
    <div
      id="map"
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
