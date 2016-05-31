Template.rutine.onCreated(function(){
	var vm = this;
	vm.autorun(function(){
		vm.subscribe('workouts');
	});

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1309821952378208',
      status     : true,
      xfbml      : true
    });
  };

});

Template.rutine.helpers({
	workouts: ()=>{
		return Workouts.find({inRutine: true});
	}
});

Template.miModal.helpers({

	nombre: ()=>{
		return Session.get('imageName');
	}
	
});



Template.rutineItem.events({
	'click .modali': function(event,cosa){
		var name= cosa.$(event.target).data('modalNombre');
		//console.log('te tocao');
		Session.set('imageName',name);
	}
});

Template.miModal.events({
	'click .fa-close': function(){
		
		Session.set('imageName',null);
	}
});
