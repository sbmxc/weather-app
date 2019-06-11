const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const yargs = require("yargs");

var location = yargs.argv._[0];

if (!location) {
  console.log("Please provide a location");
} else {
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, fdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Location:${data.location}`);
      console.log(`Weather: ${fdata}`);
    });
  });
}
