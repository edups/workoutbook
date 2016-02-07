Template.newWorkout.events({
	'click .fa-close' : function(){
		Session.set('newWorkout',false);
	}
});