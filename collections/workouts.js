Workouts = new Meteor.Collection('workouts');

WorkoutSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Name"
	},
	desc:{
		type: String,
		label:"Description"
	},
	author:{
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		}
	},
	createdAt:{
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		}
	}
});

Workouts.attachSchema( WorkoutSchema );