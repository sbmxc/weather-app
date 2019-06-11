const request = require("request");

const url =
  "https://api.darksky.net/forecast/22217fa5c78cce2357de4ac34de63e45/37.8267,-122.4233";

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
