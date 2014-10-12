RoadActivity = new Meteor.Collection('roadActivity');

Meteor.methods({
	// insert_data: function(Id, Category, Status, Direction, Road, CountyCode, DistrictNumber, Latitude, Longitude, ActivityStartDateTime, ActivityEndDateTime, ActivityCreationDateTime, ActivityLastModifiedDateTime, StartMile, StartMileDescription, EndMile, EndMileDescription, Description, DetourDescription) {
	// 	RoadActivity.insert({_id: Id, Category: Category, Status: Status, Direction: Direction, Road: Road, CountyCode: CountyCode, DistrictNumber: DistrictNumber, Latitude: Latitude, Longitude: Longitude, ActivityStartDateTime: ActivityStartDateTime, ActivityEndDateTime: ActivityEndDateTime, ActivityCreationDateTime: ActivityCreationDateTime, ActivityLastModifiedDateTime: ActivityLastModifiedDateTime, StartMile: StartMile, StartMileDescription: StartMileDescription, EndMile: EndMile, EndMileDescription: EndMileDescription, Description: Description, DetourDescription: DetourDescription});
	updateInsert_data: function(dataValues) {
	 	//RoadActivity.update({_id: dataValues[0], Category: dataValues[1], Status: dataValues[2], Direction: dataValues[3], Road: dataValues[4], CountyCode: dataValues[5], DistrictNumber: dataValues[6], Latitude: dataValues[7], Longitude: dataValues[8], ActivityStartDateTime: dataValues[9], ActivityEndDateTime: dataValues[10], ActivityCreationDateTime: dataValues[11], ActivityLastModifiedDateTime: dataValues[12], StartMile: dataValues[13], StartMileDescription: dataValues[14], EndMile: dataValues[15], EndMileDescription: dataValues[16], Description: dataValues[17], DetourDescription: dataValues[18]});
	 	var strSplit;
	 	var activityStartTime;
	 	var activityEndTime;
	 	for (var i=9; i<=10; i++)
	 	{
	 		if (i==9) //Save date in ISO format for filtering
		 		isoDate_start = new Date(dataValues[i]);
		 	else
		 		isoDate_end = new Date(dataValues[i]);
		 	strSplit = dataValues[i].split(" "); //ActivityStartDateTime
		 	dataValues[i] = strSplit[0]; //ActivityStartDateTime becomes ActivityStartDate
		 	if (strSplit[2] == "PM")
		 	{
		 		var strSplitToColon = strSplit[1].split(":");
		 		var strToNumber_Hr = Number(strSplitToColon[0]) + 12;
		 		strSplit[1] = strToNumber_Hr.toString() + ":" + strSplitToColon[1] + ":" + strSplitToColon[2];
		 	}
		 	if (i==9)
		 		activityStartTime = strSplit[1];
		 	else
		 		activityEndTime = strSplit[1];
		}

		var count = RoadActivity.find({_id: dataValues[0]}).count();
	 	if (count == 0)
	 	{
	 		RoadActivity.insert({_id: dataValues[0], Category: dataValues[1], Status: dataValues[2], Direction: dataValues[3], Road: dataValues[4], CountyCode: dataValues[5], DistrictNumber: dataValues[6], Latitude: dataValues[7], Longitude: dataValues[8], ActivityStartDate: dataValues[9], ActivityEndDate: dataValues[10], ActivityStartTime: activityStartTime, ActivityEndTime: activityEndTime, ActivityCreationDateTime: dataValues[11], ActivityLastModifiedDateTime: dataValues[12], StartMile: dataValues[13], StartMileDescription: dataValues[14], EndMile: dataValues[15], EndMileDescription: dataValues[16], Description: dataValues[17], DetourDescription: dataValues[18], ISODateStart: isoDate_start, ISODateEnd: isoDate_end});
	 	}
	 	else
	 	{
	 		RoadActivity.update({_id: dataValues[0]}, {$set: {Category: dataValues[1], Status: dataValues[2], Direction: dataValues[3], Road: dataValues[4], CountyCode: dataValues[5], DistrictNumber: dataValues[6], Latitude: dataValues[7], Longitude: dataValues[8], ActivityStartDate: dataValues[9], ActivityEndDate: dataValues[10], ActivityStartTime: activityStartTime, ActivityEndTime: activityEndTime, ActivityCreationDateTime: dataValues[11], ActivityLastModifiedDateTime: dataValues[12], StartMile: dataValues[13], StartMileDescription: dataValues[14], EndMile: dataValues[15], EndMileDescription: dataValues[16], Description: dataValues[17], DetourDescription: dataValues[18], ISODateStart: isoDate_start, ISODateEnd: isoDate_end}});
	 	}
	 	//console.log("insert_data of Road Activity successful");
	}
});