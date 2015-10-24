
Router.route('/provinces', {
  name: 'provincesIndex',
  waitOn: function(){
    return [
      Meteor.subscribe('provinces'),
    ];
  },
  data: function(){
    return Provinces.find();
  }
});

Router.route('/provinces/new', {
  name: 'provincesNew',
  waitOn: function(){
    return [
      Meteor.subscribe('provincesOne', this.params._id),
    ];
  },
  data: function(){
    return Provinces.findOne({_id: this.params._id});
  }
});


Router.route('/provinces/:_id', {
  name: 'provincesShow',
  waitOn: function(){
    return [
      Meteor.subscribe('provincesOne', this.params._id),
    ];
  },
  data: function(){
    return Provinces.findOne({_id: this.params._id});
  }
});


Router.route('/provinces/:_id/edit', {
  name: 'provincesEdit',
  waitOn: function(){
    return [
      Meteor.subscribe('provincesOne', this.params._id),
    ];
  },
  data: function(){
    return Provinces.findOne({_id: this.params._id});
  }
});
