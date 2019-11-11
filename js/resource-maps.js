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
            projection: projection,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent),
              resolutions: resolutions,
                matrixIds: matrixIds
              })
        })
    });
	
    var defLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        })
    });

    var defView = new ol.View({
        center: [1000000, 6700000],
        zoom: 6
    });
	
	var layers = [defLayer,tracksWMTS];
	
	// var layers = [defLayer,
            // new ol.layer.Image({
                // source: new ol.source.ImageWMS({
                    // url: 'http://processing.envirocar.org/geoserver/ec/wms',
                    // params: {
                        // 'LAYERS': 'ec:track_count',
                    // },
                    // ratio: 1,
                    // serverType: 'geoserver'
                // }),
				// visible: true
            // }),
            // new ol.layer.Image({
                // source: new ol.source.ImageWMS({
                    // url: 'http://processing.envirocar.org/geoserver/ec/wms',
                    // params: {
                        // 'LAYERS': 'ec:mean_speed',
                    // },
                    // ratio: 1,
                    // serverType: 'geoserver'
                // }),
				// visible: false
            // })];

	// var layers = [defLayer,
            // new ol.layer.Image({
                // source: new ol.source.ImageWMS({
                    // url: 'http://192.168.21.163:8080/geoserver/wms',
                    // params: {
                        // 'LAYERS': 'tb15-du:mean_speed',
                    // },
                    // ratio: 1,
                    // serverType: 'geoserver'
                // }),
				// visible: true
            // }),
            // new ol.layer.Image({
                // source: new ol.source.ImageWMS({
                    // url: 'http://192.168.21.163:8080/geoserver/wms',
                    // params: {
                        // 'LAYERS': 'tb15-du:track_count',
                    // },
                    // ratio: 1,
                    // serverType: 'geoserver'
                // }),
				// visible: false
            // })];

	
    var mapres2 = new ol.Map({
        target: 'mapres2',
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
        })
    });
	
	var select = document.getElementById('layer-select');
    function onChange() {
      var layerIndex = select.value;
      for (var i = 1, ii = layers.length; i < ii; ++i) {
        layers[i].setVisible(i== layerIndex);
      }
    }
    select.addEventListener('change', onChange);
}

initialize();

setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 1000);
}, 1000);