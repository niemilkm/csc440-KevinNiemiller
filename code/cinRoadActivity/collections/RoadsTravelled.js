RoadsTravelled = new Meteor.Collection('roadsTravelled');

Meteor.methods({
	insert_roadData: function(data) {
		RoadsTravelled.insert({userId: this.userId, road:data.road, monday: data.monday, tuesday: data.tuesday, wednesday: data.wednesday, thursday: data.thursday, friday: data.friday, saturday: data.saturday, sunday: data.sunday, startMile: data.startMile, endMile: data.endMile, startTime: data.startTime, endTime: data.endTime});
	},

	edit_roadData: function(data) {

	}
});