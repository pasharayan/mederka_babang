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
    // Test map with marker
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });

    // Initialize heatmap with initial data points from Template data parameter
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: _.map(template.data.options.points, (item) => { 
        return {
          location: new google.maps.LatLng(item.lat, item.lng),
          weight: (item.weight) ? item.weight : 1,
        };
      }),
      map: map.instance,
      radius: 50,
    });

    var data = _.map(template.data.options.points, (item) => {
      return {
        location: new google.maps.LatLng(item.lat, item.lng),
        weight: (item.weight) ? item.weight : 1,
      };
    });
    console.log(data);
    heatmap.setData(data);
  });
});
