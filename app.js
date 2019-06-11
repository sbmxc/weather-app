const request = require("request");

const url =
  "https://api.darksky.net/forecast/22217fa5c78cce2357de4ac34de63e45/37.8267,-122.4233?units=si";

request({ url, json: true }, (error, response) => {
  console.log(
    `${response.body.daily.summary}. It is currently ${
      response.body.currently.temperature
    } degrees out. There is a ${
      response.body.currently.precipProbability
    }% chance of rain.`
  );
});

request(
  {
    url:
      "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2Jtc2MiLCJhIjoiY2p3cm53OG85MGIweDN5cDJpNGFwMXdidyJ9.hOfHzfC291dIHItkAA50EA&limit=1",
    json: true
  },
  (error, response) => {
    console.log(
      `The longitude of ${response.body.features[0].place_name} is ${
        response.body.features[0].center[0]
      }  and the latitude is ${response.body.features[0].center[1]}`
    );
  }
);
