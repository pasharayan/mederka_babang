Router.configure({
  layoutTemplate: 'layout',
});

Router.route('/', {
  name: 'homepage',
  waitOn: function() {
    return [
      Meteor.subscribe('projects'),
    ];
  },
  data: function() {
    return {
      projects: Projects.find(),
    };
  }
});
