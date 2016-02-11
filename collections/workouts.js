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

//METODOS
Meteor.methods({
	//Cambiar si se encuentra en rutina o no
	toggleRutineItem: function(id, currentState){
		//Actualizamos el objeto cuya Id le pasamos.Cambiando el valor por defecto inRutine(false) 
		//Ahora hay que pasarlo en workout.js
		Workouts.update(id,{
			$set:{
				inRutine: !currentState
			}
		})
	},
	deleteWorkout:function(id){
		Workouts.remove(id);
	}
});

Workouts.attachSchema(WorkoutSchema);
