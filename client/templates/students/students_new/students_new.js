Template.studentsNew.helpers({

});

Template.studentsNew.events({
  'submit .new-student': function(e) {
    e.preventDefault();

    var data = {
      name: $(e.target).find('[name=name]').val(),
      sekolah: $(e.target).find('[name=sekolah]').val(),
      thumbnailUrl: $(e.target).find('[name=thumbnailUrl]').val(),
      teacherComment: $(e.target).find('[name=teacher]').val(),
      previousAchievements: $(e.target).find('[name=previousachievements]').val(),
      latitude: $(e.target).find('[name=latitude]').val(),
      longitude: $(e.target).find('[name=longitude]').val(),
    };

    //console.log(data);
    var studentId = Students.insert(data);
    Router.go('studentsShow', {_id: studentId});
  }

});

Template.studentsNew.created = function(){

};

Template.studentsNew.rendered = function(){

};
