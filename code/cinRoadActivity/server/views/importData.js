
Meteor.methods({

	importData: function(xml) {
		// Create the return object
			console.log("import data by user start");
			// var parser = new DOMParser();
			// var xml = parser.parseFromString(xmlString, "text/xml");
			// var obj = xmlToJson(xml);

			//var xml=loadXMLDoc(xmlDoc);

			//var x2js = new X2JS();

			


			//debugger;

			var obj = {};

			if (xml.nodeType == 1) { // element
				// do attributes
				if (xml.attributes.length > 0) {
				obj["@attributes"] = {};
					for (var j = 0; j < xml.attributes.length; j++) {
						var attribute = xml.attributes.item(j);
						obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
					}
				}
			} else if (xml.nodeType == 3) { // text
				obj = xml.nodeValue;
			}

			console.log("importData server - before doing children");
			// do children
			if (xml.hasChildNodes()) {
				for(var i = 0; i < xml.childNodes.length; i++) {
					var item = xml.childNodes.item(i);
					var nodeName = item.nodeName;
					if (typeof(obj[nodeName]) == "undefined") {
						obj[nodeName] = xmlToJson(item);
					} else {
						if (typeof(obj[nodeName].push) == "undefined") {
							var old = obj[nodeName];
							obj[nodeName] = [];
							obj[nodeName].push(old);
						}
						obj[nodeName].push(xmlToJson(item));
					}
				}
			}
			console.log("import data by user end");
			obj = JSON.parse(obj);
			// Fiber(function () {

		 //    _.each(data, function (document) {
		 //      RoadActivity.insert(document);
		 //    });

  	// 	}).run();
			return obj;
		}



});