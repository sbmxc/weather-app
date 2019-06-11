const request = require("request");

const forecast = (lg, lt, callback) => {
  const url = `https://api.darksky.net/forecast/22217fa5c78cce2357de4ac34de63e45/${lg},${lt}?units=si`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Can not connect to weather API", undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(
        undefined,
        `${response.body.daily.summary}. It is currently ${
          response.body.currently.temperature
        } degrees out. There is a ${
          response.body.currently.precipProbability
        }% chance of rain.`
      );
    }
  });
};
module.exports = forecast;
