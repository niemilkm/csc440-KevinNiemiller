RoadsTravelled = new Meteor.Collection('roadsTravelled');

Meteor.methods({
	insert_roadData: function(data) {
		RoadsTravelled.insert({userId: this.userId, road:data.road, monday: data.monday, tuesday: data.tuesday, wednesday: data.wednesday, thursday: data.thursday, friday: data.friday, saturday: data.saturday, sunday: data.sunday, startMile: data.startMile, endMile: data.endMile, startTime: data.startTime, endTime: data.endTime, startTime_display: data.startTime_display, endTime_display: data.endTime_display, days: data.days, startHr: data.startHr, startMin: data.startMin, startampm: data.startampm, endHr: data.endHr, endMin: data.endMin, endampm: data.endampm});
	},

	update_roadData: function(data, id) {
		RoadsTravelled.update({_id: id}, {$set: {userId: this.userId, road:data.road, monday: data.monday, tuesday: data.tuesday, wednesday: data.wednesday, thursday: data.thursday, friday: data.friday, saturday: data.saturday, sunday: data.sunday, startMile: data.startMile, endMile: data.endMile, startTime: data.startTime, endTime: data.endTime, startTime_display: data.startTime_display, endTime_display: data.endTime_display, days: data.days, startHr: data.startHr, startMin: data.startMin, startampm: data.startampm, endHr: data.endHr, endMin: data.endMin, endampm: data.endampm}});
	}
});