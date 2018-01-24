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
                    'LAYERS': 'cite:roadsegments',
                    'STYLES': 'speedinterpolation'
                },
                ratio: 1,
                serverType: 'geoserver'
            })
        })
    ];
    var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
            center: [1000000, 6700000],
            zoom: 6
        }),
        controls: ol.control.defaults({
          zoom: false,
          attribution: false,
          rotate: false
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