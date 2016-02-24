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

Template.cosa.helpers({

	nombre: ()=>{
		return Session.get('imageName');
	}
	
});



Template.rutineItem.events({
	'click button.modali': function(event,cosa){
		var name= cosa.$(event.target).data('modalNombre');
		
		Session.set('imageName',name);
	}
});

Template.cosa.events({
	'click button.close': function(){
		console.log('te chapao');
		Session.set('imageName',null);
	}
});
