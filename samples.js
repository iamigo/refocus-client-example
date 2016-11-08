const RefocusClient = require('refocus-client');
const Repeat = require('repeat');
const Random = require('tiny-random');

const refocusUrl = 'http://localhost:3000'; // The URL where Refocus is running
const apiVersion = 'v1'; // The Refocus API version
const token = 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34'; // Your API token

const rc = new RefocusClient(refocusUrl, apiVersion, token);
const random = new Random();

function temp() {
  return (random.real(-150, 150)).toString();
} // temp

function upsertSamples() {
  const arr = [
    { name: 'NorthAmerica.Canada|TooHot', value: temp() },
    { name: 'NorthAmerica.Canada|TooCold', value: temp() },
    { name: 'NorthAmerica.Mexico|TooHot', value: temp() },
    { name: 'NorthAmerica.Mexico|TooCold', value: temp() },
    { name: 'NorthAmerica.UnitedStates|TooHot', value: temp() },
    { name: 'NorthAmerica.UnitedStates|TooCold', value: temp() },
  ];
  rc.bulkUpsertSamples(arr)
  .catch(console.log);
} // upsertSamples

Repeat(upsertSamples).every(90, 'ms').for(25, 'seconds').start.in(2, 'sec');
