Template.rutine.onCreated(function(){
	var vm = this;
	vm.autorun(function(){
		vm.subscribe('workouts');
	});
});

Template.rutine.helpers({
	workouts: ()=>{
		return Workouts.find({inRutine: true});
	}
});