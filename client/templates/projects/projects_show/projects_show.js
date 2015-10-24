Template.projectsShow.helpers({
  heatmapOptions: function() {
    if (!GoogleMaps.loaded()) return;
    var options = {
      width: '100%', 
      height: '100%',
      center: {lat: this.latitude, lng: this.longitude},
      zoom: 5,
    };
    return options;
  },

  heatmapPoints: function() {
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
  heatmapMarkers: function() {
    var item = this;
    return [{lat: item.latitude, lng: item.longitude}];
  }
});

Template.projectsShow.events({

});

Template.projectsShow.created = function(){

};

Template.projectsShow.rendered = function(){

};
