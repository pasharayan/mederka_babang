Template.heatmap.helpers({
  heatmapOptions: function() {
    // IF google maps not loaded yet, do nothing
    if (!GoogleMaps.loaded()) return;
    // Guard for not given mapOptions
    this.options = this.options || {};

    var options = {
      center: this.options.center || new google.maps.LatLng(-3.0926415 , 115.2837585),
      zoom: this.options.zoom || 5,
      zoomable: (this.options.zoomable === false) ? false : true,
      scrollWheel: false,
      zoomControl: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
      disableDoubleClickZoom: true,
    };

    return options;
  },
});

Template.heatmap.onRendered(function() {
  var template = this;

  GoogleMaps.ready('heatmap', function(map) {
    // Test map with marker
    _.each(template.data.markers, function(item) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(Number(item.lat), Number(item.lng)),
        map: map.instance,
      });
    });

    // Initialize heatmap with initial data points from Template data parameter
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: _.map(template.data.points, (item) => {
        return {
          location: new google.maps.LatLng(Number(item.lat), Number(item.lng)),
          weight: (item.weight) ? item.weight : 1,
        };
      }),
      map: map.instance,
      radius: 50,
    });
  });
});
