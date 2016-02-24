Template.modale.events({  
  'click button.modal': function(event, cosa) {
    var name = cosa.$(event.target).data('modalTemplate');
   // console.log(name);
    Session.set('activeModal', name);
  }
});

Template.modal.helpers({  
  activeModal: function() {
    return Session.get('activeModal');
  }
});