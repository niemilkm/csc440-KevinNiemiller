
Template.subscriptionSettings.helpers(
  {
    isActiveSub: function()
    {
    	console.log("in updateRadioValue");
    	var value = Subscriptions.findOne({userId: Meteor.userId()}).subscribe;
      var checked = "";
    	if (value == null || value == undefined || value == true || value == "true")
    		checked = "checked";
      return checked;
    },

    isActiveUnsub: function()
    {
      console.log("in updateRadioValue");
      var value = Subscriptions.findOne({userId: Meteor.userId()}).subscribe;
      var checked = "";
      if (value == false || value == "false")
        checked = "checked";
      return checked;
    },

  });

Template.subscriptionSettings.events =
  {

    'click #subscriptionSettings_enter': function()
    {
    	console.log("in subscriptionSettings_enter");
      var value = $('#subscriptionValue input:radio:checked').val();
    	if (value == null || value == undefined)
    		value = true;
      Meteor.call("insert_subscription", value);
      $('#subscriptionSettings').modal('toggle');
    },
};