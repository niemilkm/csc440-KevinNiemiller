

  Template.roadsTravelled.helpers(
  {
    roadInfo: function()
    {
      return RoadsTravelled.find({userId: Meteor.userId()});
    },

    headers: function()
    {
      var header = ["Category", "Status", "Direction", "Road", "Start", "End", "Start Description", "End Description"];
      return header;
    },

    roadTravelledAlert: function()
    {
      var raArray = [];
      var count=0;
      var rta = RoadsTravelledAlerts.find({userId: Meteor.userId()}).fetch();
      _.each(rta, function(rta_data)
      {
        raArray[count] = rta_data.RoadActivityId;
        count++;
      });

      return RoadActivity.find({_id: { $in: raArray}});
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
