$(function() {
  var map = L.map('map').setView([34, 108], 10);

  L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  }).addTo( map );

  L.tileLayer.wms("http://localhost:9999/cgi-bin/mapserv?map=/data/sx.map", {
            layers: 'density',
            format: 'image/png',
            transparent: true,
            maxZoom: 16,
            minZoom: 2,
        }).addTo(map);
});
