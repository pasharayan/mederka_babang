Router.configure({
  layoutTemplate: 'layout',
  onBeforeAction: function() {
    GoogleMaps.load({libraries: 'visualization'});
    this.next();
  },
});

Router.route('/', {
  name: 'homepage',
});

Router.route('/testAlbert', {
  name: 'testAlbert',
});
