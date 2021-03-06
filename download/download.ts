function downloadFile() {
  var ACCESS_TOKEN = (<HTMLInputElement> document.getElementById('access-token')).value;
  var SHARED_LINK = (<HTMLInputElement> document.getElementById('shared-link')).value;
  var dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
  dbx.sharingGetSharedLinkFile({url: SHARED_LINK})
    .then(function(data) {
      var downloadUrl = URL.createObjectURL(data.fileBlob);
      var downloadButton = document.createElement('a');
      downloadButton.setAttribute('href', downloadUrl);
      downloadButton.setAttribute('download', data.name);
      downloadButton.setAttribute('class', 'button');
      downloadButton.innerText = 'Download: ' + data.name;
      document.getElementById('results').appendChild(downloadButton);
    })
    .catch(function(error: DropboxTypes.Error<DropboxTypes.sharing.GetSharedLinkFileError>) {
      console.error(error);
    });
  return false;
}