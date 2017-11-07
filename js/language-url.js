function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}

function insertParam(key, value) {
    key = escape(key);
    value = escape(value);
    var kvp = document.location.search.substr(1).split('&');
    if (kvp == '') {
        document.location.search = '?' + key + '=' + value;
    } else {

        var i = kvp.length;
        var x;
        while (i--) {
            x = kvp[i].split('=');
            if (x[0] == key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }

        if (i < 0) {
            kvp[kvp.length] = [key, value].join('=');
        }

//this will reload the page, it's likely better to store this until finished
        document.location.search = kvp.join('&');
    }
}


var query = window.location.search.substring(1);
var qs = parse_query_string(query);
if (qs.lng) {
    qs.lng = qs.lng.toLowerCase();
    if (qs.lng == "de") {
// set content to german
        console.log("german");
    } else if (qs.lng == "en") {
// set content to english
        console.log("english");
    } else {
// language not supported...
        console.log("unsupported language, switch to default: english");
        insertParam("lng", "en");
    }
} else {
// no lnguage param found
    console.log("no language specification, switch to default: english");
    insertParam("lng", "en");
}

function changeLanguage(lng) {
    if (lng == "de") {
        insertParam("lng", "de");
    } else {
        insertParam("lng", "en");
    }
}
;

function openSubpage(subpage) {
    var query = window.location.search.substring(1);
    var qs = parse_query_string(query);
    var lngParam = "?lng=";
    if (qs.lng) {
        qs.lng = qs.lng.toLowerCase();
        if (qs.lng == "de") {
            // set content to german
            lngParam += "de";
        } else if (qs.lng == "en") {
            // set content to english
            lngParam += "en";
        } else {
            // language not supported...
            lngParam += "en";
            insertParam("lng", "en");
        }
    } else {
        // no lnguage param found
            lngParam += "en";
        insertParam("lng", "en");
    }
    location.href = subpage+lngParam;
};

function openPartnerSection() {
    var query = window.location.search.substring(1);
    var qs = parse_query_string(query);
    var lngParam = "?lng=";
    if (qs.lng) {
        qs.lng = qs.lng.toLowerCase();
        if (qs.lng == "de") {
            // set content to german
            lngParam += "de";
        } else if (qs.lng == "en") {
            // set content to english
            lngParam += "en";
        } else {
            // language not supported...
            lngParam += "en";
            insertParam("lng", "en");
        }
    } else {
        // no lnguage param found
            lngParam += "en";
        insertParam("lng", "en");
    }
    location.href = "index.html"+lngParam+"#partner";
}