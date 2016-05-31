Workouts = new Mongo.Collection('workouts');

Workouts.allow({
	insert: function(userId, doc){
		//If user id exists, them can insert
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

PicWorkout = new FS.Collection("picworkout", {
  stores: [new FS.Store.GridFS("picworkout", {path: "../../../../../picworkoutFiles"})]
});

PicWorkout.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  download: function(userId) {
    return true;
  }, 
  remove: function (userId, doc) {
     return true;
  }
});


Exercise = new SimpleSchema({
	name:{
		type: String
	},
	repetitions:{
		type: Number
	},
	picture: {
          type: String,
          label: 'Exercise Picture',
          optional: true,
          autoform: {
               afFieldInput: {
                    type: 'fileUpload',
                    collection: 'picworkout',
                    label: 'Choose file'
               }
          }
      }
});

WorkoutSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Name"
	},
	desc:{
		type: String,
		label:"Description"
	},
	exercises:{
		type:[Exercise]
	},
	inRutine:{
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform:{
			type: "hidden"
		}
	},
	author:{
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		// to hidde this to the form
		autoform:{
			type: "hidden"
		}
	},
  alias:{
    type: String,
    label: "alias",
    autoValue: function(){
      if (Meteor.user().username)
             return Meteor.user().username;
          else
            return Meteor.user().emails[0].address;
    },
    autoform:{
      type: "hidden"
    }

  },
	createdAt:{
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		// to hidde this to the form
		autoform:{
			type: "hidden"
		}
	}
     
});

//METODOS
Meteor.methods({
	//Cambiar si se encuentra en rutina o no
	toggleRutineItem: function(id, currentState){
    //check(Meteor.userId(), String);
		//Actualizamos el objeto cuya Id le pasamos.Cambiando el valor por defecto inRutine(false) 
		//Ahora hay que pasarlo en workout.js
		Workouts.update(id,{
			$set:{
				inRutine: !currentState
			}

		})
			
	},
	deleteWorkout:function(id){
   // check(Meteor.userId(), String);
		Workouts.remove(id);
		Bert.alert( '¡ Deleted!', 'success', 'growl-top-right','fa-thumbs-o-up' );
	}
});

Workouts.attachSchema(WorkoutSchema);

Messages = new Meteor.Collection('messages');
WorkoutSchema = new SimpleSchema({
  name:{
    type: String,
    label: "Name"
  },
  message:{
    type: String,
    label:"Message"
  },
  time:{
    type: Date,
    label: "Time"
  }
});

Messages.allow({
  insert: function(userId, doc) {
    return !!userId
  }
});






//ZONA DE TESTEO 
//TEST UPLOAD
/*
Workoutimage = new FS.Collection("workoutimage", {
  stores: [new FS.Store.FileSystem("workoutimage", {path: "../../../../../meteor_uploads"})]
  

});
Workoutimage.allow({
  insert: function (userId, doc) {
  return !!userId;
  },
  update: function (userId, doc) {
   return !!userId;
  },
  remove: function (userId, doc) {
     return !!userId;
  },
  download: function (userId, doc) {
    return true;
  }
});


//TEST UPLOAD IN FORM


Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {path: "../../../../../meteor_images"})]
});

Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  download: function(userId) {
    return true;
  }, 
  remove: function (userId, doc) {
     return !!userId;
  }
});

Test = new SimpleSchema({
	name:{
		type: String
	},
	repetitions:{
		type: Number
	},
      Pic: {
          type: String,
          label: 'Pictest',
          autoform: {
               afFieldInput: {
                    type: 'fileUpload',
                    collection: 'Images'
               }
          }
     }
});

customer = new SimpleSchema({
     userId: {
          type: String,
          unique: true,
          autoValue: function () {
               return Meteor.userId()
          }
     },
     firstName: {
          type: String
     },
     middleName: {
          type: String,
          optional:true
     },
     lastName: {
          type: String
     },
     contactNo: {
          type: Number
     },
     status: {
          type: String,
          autoValue: function () {
               return 'Verification Pending'
          }
     },
     address: {
          type: String,
          optional: true,
          max: 2000,
          autoform: {
               rows: 10
          }
     },
	test:{
		type:[Test]
	}
});
CustomerInfo = new Mongo.Collection('customerInfo');
CustomerInfo.allow({
	insert: function(userId, doc){
		//If user id exists, them can insert
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});
CustomerInfo.attachSchema(customer);
*/