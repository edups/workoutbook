/*
Meteor.subscribe("fileUploads");
  Template.fileList.helpers({
    theFiles: function () {
      return Workoutimage.find();
    },
     images: function () {
    return Workoutimage.find(); //  Images is an FS.Collection instance
  }
  });

  Template.fileList.events({
    'click #deleteFileButton ': function (event) {
      //console.log("deleteFile button ", this);
      Workoutimage.remove({_id: this._id});
    },
    'change .your-upload-class': function (event, template) {
      //console.log("uploading...")
      FS.Utility.eachFile(event, function (file) {
        //console.log("each file...");
        var yourFile = new FS.File(file);
        Workoutimage.insert(yourFile, function (err, fileObj) {

		
		

          //console.log("callback for the insert, err: ", err);
          if (!err) {
            //console.log("inserted without error");
          }
          else {
           // console.log("there was an error", err);
          }
        });
      });
    }
  });
*/

 