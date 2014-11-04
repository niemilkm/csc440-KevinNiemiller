

  Template.roadsTravelled.helpers(
  {
    roadInfo: function()
    {
      return RoadsTravelled.find({userId: Meteor.userId()});
    }
  });

  Template.roadsTravelled.events =
  {
    'click .openEditRoadModal': function()
    {
      Session.set("editRoadId", this._id);
      $("#editRoad").modal('show');
    },

    'click .deleteRoad': function()
    {
      Meteor.call("delete_roadData", this._id);
    }
  };
