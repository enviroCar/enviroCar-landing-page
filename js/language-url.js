function parseQueryString(query) {
  query = query || window.location.search.substring(1);
  var qs = {};
  if (query.length > 0) {
    var split = query.split("&");
    for (var i = 0; i < split.length; i++) {
      var pair = split[i].split("=");
      var k = pair[0];
      var v = pair[1] === undefined ? undefined : decodeURIComponent(pair[1]);
      if (!qs.hasOwnProperty(k)) {
        qs[k] = v;
      } else if (typeof qs[k] === "string") {
        qs[k] = [qs[k], v];
      } else {
        qs[k].push(v);
      }
    }
  }
  return qs;
}

function encodeQueryString(qs) {
  var kvp = [];
  for (var k in qs) {
    if (qs.hasOwnProperty(k)) {
      var v = qs[k];
      if (v == undefined) {
        kvp.push(encodeURIComponent(k));
      } else if (typeof v === "string") {
        kvp.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
      } else {
        for (var i = 0; i < v.length; i++) {
          kvp.push(encodeURIComponent(k) + "=" + encodeURIComponent(v[i]));
        }
      }
    }
  }
  return kvp.join("&");
}

function insertParam(k, v) {
  v = v === undefined ? undefined : typeof v === "string" ? v : new String(v);

  var qs = parseQueryString();
  if (!qs.hasOwnProperty(k) || qs[k] !== v) {
    qs[k] = v;
    window.location.search = encodeQueryString(qs);
  }
}

function changeLanguage(lng) {
  if (lng === "de") {
    insertParam("lng", "de");
  } else {
    insertParam("lng", "en");
  }
}

function getLanguage() {
  var lng = parseQueryString().lng;
  return lng ? lng.toLowerCase() : lng;
}

function openSubpage(subpage) {
  var lngParam = "?lng=" + getLanguage();
  window.location.href = subpage + lngParam;
}

function gotoSubpageSection(subpage, section) {
  var lngParam = "?lng=" + getLanguage();
  window.location.href = subpage + lngParam + "#" + section;
}

function openPartnerSection() {
  var lngParam = "?lng=" + getLanguage();
  window.location.href = "index.html" + lngParam + "#partner";
}

(function() {
  var lng = getLanguage();
  if (!lng || (lng !== "de" && lng !== "en")) {
    // language not supported...
    console.log("unsupported language, switch to default: english");
    changeLanguage("en");
  }
})();
