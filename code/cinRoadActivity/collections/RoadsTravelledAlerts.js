RoadsTravelledAlerts = new Meteor.Collection('roadsTravelledAlerts');

Meteor.methods({
	insert_roadsTravelledAlerts: function(data) {
		RoadsTravelledAlerts.insert({userId: this.userId, road:data.road, monday: data.monday, tuesday: data.tuesday, wednesday: data.wednesday, thursday: data.thursday, friday: data.friday, saturday: data.saturday, sunday: data.sunday, startMile: data.startMile, endMile: data.endMile, startTime: data.startTime, endTime: data.endTime, startTime_display: data.startTime_display, endTime_display: data.endTime_display, days: data.days, startHr: data.startHr, startMin: data.startMin, startampm: data.startampm, endHr: data.endHr, endMin: data.endMin, endampm: data.endampm});
	},

	update_roadsTravelledAlerts: function(data, id) {
		RoadsTravelledAlerts.update({_id: id}, {$set: {road:data.road, monday: data.monday, tuesday: data.tuesday, wednesday: data.wednesday, thursday: data.thursday, friday: data.friday, saturday: data.saturday, sunday: data.sunday, startMile: data.startMile, endMile: data.endMile, startTime: data.startTime, endTime: data.endTime, startTime_display: data.startTime_display, endTime_display: data.endTime_display, days: data.days, startHr: data.startHr, startMin: data.startMin, startampm: data.startampm, endHr: data.endHr, endMin: data.endMin, endampm: data.endampm}});
	},

	delete_roadsTravelledAlerts: function(id) {
		RoadsTravelled.remove({_id: id});
	}
});

