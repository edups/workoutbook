Meteor.publish('workouts',function(){
	return Workouts.find({ author: this.userId});
});

Meteor.publish('singleWorkout',function(id){
	//paquete check comprueba si el id es String
	check(id,String);
	//Encuentra en la colccion el _id, que correspoda con el id que nos suscribimos
	return Workouts.find({ _id: id});
});

Meteor.publish('users',function(){
	return Meteor.users.find(this.userId);
});