Meteor.methods({ 


'projects/create': function(data) {
  check(data,{
    name: String,
    description: String,
  });

  var projectsId  = Projects.insert(data);
  return projectsId;
},


'projects/update': function(projectsId, data) {
  check(projectsId, String);
  check(data,{
    name: String,
    description: String,
  });

  var result  = Projects.update(projectsId, {$set: data});
  return result; 
},


'projects/destroy': function(projectsId) {
  check(projectsId, String);
  var result  = Projects.remove(projectsId);
  return result; 
},

});