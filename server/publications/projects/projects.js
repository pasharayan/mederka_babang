

Meteor.publish('projects', function(){
  return Projects.find();
});

Meteor.publish('projectsOne', function(projectsId){
  return Projects.find({_id: projectsId});
});