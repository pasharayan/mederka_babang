

Meteor.publish('provinces', function(){
  return Provinces.find();
});

Meteor.publish('provincesOne', function(provincesId){
  return Provinces.find({_id: provincesId});
});