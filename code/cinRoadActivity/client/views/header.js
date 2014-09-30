
Template.header.helpers(
{
  meteorUser: function()
  {
    console.log(Meteor.user().emails[0].address);
    return Meteor.user().emails[0].address;
  }
});



