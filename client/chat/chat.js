if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1309821952378208',
      status     : true,
      xfbml      : true
    });
  };
}

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

    Template.input.events = {
      'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
          if (Meteor.user().username)
             var name = Meteor.user().username;
          else
            var name = Meteor.user().emails[0].address;
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

   
    }
  



