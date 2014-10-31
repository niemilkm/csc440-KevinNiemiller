
Meteor.methods({

	importData: function() {

		var libxmljs = Meteor.npmRequire("libxmljs");
		HTTP.call("POST", "http://www.buckeyetraffic.org/services/RoadActivity.aspx", function(error, result) {
			if (!error) {

				var Id=""; var Category=""; var Status=""; var Direction=""; var Road=""; var CountyCode=""; var DistrictNumber=-1; var Latitude=-1.1; var Longitude=-1.1; var ActivityStartDateTime=""; var ActivityEndDateTime=""; var ActivityCreationDateTime=""; var ActivityLastModifiedDateTime=""; var StartMile=-1; var StartMileDescription = ""; var EndMile=-1; var EndMileDescription=""; var Description=""; var DetourDescription="";
				var dataKeywords = ["Id", "Category", "Status", "Direction", "Road", "CountyCode", "DistrictNumber", "Latitude", "Longitude", "ActivityStartDateTime", "ActivityEndDateTime", "ActivityCreationDateTime", "ActivityLastModifiedDateTime", "StartMile", "StartMileDescription", "EndMile", "EndMileDescription", "Description", "DetourDescription"];
      	var dataValues = [Id, Category, Status, Direction, Road, CountyCode, DistrictNumber, Latitude, Longitude, ActivityStartDateTime, ActivityEndDateTime, ActivityCreationDateTime, ActivityLastModifiedDateTime, StartMile, StartMileDescription, EndMile, EndMileDescription, Description, DetourDescription];

				var xmlDoc = libxmljs.parseXmlString(result.content, {nocdata: true});
				var children = xmlDoc.root().childNodes();
				var child = null;
				var identification = null;
				var strSplit = null;
				for(var i=0; i<children.length; i++)
				{
					child = children[i];
					for (var j=0; j<dataValues.length; j++)
					{
						dataValues[j] = child.get(dataKeywords[j]).text();
					}

					Meteor.call("updateInsert_data", dataValues);
					
				}
				console.log("updateInsert_data complete")

			}
			else
				console.log("error");
		});

    return true;

		}



});