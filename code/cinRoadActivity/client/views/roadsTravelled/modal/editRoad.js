
Template.editRoad.helpers(
{
	roadInfo: function()
	{
		var roadId = Session.get("editRoadId");
		console.log(roadId);
		return RoadsTravelled.find({_id: roadId}).fetch;
	},
	monday: function()
	{
		console.log("monday");
		var roadId = Session.get("editRoadId");
		return RoadsTravelled.find({_id: roadId}).fetch;
	}
});