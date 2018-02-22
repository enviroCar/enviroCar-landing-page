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

    var mapres1 = new ol.Map({
        layers: [
            defLayer,
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://processing.envirocar.org:9090/geoserver/wms',
                    port: 9090,
                    params: {
                        'LAYERS': 'cite:roadsegments',
                        'STYLES': 'speedinterpolation'
                    },
                    ratio: 1,
                    serverType: 'geoserver'
                })
            })
        ],
        target: 'mapres1',
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
    }
    );
    var mapres2 = new ol.Map({
        target: 'mapres2',
        layers: [defLayer,
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://processing.envirocar.org:9090/geoserver/wms',
                    port: 9090,
                    params: {
                        'LAYERS': 'cite:roadsegments',
                        'STYLES': 'co2interpolation'
                    },
                    ratio: 1,
                    serverType: 'geoserver'
                })
            })
        ],
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
    var mapres3 = new ol.Map({
        target: 'mapres3',
        layers: [defLayer,
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                    url: 'http://processing.envirocar.org:9090/geoserver/wms',
                    port: 9090,
                    params: {
                        'LAYERS': 'cite:roadsegments',
                        'STYLES': 'consumptioninterpolation'
                    },
                    ratio: 1,
                    serverType: 'geoserver'
                })
            })
        ],
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
}

initialize();

setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 1000);
}, 1000);