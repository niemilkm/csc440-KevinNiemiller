RoadActivity = new Meteor.Collection('roadActivity');

Meteor.methods({
	// insert_data: function(Id, Category, Status, Direction, Road, CountyCode, DistrictNumber, Latitude, Longitude, ActivityStartDateTime, ActivityEndDateTime, ActivityCreationDateTime, ActivityLastModifiedDateTime, StartMile, StartMileDescription, EndMile, EndMileDescription, Description, DetourDescription) {
	// 	RoadActivity.insert({_id: Id, Category: Category, Status: Status, Direction: Direction, Road: Road, CountyCode: CountyCode, DistrictNumber: DistrictNumber, Latitude: Latitude, Longitude: Longitude, ActivityStartDateTime: ActivityStartDateTime, ActivityEndDateTime: ActivityEndDateTime, ActivityCreationDateTime: ActivityCreationDateTime, ActivityLastModifiedDateTime: ActivityLastModifiedDateTime, StartMile: StartMile, StartMileDescription: StartMileDescription, EndMile: EndMile, EndMileDescription: EndMileDescription, Description: Description, DetourDescription: DetourDescription});
	insert_data: function(dataValues) {
	 	RoadActivity.insert({_id: dataValues[0], Category: dataValues[1], Status: dataValues[2], Direction: dataValues[3], Road: dataValues[4], CountyCode: dataValues[5], DistrictNumber: dataValues[6], Latitude: dataValues[7], Longitude: dataValues[8], ActivityStartDateTime: dataValues[9], ActivityEndDateTime: dataValues[10], ActivityCreationDateTime: dataValues[11], ActivityLastModifiedDateTime: dataValues[12], StartMile: dataValues[13], StartMileDescription: dataValues[14], EndMile: dataValues[15], EndMileDescription: dataValues[16], Description: dataValues[17], DetourDescription: dataValues[18]});
	 	console.log("insert_data of Road Activity successful");
	}
});