Meteor.publish('textFiles/getByName', function(name) {
  return TextFiles.find({name: name});
});
