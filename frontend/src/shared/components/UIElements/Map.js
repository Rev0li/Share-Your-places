import React, { useRef, useEffect } from "react";
import "./Map.css";

import { Loader } from "@googlemaps/js-api-loader";
require("dotenv").config();

const Map = (props) => {
  const MAP_API_KEY = process.env.MY_KEY;

  const loader = new Loader({
    apiKey: MAP_API_KEY,
    version: "weekly",
  });

  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    loader.load().then(async () => {
      const { Map } = await window.google.maps.importLibrary("maps");

      const map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      new window.google.maps.Marker({ position: center, map: map });
    });

    // const map = new window.google.maps.Map(mapRef.current, {
    //   center: center,
    //   zoom: zoom,
    // });
    // new window.google.maps.Marker({ position: center, map: map });
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
