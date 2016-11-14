const RefocusClient = require('refocus-client');

// Some configuration
const refocusUrl = 'http://localhost:3000'; // The URL where Refocus is running
const apiVersion = 'v1'; // The Refocus API version
const token = 'skqjkbqkjnq9n34jn3jk3fjnwefwefwef34'; // Your API token

// Instantiate the RefocusClient.
const rc = new RefocusClient(refocusUrl, apiVersion, token);

rc.addLens('./MultiTable.zip', { isPublished: true })
.then((lens) => rc.addPerspective({
  lensId: lens.id,
  name: 'NorthAmerica',
  rootSubject: 'NorthAmerica',
}))
.catch((err) => {
  console.log('Uh oh!', err);
});
