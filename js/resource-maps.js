function initialize() {
    var defLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        })
    });

    var defView = new ol.View({
        center: [1000000, 6700000],
        zoom: 6
    });
	
	var layers = [defLayer,
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://processing.envirocar.org/geoserver/ec/wms',
                    params: {
                        'LAYERS': 'ec:track_count',
                    },
                    ratio: 1,
                    serverType: 'geoserver'
                }),
				visible: true
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://processing.envirocar.org/geoserver/ec/wms',
                    params: {
                        'LAYERS': 'ec:mean_speed',
                    },
                    ratio: 1,
                    serverType: 'geoserver'
                }),
				visible: false
            })];

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