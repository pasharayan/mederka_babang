Meteor.methods({ 


'students/create': function(data) {
  check(data,{
    name: String,
    description: String,
  });

  var studentsId  = Students.insert(data);
  return studentsId;
},


'students/update': function(studentsId, data) {
  check(studentsId, String);
  check(data,{
    name: String,
    description: String,
  });

  var result  = Students.update(studentsId, {$set: data});
  return result; 
},


'students/destroy': function(studentsId) {
  check(studentsId, String);
  var result  = Students.remove(studentsId);
  return result; 
},

});