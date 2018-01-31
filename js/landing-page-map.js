function initialize() {
    var layers = [
//        new ol.layer.Tile({
//            source: new ol.source.Stamen({
//                layer: 'toner'
//            })
//        }),
        new ol.layer.Tile({
           source: new ol.source.OSM({
               url: "http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
           }) 
        }),
//        new ol.layer.Image({
//            source: new ol.source.ImageWMS({
//                url: 'http://processing.envirocar.org:9090/geoserver/wms',
//                port: 9090,
//                params: {
//                    'LAYERS': 'cite:roadsegments',
//                    'STYLES': 'co2interpolation'
//                },
//                ratio: 1,
//                serverType: 'geoserver'
//            })
//        }),
        new ol.layer.Image({
            source: new ol.source.ImageWMS({
                url: 'http://processing.envirocar.org:9090/geoserver/wms',
                port: 9090,
                params: {
//                    'LAYERS': 'cite:tracks'
                    'LAYERS': 'cite:roadsegments',
                    'STYLES': 'speedinterpolation'
                },
                ratio: 1,
                serverType: 'geoserver'
            })
        }),
//        new ol.layer.Image({
//            source: new ol.source.ImageWMS({
//                url: 'http://processing.envirocar.org:9090/geoserver/wms',
//                port: 9090,
//                params: {
//                    'LAYERS': 'cite:roadsegments',
//                    'STYLES': 'speedinterpolions'
//                },
//                ratio: 1,
//                serverType: 'geoserver'
//            })
//        })
    ];
    var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
            center: [1000000, 6700000],
            zoom: 6
        }),
        controls: ol.control.defaults({
          zoom: true,
          attribution: true,
          rotate: true
        }).extend([
            new ol.control.FullScreen()
        ]),
        interactions: ol.interaction.defaults({
            mouseWheelZoom: false
        })
    });
}

initialize();
function initialize2() {
    var layers = [
//        new ol.layer.Tile({
//            source: new ol.source.Stamen({
//                layer: 'toner'
//            })
//        }),
        new ol.layer.Tile({
           source: new ol.source.OSM({
               url: "http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
           }) 
        }),
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
        }),
//        new ol.layer.Image({
//            source: new ol.source.ImageWMS({
//                url: 'http://processing.envirocar.org:9090/geoserver/wms',
//                port: 9090,
//                params: {
//                    'LAYERS': 'cite:roadsegments',
//                    'STYLES': 'speedinterpolation'
//                },
//                ratio: 1,
//                serverType: 'geoserver'
//            })
//        }),
//        new ol.layer.Image({
//            source: new ol.source.ImageWMS({
//                url: 'http://processing.envirocar.org:9090/geoserver/wms',
//                port: 9090,
//                params: {
//                    'LAYERS': 'cite:roadsegments',
//                    'STYLES': 'speedinterpolions'
//                },
//                ratio: 1,
//                serverType: 'geoserver'
//            })
//        })
    ];
    var map2 = new ol.Map({
        layers: layers,
        target: 'map2',
        view: new ol.View({
            center: [1000000, 6700000],
            zoom: 6
        }),
        controls: ol.control.defaults({
          zoom: true,
          attribution: true,
          rotate: true
        }),
        interactions: ol.interaction.defaults({
            mouseWheelZoom: false
        })
    });
}

initialize2();

function initialize3() {
    var layers = [
        new ol.layer.Tile({
            source: new ol.source.Stamen({
                layer: 'toner'
            })
        }),
//        new ol.layer.Tile({
//           source: new ol.source.OSM({
//               url: "http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
//           }) 
//        }),
//        new ol.layer.Image({
//            source: new ol.source.ImageWMS({
//                url: 'http://processing.envirocar.org:9090/geoserver/wms',
//                port: 9090,
//                params: {
//                    'LAYERS': 'cite:roadsegments',
//                    'STYLES': 'co2interpolation'
//                },
//                ratio: 1,
//                serverType: 'geoserver'
//            })
//        }),
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
        }),
//        new ol.layer.Image({
//            source: new ol.source.ImageWMS({
//                url: 'http://processing.envirocar.org:9090/geoserver/wms',
//                port: 9090,
//                params: {
//                    'LAYERS': 'cite:roadsegments',
//                    'STYLES': 'speedinterpolions'
//                },
//                ratio: 1,
//                serverType: 'geoserver'
//            })
//        })
    ];
    var map3 = new ol.Map({
        layers: layers,
        target: 'map3',
        view: new ol.View({
            center: [1000000, 6700000],
            zoom: 6
        }),
        controls: ol.control.defaults({
          zoom: true,
          attribution: true,
          rotate: true
        }),
        interactions: ol.interaction.defaults({
            mouseWheelZoom: false
        })
    });
}

initialize3();


setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 1000);
}, 1000);