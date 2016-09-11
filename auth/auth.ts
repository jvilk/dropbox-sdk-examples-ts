import utils from '../utils';
import Dropbox = require('../Dropbox-sdk.min');

var CLIENT_ID = '42zjexze6mfpf7x';

// Parses the url and gets the access token if it is in the urls hash
function getAccessTokenFromUrl() {
  return <string> utils.parseQueryString(window.location.hash)['access_token'];
}

// If the user was just redirected from authenticating, the urls hash will
// contain the access token.
function isAuthenticated() {
  return !!getAccessTokenFromUrl();
}

// Render a list of items to #files
function renderItems(items: DropboxTypes.files.MetadataReference[]) {
  var filesContainer = document.getElementById('files');
  items.forEach(function(item) {
    var li = document.createElement('li');
    li.innerHTML = item.name;
    filesContainer.appendChild(li);
  });
}

// This example keeps both the authenticate and non-authenticated setions
// in the DOM and uses this function to show/hide the correct section.
function showPageSection(elementId: string) {
  document.getElementById(elementId).style.display = 'block';
}

if (isAuthenticated()) {
  showPageSection('authed-section');

  // Create an instance of Dropbox with the access token and use it to
  // fetch and render the files in the users root directory.
  var dbx = new Dropbox({ accessToken: getAccessTokenFromUrl() });
  dbx.filesListFolder({path: '', recursive: false, include_media_info: false, include_deleted: false, include_has_explicit_shared_members: false})
    .then(function(response) {
      renderItems(response.entries);
    })
    // NOTE: Need to explicitly specify type of error here, since TypeScript cannot infer it.
    // The type is mentioned in the TSDoc for filesListFolder, so hovering over filesListFolder
    // in a TS-equipped editor (e.g., Visual Studio Code) will show you that documentation.
    .catch(function(error: DropboxTypes.Error<DropboxTypes.files.ListFolderError>) {
      console.error(error);
    });
} else {
  showPageSection('pre-auth-section');

  // Set the login anchors href using dbx.getAuthenticationUrl()
  var dbx = new Dropbox({ clientId: CLIENT_ID });
  var authUrl = dbx.getAuthenticationUrl('http://localhost:8080/auth');
  (<HTMLAnchorElement> document.getElementById('authlink')).href = authUrl;
}