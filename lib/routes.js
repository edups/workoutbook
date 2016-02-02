//Route para carga de pagina estatica sin parte dinamica
FlowRouter.route('/',{
	name:'home',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('homeLayout');
	}
});

//Route para carga de pagina dinamica,hay que pasarle la zona que se carga dinamicamente y el template que quieres que aparezca
FlowRouter.route('/test',{
	name:'test',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('mainLayout',{main:'test'});
	}
});
/*
FlowRouter.route('/workout-book',{
	name:'workout-book',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('mainLayout',{main:'Recipes'});
	}
});*/