AnalyzeFilter = new Meteor.Collection('analyzeFilter');

Meteor.methods({
	insert_filterData: function(data) {
		var accidents = RoadActivity.find({
			Category: "Accident",
			Road: data.road,
			startMile: {$gte: data.startMile},
			endMile: {$lte: data.endMile},
			startDateTime_ISO: {$gte: data.startDateTime_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();
		var roadworkPlanned = RoadActivity.find({
			Category: "Roadwork - Planned",
			Road: data.road,
			startMile: {$gte: Number(data.startMile)},
			endMile: {$lte: Number(data.endMile)},
			startDateTime_ISO: {$gte: data.startDateTime_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();
		var roadworkUnplanned = RoadActivity.find({
			Category: "Roadwork - Unplanned",
			Road: data.road,
			startMile: {$gte: data.startMile},
			endMile: {$lte: data.endMile},
			startDateTime_ISO: {$gte: data.startDateTime_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();
		var flooding = RoadActivity.find({
			Category: "Flooding",
			Road: data.road,
			startMile: {$gte: data.startMile},
			endMile: {$lte: data.endMile},
			startDateTime_ISO: {$gte: data.startDateTime_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();
		var snowIce = RoadActivity.find({
			Category: "Snow/Ice",
			Road: data.road,
			startMile: {$gte: data.startMile},
			endMile: {$lte: data.endMile},
			startDateTime_ISO: {$gte: data.startDateTime_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();
		var debris = RoadActivity.find({
			Category: "Debris",
			Road: data.road,
			startMile: {$gte: data.startMile},
			endMile: {$lte: data.endMile},
			startDateTime_ISO: {$gte: data.startDateTime_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();
		var disabledVehicle = RoadActivity.find({
			Category: "Disabled Vehicle",
			Road: data.road,
			startMile: {$gte: data.startMile},
			endMile: {$lte: data.endMile},
			startDateTime_ISO: {$gte: data.startTimeDate_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();
		var other = RoadActivity.find({
			Category: "Other",
			Road: data.road,
			startMile: {$gte: data.startMile},
			endMile: {$lte: data.endMile},
			startDateTime_ISO: {$gte: data.startTimeDate_ISO},
			startDateTime_ISO: {$lte: data.endDateTime_ISO}
		}).count();

		console.log(data.road, data.startMile, data.endMile, data.startTimeDate_ISO, data.endTimeDate_ISO);

		AnalyzeFilter.insert({
														userId: this.userId,
														filterName: data.filterName,
														road:data.road,
														startMile: Number(data.startMile),
														endMile: Number(data.endMile),
														startDateTime_ISO: data.startDateTime_ISO,
														endDateTime_ISO: data.endDateTime_ISO,
														startTime_display: data.startTime_display,
														endTime_display: data.endTime_display,
														startDate_display: data.startDate_display,
														endDate_display: data.endDate_display,
														startHr: data.startHr,
														startMin: data.startMin,
														startampm: data.startampm,
														endHr: data.endHr,
														endMin: data.endMin,
														endampm: data.endampm,
														startDateTime_display: data.startDateTime_display,
														endDateTime_display: data.endDateTime_display,
														accidents: Number(accidents),
														roadworkPlanned: Number(roadworkPlanned),
														roadworkUnplanned: Number(roadworkUnplanned),
														flooding: Number(flooding),
														snowIce: Number(snowIce),
														debris: Number(debris),
														disabledVehicle: Number(disabledVehicle),
														other: Number(other)
													});
	},

	update_filterData: function(data, id) {
		AnalyzeFilter.update({_id: id}, {$set: {road:data.road, startMile: data.startMile, endMile: data.endMile, startDateTime_ISO: data.startDateTime_ISO, endDateTime_ISO: data.endDateTime_ISO, startTime_display: data.startTime_display, endTime_display: data.endTime_display, startHr: data.startHr, startMin: data.startMin, startampm: data.startampm, endHr: data.endHr, endMin: data.endMin, endampm: data.endampm}});
	},

	delete_filterData: function(id) {
		AnalyzeFilter.remove({_id: id});
	},

	analyzeFilter_getXYData_asArray: function(docId) {
		
	},

	testInAnalyzeFilter: function() {
		var startTimeDate_ISO = new Date("1/1/2000 1:00:00 AM");
		var endTimeDate_ISO = new Date("1/1/2020 1:00:00 AM");
		var startMile = Number(1);
		var endMile = Number(999);
		var accidents = RoadActivity.find({
			Category: "Other",
			startMile: {$gte: startMile},
			endMile: {$lte: endMile},
			startDateTime_ISO: {$gte: startTimeDate_ISO},
			startDateTime_ISO: {$lte: endTimeDate_ISO}
		}).count();
		console.log(accidents);
	}
});