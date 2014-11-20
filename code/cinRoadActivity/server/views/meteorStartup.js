Meteor.startup(function () {
	var categories = ["Accident", "Roadwork - Planned", "Roadwork - Unplanned", "Flooding", "Snow/Ice", "Debris", "Disabled Vehicle", "Other"];
	var roads = ["US 6"," US 6A"," US 20"," US 20A"," US 20N"," US 20S"," US 21"," US 22"," US 23"," US 24"," US 25"," US 27"," US 30","US 30A","US 30J"," US 30N"," US 30S"," US 33","US 33J","US 33T"," US 35","US 35J"," US 36"," US 40"," US 42"," US 50"," US 50N"," US 50S"," US 52"," US 62","US 62A","US 62T"," US 68"," US 127"," US 223"," US 224"," US 250"," US 322"," US 422"," SR 2"," SR 3"," SR 4"," SR 5"," SR 7"," SR 8"," SR 9"," SR 10"," SR 11"," SR 12"," SR 13"," SR 14"," SR 15"," SR 16"," SR 17"," SR 18"," SR 19"," SR 21"," SR 25"," SR 26"," SR 28"," SR 29"," SR 31"," SR 32"," SR 34"," SR 37"," SR 38"," SR 39"," SR 41"," SR 43"," SR 44"," SR 45"," SR 46"," SR 47"," SR 48"," SR 49"," SR 51"," SR 53"," SR 54"," SR 55"," SR 56"," SR 57"," SR 58"," SR 59"," SR 60"," SR 61"," SR 63"," SR 64"," SR 65"," SR 66"," SR 67"," SR 72"," SR 73"," SR 78"," SR 79"," SR 81"," SR 82"," SR 83"," SR 84"," SR 85"," SR 86"," SR 87"," SR 88"," SR 89"," SR 91"," SR 93"," SR 94"," SR 95"," SR 96"," SR 97"," SR 98"," SR 99"," SR 100"," SR 101"," SR 103"," SR 104"," SR 105"," SR 107"," SR 108"," SR 109"," SR 110"," SR 111"," SR 113"," SR 114"," SR 115"," SR 116"," SR 117"," SR 118"," SR 119"," SR 120"," SR 121"," SR 122"," SR 123"," SR 124"," SR 125"," SR 126"," SR 128"," SR 129"," SR 130"," SR 131"," SR 132"," SR 133"," SR 134"," SR 135"," SR 136"," SR 137"," SR 138"," SR 139"," SR 140"," SR 141"," SR 142"," SR 143"," SR 144"," SR 145"," SR 146"," SR 147"," SR 148","SR 149"," SR 150"," SR 151"," SR 152"," SR 153"," SR 154"," SR 155"," SR 158"," SR 159"," SR 160"," SR 161"," SR 162"," SR 163"," SR 164"," SR 165"," SR 166"," SR 167"," SR 168"," SR 169"," SR 170"," SR 171"," SR 172"," SR 173"," SR 174"," SR 175"," SR 176"," SR 177"," SR 179"," SR 180"," SR 181"," SR 183"," SR 184"," SR 185"," SR 186"," SR 187"," SR 188"," SR 189"," SR 190"," SR 191"," SR 193"," SR 195"," SR 196"," SR 197"," SR 198"," SR 199"," SR 201"," SR 202"," SR 203"," SR 204"," SR 205"," SR 206"," SR 207"," SR 208"," SR 209"," SR 211"," SR 212"," SR 213"," SR 215"," SR 216"," SR 217"," SR 218"," SR 219"," SR 220"," SR 221"," SR 222"," SR 225"," SR 226"," SR 228"," SR 229","SR 231"," SR 232"," SR 233","SR 235"," SR 236"," SR 237"," SR 238"," SR 239"," SR 241"," SR 243"," SR 245"," SR 246"," SR 247"," SR 248"," SR 249"," SR 251"," SR 252"," SR 253"," SR 254"," SR 255"," SR 256"," SR 257"," SR 258"," SR 259"," SR 260"," SR 261"," SR 264"," SR 265"," SR 266"," SR 267"," SR 269"," SR 273"," SR 274"," SR 276"," SR 278"," SR 279"," SR 281"," SR 282"," SR 283"," SR 284"," SR 285"," SR 286"," SR 287"," SR 288"," SR 289"," SR 291"," SR 292"," SR 293"," SR 294"," SR 295"," SR 296"," SR 297"," SR 300"," SR 301"," SR 302"," SR 303"," SR 304"," SR 305"," SR 306"," SR 307"," SR 308"," SR 309"," SR 310"," SR 312"," SR 313"," SR 314"," SR 315"," SR 316"," SR 317"," SR 319"," SR 320"," SR 321"," SR 323"," SR 324"," SR 325"," SR 327"," SR 328"," SR 329"," SR 330"," SR 331"," SR 332"," SR 334"," SR 335"," SR 339"," SR 340"," SR 342"," SR 343"," SR 344"," SR 345"," SR 347"," SR 348"," SR 349"," SR 350"," SR 353"," SR 356"," SR 357"," SR 358"," SR 360"," SR 361"," SR 362"," SR 363"," SR 364"," SR 365"," SR 366"," SR 368"," SR 369"," SR 370"," SR 371"," SR 372"," SR 373"," SR 374"," SR 376"," SR 377"," SR 378"," SR 379"," SR 380"," SR 383"," SR 385"," SR 412"," SR 416"," SR 420"," SR 421"," SR 423"," SR 430"," SR 435"," SR 444"," SR 446"," SR 450"," SR 500"," SR 501"," SR 502"," SR 503"," SR 505"," SR 506"," SR 507"," SR 508"," SR 510"," SR 511"," SR 513"," SR 514"," SR 515"," SR 516"," SR 517"," SR 518"," SR 519"," SR 520"," SR 521"," SR 522"," SR 523"," SR 524"," SR 527"," SR 528"," SR 529"," SR 530"," SR 531"," SR 532"," SR 534"," SR 535"," SR 536"," SR 537"," SR 539"," SR 540"," SR 541"," SR 542"," SR 545"," SR 546"," SR 547"," SR 550"," SR 551"," SR 552"," SR 553"," SR 554"," SR 555"," SR 556"," SR 557"," SR 558"," SR 559"," SR 560"," SR 561"," SR 562"," SR 564"," SR 565","SR 566"," SR 568"," SR 571"," SR 574","SR 575"," SR 576"," SR 579"," SR 582"," SR 585"," SR 586"," SR 587"," SR 588"," SR 589"," SR 590"," SR 595"," SR 598"," SR 600"," SR 601"," SR 602"," SR 603"," SR 604"," SR 605"," SR 606"," SR 607"," SR 608"," SR 609"," SR 611"," SR 613"," SR 615"," SR 616"," SR 617"," SR 618"," SR 619"," SR 621"," SR 625"," SR 626"," SR 627"," SR 630"," SR 633"," SR 634"," SR 635"," SR 637"," SR 638"," SR 640"," SR 643","SR 644"," SR 646"," SR 647"," SR 650"," SR 651"," SR 652"," SR 656"," SR 657"," SR 658"," SR 660"," SR 661"," SR 662"," SR 664"," SR 665"," SR 666"," SR 668"," SR 669"," SR 671"," SR 672"," SR 674"," SR 676"," SR 677"," SR 678"," SR 681"," SR 682"," SR 683"," SR 684"," SR 685"," SR 687"," SR 689"," SR 690"," SR 691"," SR 694"," SR 696"," SR 697"," SR 698"," SR 700"," SR 701"," SR 703"," SR 705"," SR 706"," SR 707"," SR 708"," SR 709"," SR 710"," SR 711"," SR 715"," SR 716"," SR 718"," SR 719"," SR 720"," SR 721"," SR 722"," SR 723"," SR 724"," SR 725"," SR 726"," SR 727"," SR 728"," SR 729"," SR 730"," SR 732"," SR 733"," SR 734"," SR 735"," SR 736"," SR 739"," SR 741"," SR 743"," SR 744"," SR 745"," SR 746"," SR 747"," SR 748"," SR 749"," SR 750"," SR 751","SR 752","SR 753"," SR 754"," SR 756"," SR 757"," SR 761"," SR 762"," SR 763"," SR 764"," SR 767"," SR 768"," SR 770"," SR 771"," SR 772"," SR 774"," SR 775"," SR 776"," SR 778"," SR 781"," SR 785"," SR 788"," SR 790"," SR 792"," SR 795"," SR 799"," SR 800"," SR 807"," SR 814"," SR 821"," SR 822"," SR 833"," SR 835"," SR 844"," SR 850"," SR 852"," SR 872","I‑270"," I‑271"," I‑275"," I‑277"," I‑280"," I‑470"," I‑471"," I‑475"," I‑480"," I‑490"," I‑670","I-675"," I‑680"];
	var allCats = Categories.find({}).count();
	var allRoads = Roads.find({}).count();
	if (allCats == 0)
	{
		for (var i=0; i<categories.length; i++)
			Categories.insert({type: categories[i]});
	}
	if (allRoads == 0)
	{
		for (var i=0; i<roads.length; i++)
			Roads.insert({name: roads[i]});
	}

	//Import BuckeyeTraffic data automatically
	Fiber = Npm.require('fibers');
			 setInterval( function ()
			  { Fiber(function()
			   {
			   		Meteor.call("importData", function(error, result){
			        if (error)
			          console.log("System Import Data - error in importData: " + error);
			        else
			          console.log("System Import Data - importData complete");
      			});
			   }).run();
				}, 300000 ); // 300000 = 5mins

	//Check if there is an issue on Roads Travelled per User
	setInterval( function ()
		{ Fiber(function()
			{
				Meteor.call("checkRoadActivityToSeeIfNewAlertIsNeeded");
				console.log("checked Road Activity to see if New Alert is Needed");
			}).run();
		}, 420000 ); // 420000 for 7 min


	 setInterval( function ()
	  { Fiber(function()
	   {
	   		Meteor.call("sendEmailWithAnyNewAlerts");
	   		console.log("checked if email sending for alerts was needed");
	   }).run();
		}, 660000 ); // 660000 = 11min

	 setInterval( function ()
	  { Fiber(function()
	   {
	   		Meteor.call("removeOldAlertsBasedOnDate");
	   		console.log("checked to see if any alerts should be removed");
	   }).run();
		}, 780000 ); // 780000 = 13min


});

