Template.heatmap.helpers({
  heatmapOptions: function() {
    // IF google maps not loaded yet, do nothing
    if (!GoogleMaps.loaded()) return;
    
    var options = {
      center: new google.maps.LatLng(-6.121435 , 106.774124),
      zoom: 8,
    };

    return options;
  },
});

Template.heatmap.onRendered(function() {
  var template = this;

  GoogleMaps.ready('heatmap', function(map) {
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: _.map(template.data.options.points, (item) => { 
        return new google.maps.LatLng(item.lat, item.lng);
      }),
      map: map.instance
    });
  });
});
