//gwendall:auth-client-callbacks -- Redirigir cuando hagan login o log out
//Necesitas metodo logout en el cliente o bien se añade alli pero parece mas correcto que este en la parte del route
if(Meteor.isClient){
Accounts.onLogin(function(){
	FlowRouter.go('workout-book');
});
Accounts.onLogout(function(){
	FlowRouter.go('home');
});
}
//Si un usuario no esta loggeado no dejamos que acceda mediante Url a ningún contenido, redireccionamos a home.
//Posible mejora,crear un template o una direccion donde diga que no tienes permiso, que o bien hasgas login o te crees una cuenta por ejemplo
FlowRouter.triggers.enter([function(){
	if (!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

//Route para carga de pagina estatica sin parte dinamica
FlowRouter.route('/',{
	name:'home',
	action(){
		//Redirect a la pagina de ejercicios si tiene login
		if(Meteor.userId()){
			FlowRouter.go('workout-book');
		}
		//Preparado para GoogleAnalytics
		//GAnalytics.pageview();
		BlazeLayout.render('homeLayout');
	}
});

//Route para carga de pagina dinamica,hay que pasarle la zona que se carga dinamicamente y el template que quieres que aparezca
FlowRouter.route('/workout-book',{
	name:'workout-book',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('mainLayout',{main:'workouts'});
	}
});

FlowRouter.route('/workout/:id',{
	name:'workout',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('mainLayout',{main:'singleWorkout'});
	}
});

FlowRouter.route('/rutine',{
	name:'rutine',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('mainLayout',{main:'rutine'});
	}
});

FlowRouter.route('/userprof',{
	name:'userprof',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('mainLayout',{main:'userprof'});
	}
});

/* Pruebas para pagina con id que no existe y rutas de url que no existen(funciona correctamente)
FlowRouter.route('/workout/:id',{
	name:'workout-book',
	action:function(){
		if (Workouts.find().count() > 0) {
	     	BlazeLayout.render('mainLayout',{main:'singleWorkout'});
	    }
	    else {
	    	BlazeLayout.render('mainLayout',{main:'notFound'});
	    }
	}
});

//Prueba not found routes
FlowRouter.notFound = {
    action: function() {
	BlazeLayout.render('mainLayout',{main:'notFound'});
    }
};
*/


