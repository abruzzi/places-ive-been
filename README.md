### Places I've been visualization

I'm setting up a web app for visualize my person footprint, this is the front end part. it contains:

1.  OpenLayers3
2.  Leaflet

#### OpenLayers3

Script for OpenLayers3 is in `scripts/app.js`, it just use a `geojson` file to draw the layer, that part is very simple:

```js

$.getJSON('data/places-ive-been-3857.json').done(function(geojson) {

  var vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(geojson)
  });

});
```

Since the `OL3` is using `EPSG:3857` as the default projection, that's why I re-project it from `EPSG:4326` to `EPSG:3857`.

![places ive been in hongkong](https://raw.githubusercontent.com/abruzzi/places-ive-been/master/places-ive-been-resized.png)

#### Leaflet

And script for Leaflet is in file `scripts/places.js`. it request a backend server
using `MapServer`.

```js

L.tileLayer.wms("http://localhost:9999/cgi-bin/mapserv?map=/data/sx.map", {
          layers: 'density',
          format: 'image/png',
          transparent: true,
          maxZoom: 16,
          minZoom: 2,
      }).addTo(map);
```

That server export `/data/sx.map` and `density` as the layer, and the output looks like this:

![places ive been in shaanxi](https://raw.githubusercontent.com/abruzzi/places-ive-been/master/shaanxi-resized.png)
