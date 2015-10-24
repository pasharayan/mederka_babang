

Router.route('/students', { 
  name: 'studentsIndex', 
  waitOn: function(){
    return [
      Meteor.subscribe('students'),
    ];
  },
  data: function(){
    return Students.find();
  }
});

Router.route('/students/new', {
  name: 'studentsNew',
  waitOn: function(){
    return [
      Meteor.subscribe('studentsOne', this.params._id),
    ];
  },
  data: function(){
    return Students.findOne({_id: this.params._id});
  }
});


Router.route('/students/:_id', {
  name: 'studentsShow',
  waitOn: function(){
    return [
      Meteor.subscribe('textFiles/getByName', 'dataSD.csv'),
      Meteor.subscribe('studentsOne', this.params._id),
    ];
  },
  data: function(){
    return Students.findOne({_id: this.params._id});
  }
});


Router.route('/students/:_id/edit', {
  name: 'studentsEdit',
  waitOn: function(){
    return [
      Meteor.subscribe('studentsOne', this.params._id),
    ];
  },
  data: function(){
    return Students.findOne({_id: this.params._id});
  }
});
