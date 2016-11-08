const RefocusClient = require('refocus-client');

// Some configuration
const refocusUrl = 'http://localhost:3000'; // The URL where Refocus is running
const apiVersion = 'v1'; // The Refocus API version
const token = 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34'; // Your API token

// Instantiate the RefocusClient.
const rc = new RefocusClient(refocusUrl, apiVersion, token);

rc.addRootSubject({
  name: 'NorthAmerica',
  isPublished: true,
})
.then(() => rc.addChildSubject('NorthAmerica', {
  name: 'Canada',
  isPublished: true,
}))
.then(() => rc.addChildSubject('NorthAmerica', {
  name: 'UnitedStates',
  isPublished: true,
}))
.then(() => rc.addChildSubject('NorthAmerica', {
  name: 'Mexico',
  isPublished: true,
}))
.then(() => rc.addPerspective({
  lensId: '9f5cd862-d1a5-4d78-9c3f-1257e4cff721',
  name: 'NorthAmerica',
  rootSubject: 'NorthAmerica',
}))
.catch((err) => {
  console.log('Uh oh!', err);
});

rc.addAspect({
  name: 'TooHot',
  timeout: '1h',
  valueType: 'NUMERIC',
  valueLabel: '℉',
  criticalRange: [110, 999999],
  warningRange: [100, 110],
  infoRange: [90, 100],
  okRange: [-999999, 90],
  isPublished: true,
});

rc.addAspect({
  name: 'TooCold',
  timeout: '1h',
  valueType: 'NUMERIC',
  valueLabel: '℉',
  criticalRange: [-999999, -40],
  warningRange: [-40, -30],
  infoRange: [-30, -20],
  okRange: [-20, 999999],
  isPublished: true,
});
