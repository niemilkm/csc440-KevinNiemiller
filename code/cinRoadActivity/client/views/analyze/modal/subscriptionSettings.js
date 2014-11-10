
Template.subscriptionSettings.helpers(
  {

    isActiveSub: function()
    {
      var value = Subscriptions.findOne({userId: Meteor.userId()}).subscribe;
      var checked = "";
      if (value == true || value == "true" || value == null || value == undefined)
        checked = "checked";
      return checked;
    },

    isActiveUnsub: function()
    {
      var value = Subscriptions.findOne({userId: Meteor.userId()}).subscribe;
      var checked = "checked";
      if (value == true || value == "true" || value == null || value == undefined)
        checked = "";
      return checked;
    },

  });

Template.subscriptionSettings.events =
  {

    'click #subscriptionSettings_enter': function()
    {
      var value = $("input[name='subscribe']:checked").val();
      if (value == true || value == "true" || value == null || value == undefined)
        value = true;
      else
        value = false;
      Meteor.call("update_subscription", value);
      $('#subscriptionSettings').modal('hide');
    },
};