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
	//Solo el actual usuario
	return Meteor.users.find(this.userId);
	//Comprobar toda la colleccion de usuarios (SOLO PARA COMPROBAR)
	// return Meteor.users.find();

});