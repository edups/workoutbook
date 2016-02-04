Template.singleWorkout.onCreated(function(){
	var vm = this;
	vm.autorun(function(){
		vm.subscribe('workouts');
	});
});


Template.singleWorkout.helpers({
	
	workout: ()=>{
		//Todo lo que está en el routes despues de ":", en este caso 'id', recoge el parametro de la URL
		var id= FlowRouter.getParam('id');
		return Workouts.findOne({_id: id});
	}
});