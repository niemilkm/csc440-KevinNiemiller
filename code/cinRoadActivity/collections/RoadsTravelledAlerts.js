RoadsTravelledAlerts = new Meteor.Collection('roadsTravelledAlerts');

Meteor.methods({
	insert_roadsTravelledAlerts: function(data) {
		console.log("inserting into Roads Travelled Alerts");
		RoadsTravelledAlerts.insert({
																		userId: data.userId,
																		RoadActivityId: data.RoadActivityId,
																		RoadsTravelledId: data.RoadsTravelledId,
																		monday: data.monday,
																		tuesday: data.tuesday,
																		wednesday: data.wednesday,
																		thursday: data.thursday,
																		friday: data.friday,
																		saturday: data.saturday,
																		sunday: data.sunday,
																		notifiedUser: data.notifiedUser,
																		dateAdded: data.dateAdded,
																		dateUpdated: data.dateUpdated,
																});
	},

	update_roadsTravelledAlerts: function(data, id) {
		console.log("updating Roads Travelled Alerts");
		RoadsTravelledAlerts.update({_id: id},
																					{$set: {
																										monday: data.monday,
																										tuesday: data.tuesday,
																										wednesday: data.wednesday,
																										thursday: data.thursday,
																										friday: data.friday,
																										saturday: data.saturday,
																										sunday: data.sunday,
																										dateUpdated: data.dateUpdated,
																									}
																					}
																);
	},

	update_roadsTravelledAlerts_notifiedUser: function(id) {
		console.log("updating Roads Travelled Alerts - notified User");
		RoadsTravelledAlerts.update({_id: id},
																					{$set: {
																										notifiedUser: true
																									}
																					}
																);
	},

	delete_roadsTravelledAlerts: function(id) {
		RoadsTravelledAlerts.remove({_id: id});
		console.log("road travelled alert is deleted: " + id);
	},

	RoadTravelledAlerts_DeleteAllForUser: function()
	{
		RoadsTravelledAlerts.remove({userId: this.userId});
		console.log("Road Travel Alerts Deleted for User");
	}

});

