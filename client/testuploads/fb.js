if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1309821952378208',
      status     : true,
      xfbml      : true
    });
  };
}