Workouts = new Mongo.Collection('workouts');

Workouts.allow({
	insert: function(userId, doc){
		//If user id exists
		return !!userId;
	}
});

Exercise = new SimpleSchema({
	name:{
		type: String
	},
	repetitions:{
		type: Number
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

Workouts.attachSchema(WorkoutSchema);