

Meteor.publish('students', function(){
  return Students.find();
});

Meteor.publish('studentsOne', function(studentsId){
  return Students.find({_id: studentsId});
});