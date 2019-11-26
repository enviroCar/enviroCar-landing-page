function initialize() {	
	
	var projection = ol.proj.get('EPSG:4326');
    var projectionExtent = projection.getExtent();
    var mapExtent =  [5.86307954788208 , 46.3067741394043, 16.2247009277344, 55.0529403686523];
    var matrixIds = new Array(22);

    for (var z = 0; z < 22; ++z) {
      matrixIds[z] = "EPSG:4326:" + z;;
    }
	
	resolutions = [
      0.703125, 0.3515625, 0.17578125, 0.087890625,
      0.0439453125, 0.02197265625, 0.010986328125,
      0.0054931640625, 0.00274658203125, 0.001373291015625,
      6.866455078125E-4, 3.4332275390625E-4, 1.71661376953125E-4,
      8.58306884765625E-5, 4.291534423828125E-5, 2.1457672119140625E-5,
        1.0728836059570312E-5, 5.364418029785156E-6, 2.682209014892578E-6,
      1.341104507446289E-6, 6.705522537231445E-7, 3.3527612686157227E-7
    ];

    tracksWMTS = new ol.layer.Tile({
            source: new ol.source.WMTS({
            url: 'https://processing.envirocar.org/geoserver/gwc/service/wmts',
              layer: 'ec:tc_ms',
            matrixSet: 'EPSG:4326',
            format: 'image/png',
			//styles: "track-count-yellow-line-opacity",
            projection: projection,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent),
              resolutions: resolutions,
                matrixIds: matrixIds
              })
        })
    });
	
	var wmsSource = new ol.source.TileWMS({
      url: 'https://processing.envirocar.org/geoserver/wms',
      params: {'LAYERS': 'ec:track_count', 'TILED': true},
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    });
	
	var wmsSource2 = new ol.source.TileWMS({
      url: 'https://processing.envirocar.org/geoserver/wms',
      params: {'LAYERS': 'ec:mean_speed', 'TILED': true},
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    });
	
    var wmts2 =  new ol.source.WMTS({
            url: 'https://processing.envirocar.org/geoserver/gwc/service/wmts',
              layer: 'ec:mean_speed',
            matrixSet: 'EPSG:4326',
            format: 'image/png',
			//styles: "mean-speed-color-map",
            projection: projection,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent),
              resolutions: resolutions,
                matrixIds: matrixIds
              })
    });

    tracksWMTS2 = new ol.layer.Tile({
		source: wmts2
    });
	
    var defLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.basemaps.cartocdn.com/spotify_dark/{z}/{x}/{y}.png"
        })
    });
	
    var defLayer2 = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        })
    });


    var defView = new ol.View({
        center: [9.968, 51.388],
		projection : "EPSG:4326",
        zoom: 6
    });
	
	var layers = [defLayer,tracksWMTS];
	var layers2 = [defLayer2,tracksWMTS2];
	  
	var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
   
    var overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
		
	var container2 = document.getElementById('popup2');
    var content2 = document.getElementById('popup-content2');
    var closer2 = document.getElementById('popup-closer2');
   
    var overlay2 = new ol.Overlay({
      element: container2,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
	
    var mapres = new ol.Map({
        target: 'mapres',
        layers:  layers,
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
	
    var mapres2 = new ol.Map({
        target: 'mapres2',
        layers:  layers2,
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
		overlays: [overlay2]
    });
   
    mapres.on('singleclick', function(evt) {
	  var coordinate = evt.coordinate;
      var viewResolution = /** @type {number} */ (defView.getResolution());
      var url = wmsSource.getGetFeatureInfoUrl(
          coordinate, viewResolution, 'EPSG:4326',
          {'INFO_FORMAT': 'application/json', 'FEATURE_COUNT': 1});
          if (url) {
            $.ajax({
                  url: url,
                }).then(function(response) {
				    if(response.features.length > 0){
					    overlay.setPosition(coordinate);
                        content.innerHTML = "Track count: " + Math.round(response.features[0].properties.count);
					} else {
						overlay.setPosition(undefined);
					}
                });
          }
    });
   
    mapres2.on('singleclick', function(evt) {
	  var coordinate = evt.coordinate;
      var viewResolution = /** @type {number} */ (defView.getResolution());
      var url = wmsSource2.getGetFeatureInfoUrl(
          coordinate, viewResolution, 'EPSG:4326',
          {'INFO_FORMAT': 'application/json', 'FEATURE_COUNT': 1});
          
          if (url) {
            $.ajax({
                  url: url,
                }).then(function(response) {
				    if(response.features.length > 0){
					    overlay2.setPosition(coordinate);
                        content2.innerHTML = "Mean speed: " + Math.round(response.features[0].properties.mean_speed) + " km/h";
					} else {
						overlay2.setPosition(undefined);
					}
                });
          }
    });
	  
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
	
    closer.onclick = function() {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
	  
    closer2.onclick = function() {
      overlay2.setPosition(undefined);
      closer.blur();
      return false;
    };

}

initialize();

setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 1000);
}, 1000);