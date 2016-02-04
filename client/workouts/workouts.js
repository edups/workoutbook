Meteor.subscribe('workouts');

//preparado para añadir Google Analytics
//console.log(Meteor.settings.public.ga.account);

//Añade un helper
Template.workouts.helpers({
	//coffescript function
	workouts: ()=>{
		return Workouts.find({});
	}
});