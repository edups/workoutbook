//Route para carga de pagina estatica sin parte dinamica
FlowRouter.route('/',{
	name:'home',
	action(){
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
	name:'workout-book',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('mainLayout',{main:'singleWorkout'});
	}
});


