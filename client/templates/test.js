Template.testAlbert.helpers({
  testMapOptions: function() {
    // IF google maps not loaded yet, do nothing
    if (!GoogleMaps.loaded()) return;
    
    var options = {
      center: {lat: 6.1745, lng: 106.8227},
      zoom: 13,
    };

    return options;
  },
});
