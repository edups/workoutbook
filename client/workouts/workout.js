Template.soloWorkout.onCreated(function(){
	var vm = this;
	vm.autorun(function(){
		vm.subscribe('picworkout');
		});
});


//REactive vars
Template.soloWorkout.onCreated(function(){
	this.editMode =  new ReactiveVar(false);
	//lo de arriba es lo mismo que
	//this.editMode = new ReactiveVar();
	//this.editMode.set(false);
});


//Devuelve el id para modificar-update  mediante el quickform(workout.html)
Template.soloWorkout.helpers({
	updateWorkoutId:function(){
		return this._id;
	},
	editMode: function(){
		//edit mode solo se reflja como scope en el template que estamos clickeando a diferencia de sesion que es para todo
		return Template.instance().editMode.get();
	},
	picworkout: function(){
		return PicWorkout.find();
	}
});

Template.soloWorkout.events({
	'click .toggle-rutine':function(){
		//Test function works
		//console.log('click');
		Meteor.call('toggleRutineItem',this._id,this.inRutine);
	},
	'click .fa-trash' :function(){
		//Test function retorne el objeto
		//console.log(this);
		Meteor.call('deleteWorkout',this._id);
	},
	/*
	'click .fa-pencil' :function(){
		Session.set('editMode', !Session.get('editMode'));
	}*/
	//Con reactive var hay que pasar evento y template
	'click .fa-pencil' :function(event,template){
		template.editMode.set(!template.editMode.get());
	}

});