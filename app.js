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
