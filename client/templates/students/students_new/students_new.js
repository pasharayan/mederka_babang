Template.studentsNew.helpers({

});

Template.studentsNew.events({
  'submit .new-student': function(e) {
    e.preventDefault();

    var data = {
      name: $(e.target).find('[name=name]').val(),
      story: $(e.target).find('[name=story]').val(),
      thumbnailUrl: $(e.target).find('[name=thumbnailUrl]').val(),
      teacherComment: $(e.target).find('[name=teacher]').val(),
      previousAchievements: $(e.target).find('[name=previousAchievements]').val(),
      latitude: $(e.target).find('[name=latitude]').val(),
      longitude: $(e.target).find('[name=longitude]').val(),
    };

  }

});

Template.studentsNew.created = function(){

};

Template.studentsNew.rendered = function(){

};
