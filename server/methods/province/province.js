Meteor.methods({ 


'provinces/create': function(data) {
  check(data,{
    name: String,
    description: String,
  });

  var provincesId  = Provinces.insert(data);
  return provincesId;
},


'provinces/update': function(provincesId, data) {
  check(provincesId, String);
  check(data,{
    name: String,
    description: String,
  });

  var result  = Provinces.update(provincesId, {$set: data});
  return result; 
},


'provinces/destroy': function(provincesId) {
  check(provincesId, String);
  var result  = Provinces.remove(provincesId);
  return result; 
},

});