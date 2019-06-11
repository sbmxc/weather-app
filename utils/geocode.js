const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2Jtc2MiLCJhIjoiY2p3cm53OG85MGIweDN5cDJpNGFwMXdidyJ9.hOfHzfC291dIHItkAA50EA&limit=1`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the MAPBOX API", undefined);
    } else if (response.body.features.length === 0) {
      callback(
        "Unable to find the given location. Please try another search",
        undefined
      );
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
