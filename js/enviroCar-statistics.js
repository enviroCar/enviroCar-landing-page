numberUsers = 0;
numberTracks = 0;
numberMeasurements = 0;

function getStatistics() {

    // get number users:
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://enviroCar.org/api/stable/users?limit=1", true);
    xmlHttp.setRequestHeader('contentType', 'application/json');
    xmlHttp.setRequestHeader('X-User', 'deleteMe');
    xmlHttp.setRequestHeader('X-Token', '1');
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            numberUsers = this.getResponseHeader('Content-Range').split('/')[1];
        }
    };
    xmlHttp.send(null);

    // get number tracks:
    var xmlHttp2 = new XMLHttpRequest();
    xmlHttp2.open("GET", "https://enviroCar.org/api/stable/tracks?limit=1", true);
    xmlHttp2.setRequestHeader('contentType', 'application/json');
    xmlHttp2.onreadystatechange = function () {
        if (xmlHttp2.readyState === 4 && xmlHttp2.status === 200) {
            numberTracks = this.getResponseHeader('Content-Range').split('/')[1];
        }
    };
    xmlHttp2.send(null);

    // get number measurements:
    var xmlHttp3 = new XMLHttpRequest();
    xmlHttp3.open("GET", "https://enviroCar.org/api/stable/measurements?limit=1", true);
    xmlHttp3.setRequestHeader('contentType', 'application/json');
    xmlHttp3.onreadystatechange = function () {
        if (xmlHttp3.readyState === 4 && xmlHttp3.status === 200) {
            numberMeasurements = this.getResponseHeader('Content-Range').split('/')[1];
        }
    };
    xmlHttp3.send(null);

}

getStatistics();