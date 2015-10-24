Template.homepage.helpers({
  mapOptions: function() {
    var options = {
      width: '100%',
      height: '700px',
      zoomable: false,
      scrollWheel: false,
    };
    return options;
  },
  mapPoints: function() {
    var text = TextFiles.findOne().text.split(/\n/);
    var points = [];
    var splitted= '';
    for (var i = 1; i < text.length-1; i++) {
      splitted = text[i].split(',');
      points.push({
        lat: Number(splitted[5].replace(/"/g, '')),
        lng: Number(splitted[6].replace(/"/g, '')),
        weight: Number(splitted[1])
      });
    }
    return points;
  },
  mapMarkers: function() {
    var projects = Projects.find({}).fetch();
    var locations = _.map(projects, function(item) {
      if (!item.latitude || !item.longitude) return undefined;
      return {lat: item.latitude, lng: item.longitude};
    });
    return _.filter(locations, function(item) {return item !== undefined;});
  },
});
