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
	//return Meteor.users.find();

});
Meteor.publish('picworkout', function() {
  return PicWorkout.find();
});

Meteor.publish('message',function(){
	return Messages.find({}, { sort: { time: -1}, limit: 15});
});


    var T = new TwitMaker({
        consumer_key:         'FDMP43dVNuOjGo70Sedx7MCGI', // API key
        consumer_secret:      'aWU0FRGTRbZsHPekne1zSFL5VkawZIKVpOJjHvrjv9eVuD65E9', // API secret
        access_token:         '2614033568-9S7c8j9zGDLQnE2GT7GZwxS2ExbZYdEQv4wNWyY', 
        access_token_secret:  'yHfQJ9YG0X82dJRIITITAAQX7x7Rm4FGMJmf73AWOnkw4'
    });


//  Postear en twitter ... funciona ... 
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//  console.log(data)
//

 //var fs = Npm.require('fs');

    //fs.readFile(process.cwd() + '/../web.browser/app/data/test.gif', 'utf8', function (err, data) {

//var b64content = fs.readFileSync(process.cwd()+'/../web.browser/app/data/test.jpg', { encoding: 'base64' })

/*
var filePath = process.cwd()+'/../web.browser/app/data/test.jpg'
T.post('media/upload',{ media: filePath }, function (err, data, response) {
  console.log(data)
})
*/


/*
//TEst upload  
Meteor.publish("fileUploads", function () {
    //console.log("publishing fileUploads");
    return Workoutimage.find();
  });

//TEst upload  
Meteor.publish("formtest", function () {
    //console.log("publishing fileUploads");
    return CustomerInfo.find();
  });

Meteor.publish('images', function() {
  return Images.find();
});
*/