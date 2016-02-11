Template.userprof.onCreated(function(){
	var vm = this;
	vm.autorun(function(){
		vm.subscribe('users');
	});
});
Template.userprof.helpers({
	//coffescript function
	userInCollection: ()=>{
		return Meteor.users.find();
	}
});