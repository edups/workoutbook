Meteor.subscribe("formtest");
Meteor.subscribe("images");

 Template.insertInfoForm.helpers({
     images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  },
  profilePic:function(){
  	return Images.find();
  }
  });

Template.insertInfoForm.events({
    'change .js-af-select-file': function (event, template) {
      //console.log("te clickado...")
      FS.Utility.eachFile(event, function (file) {
        //console.log("each file...");
        var yourFile = new FS.File(file);
        Image.insert(yourFile, function (err, fileObj) {
          //console.log("callback for the insert, err: ", err);
          if (!err) {
            console.log("inserted without error");
          }
          else {
            console.log("there was an error", err);
          }
        });
      });
    }
  });