Meteor.publish('workouts',function(){
	return Workouts.find({ author: this.userId});
});