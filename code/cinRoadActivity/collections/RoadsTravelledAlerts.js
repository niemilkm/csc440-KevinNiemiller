RoadsTravelledAlerts = new Meteor.Collection('roadsTravelledAlerts');

Meteor.methods({
	insert_roadsTravelledAlerts: function(data) {
		RoadsTravelledAlerts.insert({
																		userId: this.userId,
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
		RoadsTravelledAlerts.update({_id: id},
																					{$set: {
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
																									}
																					}
																);
	},

	delete_roadsTravelledAlerts: function(id) {
		RoadsTravelled.remove({_id: id});
	}
});

