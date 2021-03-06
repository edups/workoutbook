Template.messages.onCreated(function(){
  var vm = this;
  vm.autorun(function(){
    vm.subscribe('message');
  });
});

Template.messages.helpers({
     messages: function() {
        return Messages.find({}, { sort: { time: +1}, limit: 15});
      }
 });

Template.input.events({

      'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
          if (Meteor.user().username)
             var name = Meteor.user().username;
          else
            // var name = Meteor.user().emails[0].address;
           var name = Meteor.user().profile.name;
          // else
          //   var name = Meteor.user().services.google.email;
            var message = document.getElementById('message');
          if (message.value != '') {
            Messages.insert({
              name: name,
              message: message.value,
              time: new Date(),
            });

            document.getElementById('message').value = '';
            message.value = '';
          }
        }
      },
      'click .fa-paper-plane': function(event){
         if (Meteor.user().username)
             var name = Meteor.user().username;
          else
           var name = Meteor.user().profile.name;
            var message = document.getElementById('message');
          if (message.value != '') {
            Messages.insert({
              name: name,
              message: message.value,
              time: new Date(),
            });

            document.getElementById('message').value = '';
            message.value = '';
          }
    
    
  }
   });
  



