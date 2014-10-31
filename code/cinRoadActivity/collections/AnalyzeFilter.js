AnalyzeFilter = new Meteor.Collection('analyzeFilter');

Meteor.methods({
	insert_filterData: function(data) {
		AnalyzeFilter.insert({userId: this.userId, road:data.road, startMile: data.startMile, endMile: data.endMile, startDateTime_ISO: data.startDateTime_ISO, endDateTime_ISO: data.endDateTime_ISO, startTime_display: data.startTime_display, endTime_display: data.endTime_display, startDate_display: data.startDate_display, endDate_display: data.endDate_display, startHr: data.startHr, startMin: data.startMin, startampm: data.startampm, endHr: data.endHr, endMin: data.endMin, endampm: data.endampm, startDateTime_display: data.startDateTime_display, endDateTime_display: data.endDateTime_display,});
	},

	update_filterData: function(data, id) {
		AnalyzeFilter.update({_id: id}, {$set: {road:data.road, startMile: data.startMile, endMile: data.endMile, startDateTime_ISO: data.startDateTime_ISO, endDateTime_ISO: data.endDateTime_ISO, startTime_display: data.startTime_display, endTime_display: data.endTime_display, startHr: data.startHr, startMin: data.startMin, startampm: data.startampm, endHr: data.endHr, endMin: data.endMin, endampm: data.endampm}});
	},

	delete_filterData: function(id) {
		AnalyzeFilter.remove({_id: id});
	}
});