var layer = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var layers = [
    new ol.layer.Tile({
        source: new ol.source.OSM()
    }),
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
    projection: 'EPSG:4326',
    layers: layers,
    target: 'map',
    view: new ol.View({
        center: [997148, 6569099],
        zoom: 6
    })
});


setTimeout(function () {
    window.dispatchEvent(new Event('resize'));
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 1000);
}, 1000);