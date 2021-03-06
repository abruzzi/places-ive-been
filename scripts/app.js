$(function() {
  var image = new ol.style.Circle({
    radius: 5,
    fill: null,
    stroke: new ol.style.Stroke({color: '#f04e98', width: 1})
  });

  var styles = {
    'Point': [new ol.style.Style({
      image: image
    })]
  };

  var styleFunction = function(feature, resolution) {
    return styles[feature.getGeometry().getType()];
  };

  $.getJSON('data/places-ive-been-3857.json').done(function(geojson) {

    var vectorSource = new ol.source.Vector({
      features: (new ol.format.GeoJSON()).readFeatures(geojson)
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: styleFunction
    });

    var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.Stamen({
            layer: 'toner'
          })
        }),
        vectorLayer
      ],
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }),
      view: new ol.View({
        center: ol.proj.transform([108.87316667, 34.19216667], 'EPSG:4326', 'EPSG:3857'),
        zoom: 2
      })
    });

  });

});
