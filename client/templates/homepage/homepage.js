Template.homepage.helpers({
  mapOptions: function() {
    var options = {
      width: '100%',
      height: '700px',
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
  }
});
