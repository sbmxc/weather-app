const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const yargs = require("yargs");

var location = yargs.argv._[0];

if (!location) {
  console.log("Please provide a location");
} else {
  geocode(location, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, fdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Location:${location}`);
      console.log(`Weather: ${fdata}`);
    });
  });
}
