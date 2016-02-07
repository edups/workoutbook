Template.singleWorkout.onCreated(function(){
	var vm = this;
	vm.autorun(function(){
		var id= FlowRouter.getParam('id');
		vm.subscribe('singleWorkout',id);
	});
});


Template.singleWorkout.helpers({
	
	workout: ()=>{
		//Todo lo que está en el routes despues de ":", en este caso 'id', recoge el parametro de la URL
		var id= FlowRouter.getParam('id');
		return Workouts.findOne({_id: id});
	}
});