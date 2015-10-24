var http = require('http');
var fs = require('fs');

var data = fs.readFileSync('data.csv', 'utf8').split('\r');

for (var i = 1; i < data.length; i++) {
  if (i < 10) continue;
  var splitted = data[i].split(',');
  var prov = splitted[0].replace(/^Prov\.\ /, '');
  var weight = splitted[1];
  getLatLng(prov.replace(/\ /, '+'));
}


function getLatLng(queryName) {
  http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+queryName+'&sensor=false', function(res) {
    var string = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      string+=chunk;
    });
    res.on('end', function() {
      var json = JSON.parse(string);
      if (json.results && json.results[0] && json.results[0].geometry) {
        console.log(queryName + ': ' +json.results[0].geometry.location.lat + ',' + json.results[0].geometry.location.lng);
      } else {
        console.log(queryName);
      }
    });
  }).on('error', function(e) {console.log(e);});
}
