
Meteor.methods({

	importData: function() {
		// Create the return object
			console.log("import data by user start");
			// var DOMParser = require('xmldom').DOMParser;
			// var parser = new DOMParser();
			//xmlHttp = http.XMLHttpRequest()
			

			// var data = xmlDoc.getElementsByTagName("CountyCode")[0].childNodes[0].nodeValue; //[0].childNodes[0].nodeValue;  
   //    console.log(data);





			xmlDoc = Meteor.http.call("GET", "http://www.buckeyetraffic.org/services/RoadActivity.aspx");
			console.log(xmlDoc);
			// if (window.DOMParser)
		 //  {
		 //    parser=new DOMParser();
		 //    xmlDoc=parser.parseFromString(xml,"text/xml");
		 //  }
			// else // Internet Explorer
		 //  {
		 //    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		 //    xmlDoc.async=false;
		 //    xmlDoc.loadXML(txt);
		 //  }

		 //  var data = xmlDoc.getElementsByTagName("Status")[0].childNodes[0].nodeValue;	
		 //  console.log(data);



      // xhttp=new XMLHttpRequest();
      // xhttp.open("GET","http://localhost:3000/roadActivityPartial.xml",false);
      // xhttp.send();
      // xml = xmlDoc.responseXML;

      // console.log(xml);

      // var data = xmlDoc.getElementsByTagName("CountyCode")[0].childNodes[0].nodeValue; //[0].childNodes[0].nodeValue;  
      // console.log(data);





// 		 var data = xmlDoc.getElementsByTagName("CountyCode")[0].childNodes[0].nodeValue;
// 		 console.log(data);

// //working start
// 			var builder = new xml2js.Builder();
// 			var json = builder.buildObject(xml);
			
// 			var extractedData = "";
// 			var parser = new xml2js.Parser();
// 			parser.parseString(json, function(err,result){

// 			});



			// var id = "a40f6cca7d444199a40bd065e41f66b";
			// Meteor.call("insert_xml", json, id);

// workign end



//console.log("xml:====> " + xml);
//console.log("JSON ======> " + JSON.stringify(json));
//Extract the value from the data element
			  //extractedData = result['data'];
			  //console.log("result ==> " + result);
			 //  var id = "3b40f6cca7d444199a40bd065e41f66b";
				// Meteor.call("insert_xml", result, id);
			
			 //console.log(xmlDoc);
			 //var xml = .parseXML(xmlDoc);
			 //xml = xmlHttp.responseXML.documentElement;
			 //console.log(xml);

			 //var json = xml2js.parseXML(xml);
			//  var XML2JS = Meteor.require('xml2js');
			//  var xml2js = new XML2JS();
			 //var json = xml2js.parseString(xml);

			
			//console.log(json);
			//console.log("==> " + JSON.stringify(json));
			// console.log("_________");
			// var xml = parser.parseFromString(xmlHttp, "text/xml");
			
			//var obj = xml2js.parseFromString(xml);
			//console.log(obj);

			//var xml=loadXMLDoc(xmlDoc);

			//var x2js = new X2JS();

			
			//xmlHttp.send();
			// xmlHttp = new window.XMLHttpRequest();
   //    xmlHttp.open("GET", "roadActivityPartial.xml", false);
   //    xmlHttp.send(null);
      //xml = xmlHttp.responseXML.documentElement;
      //console.log(xml);

			//debugger;

			// var obj = {};

			// if (xml.nodeType == 1) { // element
			// 	// do attributes
			// 	console.log("do attributes");
			// 	if (xml.attributes.length > 0) {
			// 	obj["@attributes"] = {};
			// 		for (var j = 0; j < xml.attributes.length; j++) {
			// 			var attribute = xml.attributes.item(j);
			// 			obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			// 		}
			// 	}
			// } else if (xml.nodeType == 3) { // text
			// 	obj = xml.nodeValue;
			// }

			// console.log("importData server - before doing children");
			// //do children
			// if (xml.hasChildNodes()) {
			// 	for(var i = 0; i < xml.childNodes.length; i++) {
			// 		var item = xml.childNodes.item(i);
			// 		var nodeName = item.nodeName;
			// 		if (typeof(obj[nodeName]) == "undefined") {
			// 			obj[nodeName] = xmlToJson(item);
			// 		} else {
			// 			if (typeof(obj[nodeName].push) == "undefined") {
			// 				var old = obj[nodeName];
			// 				obj[nodeName] = [];
			// 				obj[nodeName].push(old);
			// 			}
			// 			obj[nodeName].push(xmlToJson(item));
			// 		}
			// 	}
			// }
			// console.log("import data by user end");
			// obj = JSON.parse(obj);
			// Fiber(function () {

		 //    _.each(data, function (document) {
		 //      RoadActivity.insert(document);
		 //    });

  	// 	}).run();
			// console.log(obj);
			// return obj;
		}



});