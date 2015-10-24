Meteor.methods({
  loadTextFile: function(fileName) {
    if (TextFiles.findOne({name: fileName})) return; 
    TextFiles.insert({name: fileName, text: Assets.getText(fileName)});
  },
});
