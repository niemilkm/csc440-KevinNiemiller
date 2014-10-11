
Meteor.methods({

	importData: function() {
		// Create the return object
		console.log("import data by user start");
			
			// var xhttp = new XMLHttpRequest();
			// xhttp.open("GET","http://www.buckeyetraffic.org/services/RoadActivity.aspx",false);
   //    xhttp.setRequestHeader('User-Agent','XMLHTTP/1.0');
   //    //xhttp.setRequestHeader('Content-Type', 'application/xml');
   //    xhttp.send();
   //    xmlDoc = xhttp.responseXML;
   //    console.log(xmlDoc);

  //  	$req = new HTTP_Request2($_GET['http://www.buckeyetraffic.org/services/RoadActivity.aspx']);
		// $response = $req.send();
		// // Output the content-type header and use the content-type of the original file
		// header("Content-type: " . $response.getHeader("Content-type"));
		// // And provide the file body
		// console.log($response.getBody());

		// $_get( "http://www.buckeyetraffic.org/services/RoadActivity.aspx", function( data ) {
		//   console.log( "Data Loaded: " + data );
		// });

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
				for(var i=0; i<children.length; i++)
				{
					child = children[i];
					for (var j=0; j<19; j++)
					{
						dataValues[j] = child.get(dataKeywords[j]).text();
					}

					//console.log(dataValues[0]);

					Meteor.call("updateInsert_data", dataValues);
					
				}
				console.log("updateInsert_data complete")
				// var child = children[3];
				// var status = child.get("//Id");
				// console.log(child.text());

			}
			else
				console.log("error");
		});

		//var libxmljs = Meteor.npmRequire("libxmljs");
		// var libxmljsAPI = Meteor.npmRequire('libxmljs');
  //     var libxmljs = new libxmljsAPI({
  //         version: "0.12.0"
  //     });

    

		//var doc = libxmljs.parseXmlString(result);
		//console.log(doc);

    return true;

		}



});