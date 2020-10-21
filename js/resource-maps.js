function initialize() {	
	
	var projection = ol.proj.get('EPSG:900913');
    var projectionExtent = projection.getExtent();
    var mapExtent =  [778004, 5967462, 1788456, 7394670];
    var matrixIds = new Array(22);

    for (var z = 0; z < 22; ++z) {
      matrixIds[z] = "EPSG:900913:" + z;
    }
	
    var resolutions = [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, 0.5971642833948135, 0.29858214169740677, 0.14929107084870338, 0.07464553542435169, 0.037322767712175846, 0.018661383856087923, 0.009330691928043961, 0.004665345964021981, 0.0023326729820109904, 0.0011663364910054952, 5.831682455027476E-4, 2.915841227513738E-4, 1.457920613756869E-4];
	
	var tileGrid = new ol.tilegrid.WMTS({
                       origin: ol.extent.getTopLeft(projectionExtent),
                       resolutions: resolutions,
                       matrixIds: matrixIds
                   });
	
	var baseURL = 'https://processing.envirocar.org/geoserver';

	
	var wmsSource = createWMSSource(baseURL, "ec:track_count");
	
	var wmsSource2 = createWMSSource(baseURL, "ec:mean_speed");
	
	var wmsSource3 = createWMSSource(baseURL, "ec:speed_comparison");
	
	var wmsSource4 = createWMSSource(baseURL, "ec:mean_co2");
	
	var wmsSource5 = createWMSSource(baseURL, "ec:mean_consumption");
	
	// Chemnitz Hotspots
	var wmsSource6 = createWMSSource(baseURL, "ec:hotspot_index_chemnitz_all_data_kgh");



    var tracksWMTS = createTile(baseURL, "ec:track_count", projection, tileGrid);

    var tracksWMTS2 = createTile(baseURL, "ec:mean_speed", projection, tileGrid);	
	
    var tracksWMTS3 = createTile(baseURL, "ec:speed_comparison", projection, tileGrid);
	
    var tracksWMTS4 = createTile(baseURL, "ec:mean_co2", projection, tileGrid);
	
	var tracksWMTS5 = createTile(baseURL, "ec:mean_consumption", projection, tileGrid);

	// Chemnitz Hotspots
	var tracksWMTS6 = createTile(baseURL, "ec:hotspot_index_chemnitz_all_data_kgh", projection, tileGrid);

			
    var defView = new ol.View({
        center: [1123883, 6673001],
		projection : "EPSG:900913",
        zoom: 6
	});
	
	// Chemnitz Hotspots
	var defViewChemnitz = new ol.View({
        center: [1438247.82104910, 6591277.60324592],
		projection : "EPSG:900913",
        zoom: 12
    });
	
	setupMap("", wmsSource, tracksWMTS, [
	    {
	    	"start": "Track count: ",
	    	"propertyName": "count",
			"digits" : 0,
	    	"end": ""
	    }
    ], defView);
	
	setupMap(2, wmsSource2, tracksWMTS2, [
	    {
	    	"start": "<p>Average speed: ",
	    	"propertyName": "mean_speed",
			"digits" : 0,
	    	"end": " km/h</p></b>"
	    },
	    {
	    	"start": "<p>Track count: ",
	    	"propertyName": "count",
			"digits" : 0,
	    	"end": ""
	    }
    ], defView);
	
	setupMap(3, wmsSource3, tracksWMTS3, [
	    {
	    	"start": "<p>Average speed: ",
	    	"propertyName": "mean_speed",
			"digits" : 0,
	    	"end": " km/h</p></b>"
	    },
		{
	    	"start": "<p>Max speed (forward):  ",
	    	"propertyName": "maxspeed_forward",
			"digits" : 0,
	    	"end": " km/h</p></b>"
	    },
	    {
	    	"start": "<p>Track count: ",
	    	"propertyName": "count",
			"digits" : 0,
	    	"end": "</p>"
	    }
    ], defView);
	
	setupMap(4, wmsSource4, tracksWMTS4, [
	    {
	    	"start": "<p>Average co2 emissions: ",
	    	"propertyName": "mean_co2",
			"digits" : 1,
	    	"end": " kg/100km</p></b>"
	    },
		{
	    	"start": "<p>Average speed: ",
	    	"propertyName": "mean_speed",
			"digits" : 0,
	    	"end": " km/h</p></b>"
	    },
	    {
	    	"start": "<p>Track count: ",
	    	"propertyName": "count",
			"digits" : 0,
	    	"end": "</p>"
	    }
    ], defView);
	
	setupMap(5, wmsSource5, tracksWMTS5, [
	    {
	    	"start": "<p>Average fuel consumption: ",
	    	"propertyName": "mean_consumption",
			"digits" : 1,
	    	"end": " l/100km</p></b>"
	    },
		{
	    	"start": "<p>Average speed: ",
	    	"propertyName": "mean_speed",
			"digits" : 0,
	    	"end": " km/h</p></b>"
	    },
	    {
	    	"start": "<p>Track count: ",
	    	"propertyName": "count",
			"digits" : 0,
	    	"end": "</p>"
	    }
	], defView);	
	
	// Chemnitz Hotspots
	setupMap(6, wmsSource6, tracksWMTS6, [
	    {
	    	"start": "<p>Average fuel consumption: ",
	    	"propertyName": "mean_consumption",
			"digits" : 1,
	    	"end": " l/100km</p></b>"
	    },
		{
	    	"start": "<p>Average speed: ",
	    	"propertyName": "mean_speed",
			"digits" : 0,
	    	"end": " km/h</p></b>"
	    },
	    {
	    	"start": "<p>Track count: ",
	    	"propertyName": "count",
			"digits" : 0,
	    	"end": "</p>"
	    }
	], defViewChemnitz);
	
	jeoquery.defaultData.userName = 'envirocar';
		
	jeoquery.defaultLanguage = "de";
	
	jeoquery.geoNamesApiServer = 'testbed.dev.52north.org/geonames';
    jeoquery.geoNamesProtocol = 'https';
	
	var geolocatorTextField = document.getElementById('geolocator-text');
	
	$("#city").jeoCityAutoComplete();
	
	var geolocatorButton = document.getElementById('geolocator-button');
	
	//TODO find other geolocation solution, response only contains wgs84 coordinates
    // geolocatorButton.onclick = function(evt) {
	  // var geolocatorText = document.getElementById('city').value;
         
          // if (geolocatorText != "") {
			// var url = jeoquery.geoNamesProtocol + "://" + jeoquery.geoNamesApiServer + "/searchJSON?q=" + geolocatorText + "&maxRows=10&username=envirocar";
			  
            // $.ajax({
                  // url: url,
                // }).then(function(response) {
				    // if(response.geonames.length > 0){
						
						// var lat = Number(response.geonames[0].lat);
						// var lng = Number(response.geonames[0].lng);
						
						// var newView = new ol.View({
                                    // center: [lng, lat],
	                            	// projection : "EPSG:900913",
                                    // zoom: 12
                                // });						
						// mapres.setView(newView);
						// mapres2.setView(newView);

					// }
                // });
          // }
    // };
}

setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 1000);
}, 1000);

function createWMSSource(baseURL, layername) {
	return new ol.source.TileWMS({
      url: baseURL + '/wms',
      params: {'LAYERS': layername, 'TILED': true},
      serverType: 'geoserver',
    });	
};

function createTile(baseURL, layername, projection, tileGrid) {
	return new ol.layer.Tile({
            source: new ol.source.WMTS({
            url: baseURL + '/gwc/service/wmts',
            layer: layername,
            matrixSet: 'EPSG:900913',
            format: 'image/png',
            projection: projection,
            tileGrid: tileGrid
        })
    });
};

function setupMap(mapNumber, wmsSource, mapLayer, innerHTMLasJSON, defView) {
	
	var defLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.basemaps.cartocdn.com/spotify_dark/{z}/{x}/{y}.png"
        })
    });
	
	var container = document.getElementById('popup' + mapNumber);
    var content = document.getElementById('popup-content' + mapNumber);
    var closer = document.getElementById('popup-closer' + mapNumber);
   
    var overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
	
    var mapres = new ol.Map({
        target: 'mapres' + mapNumber,
        layers:  [defLayer, mapLayer],
        view: defView,
        controls: ol.control.defaults({
            zoom: true,
            attribution: true,
            rotate: true
        }).extend([
            new ol.control.FullScreen()
        ])
        ,interactions: ol.interaction.defaults({
            mouseWheelZoom: false
        }),
		overlays: [overlay]
    });
	
	mapres.on('singleclick', function(evt) {
	var coordinate = evt.coordinate;
    var viewResolution = /** @type {number} */ (defView.getResolution());
    var url = wmsSource.getGetFeatureInfoUrl(
        coordinate, viewResolution, 'EPSG:900913',
        {'INFO_FORMAT': 'application/json', 'FEATURE_COUNT': 1});
        
    if (url) {
      $.ajax({
            url: url,
          }).then(function(response) {
	         if(response.features.length > 0){
	          overlay.setPosition(coordinate);			  
			  var innerHTML = "";
              var i;			  
			  for (i = 0; i < innerHTMLasJSON.length; i++) {
				  var json = innerHTMLasJSON[i];
                  innerHTML = innerHTML + json.start + response.features[0].properties[json.propertyName].toFixed(json.digits) + json.end;
              }
              content.innerHTML = innerHTML;
	      } else {
	      	overlay.setPosition(undefined);
	      }
        });
    }
    });
	  
    closer.onclick = function() {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

};


initialize();
