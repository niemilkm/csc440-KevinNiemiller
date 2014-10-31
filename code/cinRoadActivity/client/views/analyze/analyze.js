Template.analyze.helpers(
  {
    filterInfo: function()
    {
      return AnalyzeFilter.find({userId: Meteor.userId()});
    }
  });

  Template.analyze.events =
  {
    'click .openEditFilterModal': function()
    {
      Session.set("editFilterId", this._id);
    },

    'click .deleteFilter': function()
    {
      Meteor.call("delete_filterData", this._id);
    }
  };