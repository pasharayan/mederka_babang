Template.testAlbert.helpers({
  mapOptions: function() {
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
    var options = {
      width: '1400px', 
      height: '700px',
      points: points
    };
    console.log(points);
    return options;
  },
});
