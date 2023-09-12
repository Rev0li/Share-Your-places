const axios = require("axios");
const HttpError = require("../models/http-error");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

async function getCoordsFromAddress(address) {
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516
  // };
  const reponse = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );

  const data = reponse.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );

    throw error;
  }
  console.log(data);

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsFromAddress;
