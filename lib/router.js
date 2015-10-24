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

//Page to show in-depth analysis of anak putus sekolah
Router.route('/analysis', {
  name: 'analysis',
});
