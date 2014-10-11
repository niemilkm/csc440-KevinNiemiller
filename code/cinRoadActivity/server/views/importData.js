
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

		HTTP.call("POST", "http://www.buckeyetraffic.org/services/RoadActivity.aspx", function(error, result) {
			if (!error) {
				//console.log(result);
				var status = result.getElementsByTagName("Status");
				console.log(status);
			}
			else
				console.log("error");
		});

		var doc = libxml.parseXmlString(result);
		console.log(doc);

    return true;

		}



});