Meteor.methods({

	checkRoadActivityToSeeIfNewAlertIsNeeded: function()
	{
		var allUsers = Meteor.users.find().fetch();
		var userData;
		var todayDate = new Date();
		_.each(allUsers, function(userData)
		{
			var roadsTravelled = RoadsTravelled.find({userId: userData._id}).fetch();
			_.each(roadsTravelled, function(roadsTravelledData)
			{
				var ra = RoadActivity.find({
					Road: roadsTravelledData.road,
					startDateTime_ISO: {$lte: new Date()},
					endDateTime_ISO: {$gte: new Date()},
					$or: [{ startMile: { $gte: roadsTravelled.startMile }}, { startMile: -999 }],
					$or: [{ endMile: { $gte: roadsTravelled.endMile }}, { endMile: -999 }]
				}).fetch();

				_.each(ra, function(ra_data)
				{
					var entryExists = false;
					if (RoadsTravelledAlerts.find({userId: userData._id, RoadActivityId: ra_data._id}).count() > 0)
					{
						entryExists = true;
						var raa_iD = RoadsTravelledAlerts.findOne({userId: userData._id, RoadActivityId: ra_data._id})._id;
					}
					var monday = false; var tuesday = false; var wednesday = false; var thursday = false; var friday = false; var saturday = false; var sunday = false;
					var timeEndMinusStartDate = ra_data.endDateTime_ISO.getTime() - ra_data.startDateTime_ISO.getTime();
					if (timeEndMinusStartDate > 518400000) // this is 6 days, so anything over 6 days would be a week
					{
						monday=true;
						tuesday=true;
						wednesday=true;
						thursday=true;
						friday=true;
						saturday=true;
						sunday=true;
					}
					else
					{
						var startDayOfWeek = ra_data.startDateTime_ISO.getDay();
						var endDayOfWeek = ra_data.endDateTime_ISO.getDay();
						if (startDayOfWeek > endDayOfWeek)
							endDayOfWeek += 7;
						for (var i=startDayOfWeek; i<=endDayOfWeek; i++)
						{
							if (i==0 || i==7) {sunday=true;}
							if (i==1 || i==8) {monday=true;}
							if (i==2 || i==9) {tuesday=true;}
							if (i==3 || i==10) {wednesday=true;}
							if (i==4 || i==11) {thursday=true;}
							if (i==5 || i==12) {friday=true;}
							if (i==6 || i==13) {saturday=true;}
						}
					}
					var data = {
													userId: userData._id,
													RoadActivityId: ra_data._id,
													RoadsTravelledId: roadsTravelledData._id,
													monday: monday,
													tuesday: tuesday,
													wednesday: wednesday,
													thursday: thursday,
													friday: friday,
													saturday: saturday,
													sunday: sunday,
													notifiedUser: false,
													dateAdded: new Date(),
													dateUpdated: new Date()
											};
					if (entryExists)
						Meteor.call("update_roadsTravelledAlerts", data, raa_iD);
					else
						Meteor.call("insert_roadsTravelledAlerts", data);
					}
				)
			});
		});
	},

	sendEmailWithAnyNewAlerts: function()
	{
		var foundActivities = false;
 		var lines = "-----------------------------------------------------\n\n";
 		var emailBody = "Here are the new notifications for the roads you travel:\n" + lines + "\n";
 		var allUsers = Meteor.users.find().fetch();
		_.each(allUsers, function(userData)
		{
			foundActivities = false;
 			var raa = RoadsTravelledAlerts.find({userId: userData._id, notifiedUser: false}).fetch();
 			_.each(raa, function(raa_data)
 			{
 				foundActivities = true;
 				var activity = RoadActivity.findOne({_id: raa_data.RoadActivityId});
 				emailBody = emailBody +
 										"Road: " + activity.Road + "\n" +
 										"Category: " + activity.Category + "\n" +
 										"Activity Start Time: " + activity.startDateTime_ISO + "\n" +
 										"Activity End Time: " + activity.endDateTime_ISO + "\n" +
 										"Description: " + activity.Description + "\n" +
 										"Detour Description: " + activity.DetourDescription + "\n" +
 										lines;
 				Meteor.call("update_roadsTravelledAlerts_notifiedUser", raa_data._id);
 			});
 			if (foundActivities)
 			{
 				Email.send({
											to: 			userData.emails[0].addresss,
											from: 		"yourRoadAlerts@cincyRoadActivity.com",
											subject: 	"CincyRoadActivity Notification",
											text: 		emailBody
									});
 			}
 		});
	},

	removeOldAlertsBasedOnDate: function()
	{
		var allUsers = Meteor.users.find().fetch();
 		var today = new Date();
 		_.each(allUsers, function(userData)
 		{
 			var raa = RoadsTravelledAlerts.find({userId: userData._id}).fetch();
 			_.each(raa, function(raa_data)
 			{
 				var raa_instance = RoadActivity.findOne({_id: raa_data.RoadActivityId});
 				console.log("raa id: " + raa_data._id);
 				console.log("today, startDateTime_ISO, endDateTime_ISO: " + today + ", " + raa_instance.startDateTime_ISO + ", " + raa_instance.endDateTime_ISO);
 				if (today < raa_instance.startDateTime_ISO || today > raa_instance.endDateTime_ISO)
 					Meteor.call("delete_roadsTravelledAlerts", raa_data._id);
 			});
 		});
	},

	deleteAlertsAndCallCheckNewAlerts: function()
	{
		Meteor.call("RoadTravelledAlerts_DeleteAllForUser");
		Meteor.call("checkRoadActivityToSeeIfNewAlertIsNeeded");
	}

});



