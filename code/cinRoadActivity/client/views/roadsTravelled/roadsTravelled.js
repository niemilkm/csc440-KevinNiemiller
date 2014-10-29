

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
      console.log("open edit modal: " + this._id);
      Session.set("editRoadId", this._id);
      $("#editRoad").modal('show');
    }
  };
