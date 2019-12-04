numberUsers = 0;
numberTracks = 0;
numberMeasurements = 0;

function getStatistics() {
  // get number users:
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://enviroCar.org/api/dev/", true);
  xmlHttp.setRequestHeader("Accept", "application/json");
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      var json;

      if (xmlHttp.responseType === "json") {
        json = xmlHttp.response;
      } else {
        json = JSON.parse(xmlHttp.responseText);
      }
      numberUsers = json.counts.users;
      numberTracks = json.counts.tracks;
      numberMeasurements = json.counts.measurements;
    }
  };
  xmlHttp.send();
}
getStatistics();
