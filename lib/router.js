Router.configure({
  layoutTemplate: 'layout',
  onBeforeAction: function() {
    GoogleMaps.load({libraries: 'visualization'});
    Meteor.call('loadTextFile', 'dataSD.csv');
    this.next();
  },
});

Router.route('/', {
  name: 'homepage',
  onBeforeAction: function() {
    Meteor.call('loadTextFile', 'dataSD.csv');
    this.next();
  },
  waitOn: function() {
    return [
      Meteor.subscribe('textFiles/getByName', 'dataSD.csv'),
      Meteor.subscribe('projects'),
      Meteor.subscribe('students'),
    ];
  },
  data: function() {
    return {
      projects: Projects.find(),
      students: Students.find()
    };
  }
});

//Page to show in-depth analysis of anak putus sekolah
Router.route('/analysis', {
  name: 'analysis',
});

Router.route('/testAlbert', {
  name: 'testAlbert',
  onBeforeAction: function() {
    Meteor.call('loadTextFile', 'dataSD.csv');
    this.next();
  },
  waitOn: function() {
    return [
      Meteor.subscribe('textFiles/getByName', 'dataSD.csv')
    ];
  }
});
