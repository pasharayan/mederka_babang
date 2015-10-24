

Router.route('/projects', { 
  name: 'projectsIndex', 
  waitOn: function(){
    return [
      Meteor.subscribe('projects'),
    ];
  },
  data: function(){
    return Projects.find();
  }
});

Router.route('/projects/new', {
  name: 'projectsNew',
  waitOn: function(){
    return [
      Meteor.subscribe('projectsOne', this.params._id),
    ];
  },
  data: function(){
    return Projects.findOne({_id: this.params._id});
  }
});


Router.route('/projects/:_id', {
  name: 'projectsShow',
  waitOn: function(){
    return [
      Meteor.subscribe('projectsOne', this.params._id),
    ];
  },
  data: function(){
    return Projects.findOne({_id: this.params._id});
  }
});


Router.route('/projects/:_id/edit', {
  name: 'projectsEdit',
  waitOn: function(){
    return [
      Meteor.subscribe('projectsOne', this.params._id),
    ];
  },
  data: function(){
    return Projects.findOne({_id: this.params._id});
  }
});
