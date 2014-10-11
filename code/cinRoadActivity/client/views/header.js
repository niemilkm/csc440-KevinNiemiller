
Template.header.helpers(
{
  meteorUser: function()
  {
    return Meteor.user().emails[0].address;
  }
});



