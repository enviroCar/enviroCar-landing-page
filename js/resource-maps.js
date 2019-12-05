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
	
	var wmsSource = new ol.source.TileWMS({
      url: 'https://processing.envirocar.org/geoserver/wms',
      params: {'LAYERS': 'ec:track_count', 'TILED': true},
      serverType: 'geoserver',
    });
	
	var wmsSource2 = new ol.source.TileWMS({
      url: 'https://processing.envirocar.org/geoserver/wms',
      params: {'LAYERS': 'ec:mean_speed', 'TILED': true},
      serverType: 'geoserver',
    });
	
	var wmsSource3 = new ol.source.TileWMS({
      url: 'https://processing.envirocar.org/geoserver/wms',
      params: {'LAYERS': 'ec:speed_comparison', 'TILED': true},
      serverType: 'geoserver',
    });	
	
	var wmsSource4 = createWMSSource("ec:mean_co2");
	
	var wmsSource5 = createWMSSource("ec:mean_consumption");
	
    tracksWMTS = new ol.layer.Tile({
            source: new ol.source.WMTS({
            url: 'https://processing.envirocar.org/geoserver/gwc/service/wmts',
            layer: 'ec:track_count',
            matrixSet: 'EPSG:900913',
            format: 'image/png',
            projection: projection,
            tileGrid: tileGrid
        })
    });
	
    var wmts2 =  new ol.source.WMTS({
            url: 'https://processing.envirocar.org/geoserver/gwc/service/wmts',
              layer: 'ec:mean_speed',
            matrixSet: 'EPSG:900913',
            format: 'image/png',
            projection: projection,
              tileGrid: tileGrid
    });

    tracksWMTS2 = new ol.layer.Tile({
		source: wmts2
    });
	
	
    var wmts3 =  new ol.source.WMTS({
            url: 'https://processing.envirocar.org/geoserver/gwc/service/wmts',
              layer: 'ec:speed_comparison',
            matrixSet: 'EPSG:900913',
            format: 'image/png',
            projection: projection,
            tileGrid: tileGrid
    });

    tracksWMTS3 = new ol.layer.Tile({
		source: wmts3
    });
	
    tracksWMTS4 = new ol.layer.Tile({
            source: new ol.source.WMTS({
            url: 'https://processing.envirocar.org/geoserver/gwc/service/wmts',
              layer: 'ec:mean_co2',
            matrixSet: 'EPSG:900913',
            format: 'image/png',
            projection: projection,
            tileGrid: tileGrid
        })
    });
	
    tracksWMTS5 = new ol.layer.Tile({
            source: new ol.source.WMTS({
            url: 'https://processing.envirocar.org/geoserver/gwc/service/wmts',
              layer: 'ec:mean_consumption',
            matrixSet: 'EPSG:900913',
            format: 'image/png',
            projection: projection,
            tileGrid: tileGrid
        })
    });
	
	setupMap("", wmsSource, tracksWMTS, [
	    {
	    	"start": "<p>Track count: ",
	    	"propertyName": "count",
	    	"end": ""
	    }
    ]);
	
	setupMap(2, wmsSource2, tracksWMTS2, [
	    {
	    	"start": "<p>Average speed: ",
	    	"propertyName": "count",
	    	"end": " km/h"
	    }
    ]);
	
	setupMap(3, wmsSource3, tracksWMTS3, [
	    {
	    	"start": "<p>Average speed: ",
	    	"propertyName": "mean_speed",
	    	"end": " km/h</p></b>"
	    },
		{
	    	"start": "<p>Max speed (forward):  ",
	    	"propertyName": "maxspeed_forward",
	    	"end": " km/h</p>"
	    }
    ]);
	
	setupMap(4, wmsSource4, tracksWMTS4, [
	    {
	    	"start": "<p>Average co2 emissions: ",
	    	"propertyName": "mean_co2",
	    	"end": " kg/h"
	    }
    ]);
	
	setupMap(5, wmsSource5, tracksWMTS5, [
	    {
	    	"start": "<p>Average consumption: ",
	    	"propertyName": "mean_consumption",
	    	"end": " l/h"
	    }
    ]);	
	
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

function createWMSSource(layername) {
	return new ol.source.TileWMS({
      url: 'https://processing.envirocar.org/geoserver/wms',
      params: {'LAYERS': layername, 'TILED': true},
      serverType: 'geoserver',
    });	
};

function setupMap(mapNumber, wmsSource, mapLayer, propertyName) {
	
	var defLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.basemaps.cartocdn.com/spotify_dark/{z}/{x}/{y}.png"
        })
    });
			
    var defView = new ol.View({
        center: [1123883, 6673001],
		projection : "EPSG:900913",
        zoom: 6
    });
	
	var container3 = document.getElementById('popup' + mapNumber);
    var content3 = document.getElementById('popup-content' + mapNumber);
    var closer3 = document.getElementById('popup-closer' + mapNumber);
   
    var overlay3 = new ol.Overlay({
      element: container3,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
	
    var mapres3 = new ol.Map({
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
		overlays: [overlay3]
    });
	
	mapres3.on('singleclick', function(evt) {
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
	          overlay3.setPosition(coordinate);			  
			  var innerHTML = "";
              var i;			  
			  for (i = 0; i < propertyName.length; i++) {
				  var text = propertyName[i];
                  innerHTML = innerHTML + text.start + Math.round(response.features[0].properties[text.propertyName]) + text.end;
              }
              content3.innerHTML = innerHTML;
	      } else {
	      	overlay3.setPosition(undefined);
	      }
        });
    }
    });
	  
    closer3.onclick = function() {
      overlay3.setPosition(undefined);
      closer3.blur();
      return false;
    };

};

initialize();
