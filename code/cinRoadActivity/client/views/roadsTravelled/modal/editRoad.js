Template.editRoad.rendered = function()
  {

    var availableRoads = ["US 6"," US 6A"," US 20"," US 20A"," US 20N"," US 20S"," US 21"," US 22"," US 23"," US 24"," US 25"," US 27"," US 30","US 30A","US 30J"," US 30N"," US 30S"," US 33","US 33J","US 33T"," US 35","US 35J"," US 36"," US 40"," US 42"," US 50"," US 50N"," US 50S"," US 52"," US 62","US 62A","US 62T"," US 68"," US 127"," US 223"," US 224"," US 250"," US 322"," US 422"," SR 2"," SR 3"," SR 4"," SR 5"," SR 7"," SR 8"," SR 9"," SR 10"," SR 11"," SR 12"," SR 13"," SR 14"," SR 15"," SR 16"," SR 17"," SR 18"," SR 19"," SR 21"," SR 25"," SR 26"," SR 28"," SR 29"," SR 31"," SR 32"," SR 34"," SR 37"," SR 38"," SR 39"," SR 41"," SR 43"," SR 44"," SR 45"," SR 46"," SR 47"," SR 48"," SR 49"," SR 51"," SR 53"," SR 54"," SR 55"," SR 56"," SR 57"," SR 58"," SR 59"," SR 60"," SR 61"," SR 63"," SR 64"," SR 65"," SR 66"," SR 67"," SR 72"," SR 73"," SR 78"," SR 79"," SR 81"," SR 82"," SR 83"," SR 84"," SR 85"," SR 86"," SR 87"," SR 88"," SR 89"," SR 91"," SR 93"," SR 94"," SR 95"," SR 96"," SR 97"," SR 98"," SR 99"," SR 100"," SR 101"," SR 103"," SR 104"," SR 105"," SR 107"," SR 108"," SR 109"," SR 110"," SR 111"," SR 113"," SR 114"," SR 115"," SR 116"," SR 117"," SR 118"," SR 119"," SR 120"," SR 121"," SR 122"," SR 123"," SR 124"," SR 125"," SR 126"," SR 128"," SR 129"," SR 130"," SR 131"," SR 132"," SR 133"," SR 134"," SR 135"," SR 136"," SR 137"," SR 138"," SR 139"," SR 140"," SR 141"," SR 142"," SR 143"," SR 144"," SR 145"," SR 146"," SR 147"," SR 148","SR 149"," SR 150"," SR 151"," SR 152"," SR 153"," SR 154"," SR 155"," SR 158"," SR 159"," SR 160"," SR 161"," SR 162"," SR 163"," SR 164"," SR 165"," SR 166"," SR 167"," SR 168"," SR 169"," SR 170"," SR 171"," SR 172"," SR 173"," SR 174"," SR 175"," SR 176"," SR 177"," SR 179"," SR 180"," SR 181"," SR 183"," SR 184"," SR 185"," SR 186"," SR 187"," SR 188"," SR 189"," SR 190"," SR 191"," SR 193"," SR 195"," SR 196"," SR 197"," SR 198"," SR 199"," SR 201"," SR 202"," SR 203"," SR 204"," SR 205"," SR 206"," SR 207"," SR 208"," SR 209"," SR 211"," SR 212"," SR 213"," SR 215"," SR 216"," SR 217"," SR 218"," SR 219"," SR 220"," SR 221"," SR 222"," SR 225"," SR 226"," SR 228"," SR 229","SR 231"," SR 232"," SR 233","SR 235"," SR 236"," SR 237"," SR 238"," SR 239"," SR 241"," SR 243"," SR 245"," SR 246"," SR 247"," SR 248"," SR 249"," SR 251"," SR 252"," SR 253"," SR 254"," SR 255"," SR 256"," SR 257"," SR 258"," SR 259"," SR 260"," SR 261"," SR 264"," SR 265"," SR 266"," SR 267"," SR 269"," SR 273"," SR 274"," SR 276"," SR 278"," SR 279"," SR 281"," SR 282"," SR 283"," SR 284"," SR 285"," SR 286"," SR 287"," SR 288"," SR 289"," SR 291"," SR 292"," SR 293"," SR 294"," SR 295"," SR 296"," SR 297"," SR 300"," SR 301"," SR 302"," SR 303"," SR 304"," SR 305"," SR 306"," SR 307"," SR 308"," SR 309"," SR 310"," SR 312"," SR 313"," SR 314"," SR 315"," SR 316"," SR 317"," SR 319"," SR 320"," SR 321"," SR 323"," SR 324"," SR 325"," SR 327"," SR 328"," SR 329"," SR 330"," SR 331"," SR 332"," SR 334"," SR 335"," SR 339"," SR 340"," SR 342"," SR 343"," SR 344"," SR 345"," SR 347"," SR 348"," SR 349"," SR 350"," SR 353"," SR 356"," SR 357"," SR 358"," SR 360"," SR 361"," SR 362"," SR 363"," SR 364"," SR 365"," SR 366"," SR 368"," SR 369"," SR 370"," SR 371"," SR 372"," SR 373"," SR 374"," SR 376"," SR 377"," SR 378"," SR 379"," SR 380"," SR 383"," SR 385"," SR 412"," SR 416"," SR 420"," SR 421"," SR 423"," SR 430"," SR 435"," SR 444"," SR 446"," SR 450"," SR 500"," SR 501"," SR 502"," SR 503"," SR 505"," SR 506"," SR 507"," SR 508"," SR 510"," SR 511"," SR 513"," SR 514"," SR 515"," SR 516"," SR 517"," SR 518"," SR 519"," SR 520"," SR 521"," SR 522"," SR 523"," SR 524"," SR 527"," SR 528"," SR 529"," SR 530"," SR 531"," SR 532"," SR 534"," SR 535"," SR 536"," SR 537"," SR 539"," SR 540"," SR 541"," SR 542"," SR 545"," SR 546"," SR 547"," SR 550"," SR 551"," SR 552"," SR 553"," SR 554"," SR 555"," SR 556"," SR 557"," SR 558"," SR 559"," SR 560"," SR 561"," SR 562"," SR 564"," SR 565","SR 566"," SR 568"," SR 571"," SR 574","SR 575"," SR 576"," SR 579"," SR 582"," SR 585"," SR 586"," SR 587"," SR 588"," SR 589"," SR 590"," SR 595"," SR 598"," SR 600"," SR 601"," SR 602"," SR 603"," SR 604"," SR 605"," SR 606"," SR 607"," SR 608"," SR 609"," SR 611"," SR 613"," SR 615"," SR 616"," SR 617"," SR 618"," SR 619"," SR 621"," SR 625"," SR 626"," SR 627"," SR 630"," SR 633"," SR 634"," SR 635"," SR 637"," SR 638"," SR 640"," SR 643","SR 644"," SR 646"," SR 647"," SR 650"," SR 651"," SR 652"," SR 656"," SR 657"," SR 658"," SR 660"," SR 661"," SR 662"," SR 664"," SR 665"," SR 666"," SR 668"," SR 669"," SR 671"," SR 672"," SR 674"," SR 676"," SR 677"," SR 678"," SR 681"," SR 682"," SR 683"," SR 684"," SR 685"," SR 687"," SR 689"," SR 690"," SR 691"," SR 694"," SR 696"," SR 697"," SR 698"," SR 700"," SR 701"," SR 703"," SR 705"," SR 706"," SR 707"," SR 708"," SR 709"," SR 710"," SR 711"," SR 715"," SR 716"," SR 718"," SR 719"," SR 720"," SR 721"," SR 722"," SR 723"," SR 724"," SR 725"," SR 726"," SR 727"," SR 728"," SR 729"," SR 730"," SR 732"," SR 733"," SR 734"," SR 735"," SR 736"," SR 739"," SR 741"," SR 743"," SR 744"," SR 745"," SR 746"," SR 747"," SR 748"," SR 749"," SR 750"," SR 751","SR 752","SR 753"," SR 754"," SR 756"," SR 757"," SR 761"," SR 762"," SR 763"," SR 764"," SR 767"," SR 768"," SR 770"," SR 771"," SR 772"," SR 774"," SR 775"," SR 776"," SR 778"," SR 781"," SR 785"," SR 788"," SR 790"," SR 792"," SR 795"," SR 799"," SR 800"," SR 807"," SR 814"," SR 821"," SR 822"," SR 833"," SR 835"," SR 844"," SR 850"," SR 852"," SR 872","I‑270"," I‑271"," I‑275"," I‑277"," I‑280"," I‑470"," I‑471"," I‑475"," I‑480"," I‑490"," I‑670","I-675"," I‑680", "I-71", "I-75"];
    $( "#roadNameEdit" ).autocomplete({
      source: availableRoads
    });

  };


Template.editRoad.helpers(
{
	roadInfoE: function()
	{
		var roadId = Session.get("editRoadId");
		return RoadsTravelled.find({_id: roadId}).fetch()[0].road;
	},

	mondayE: function()
	{
		var roadId = Session.get("editRoadId");
		if (RoadsTravelled.find({_id: roadId}).fetch()[0].monday == "checked")
			return 'checked';
		return "";
	},

	tuesdayE: function()
	{
		var roadId = Session.get("editRoadId");
		if (RoadsTravelled.find({_id: roadId}).fetch()[0].tuesday == "checked")
			return 'checked';
		return "";
	},
	
	wednesdayE: function()
	{
		var roadId = Session.get("editRoadId");
		if (RoadsTravelled.find({_id: roadId}).fetch()[0].wednesday == "checked")
			return 'checked';
		return "";
	},

	thursdayE: function()
	{
		var roadId = Session.get("editRoadId");
		if (RoadsTravelled.find({_id: roadId}).fetch()[0].thursday == "checked")
			return 'checked';
		return "";
	},
	
	fridayE: function()
	{
		var roadId = Session.get("editRoadId");
		if (RoadsTravelled.find({_id: roadId}).fetch()[0].friday == "checked")
			return 'checked';
		return "";
	},
	
	saturdayE: function()
	{
		var roadId = Session.get("editRoadId");
		if (RoadsTravelled.find({_id: roadId}).fetch()[0].saturday == "checked")
			return 'checked';
		return "";
	},
	
	sundayE: function()
	{
		var roadId = Session.get("editRoadId");
		if (RoadsTravelled.find({_id: roadId}).fetch()[0].sunday == "checked")
			return 'checked';
		return "";
	},
	
	startMileE: function()
	{
		var roadId = Session.get("editRoadId");
		return RoadsTravelled.find({_id: roadId}).fetch()[0].startMile;
	},

	endMileE: function()
	{
		var roadId = Session.get("editRoadId");
		return RoadsTravelled.find({_id: roadId}).fetch()[0].endMile;
	},

	startHrE: function()
	{
		var roadId = Session.get("editRoadId");
		var startHr = RoadsTravelled.find({_id: roadId}).fetch()[0].startHr;
		$('.startTime_hrEdit').val(startHr);
		return startHr;
	},

	startMinE: function()
	{
		var roadId = Session.get("editRoadId");
		var startMin = RoadsTravelled.find({_id: roadId}).fetch()[0].startMin;
		$('.startTime_minEdit').val(startMin);
		return startMin;
	},

	startampmE: function()
	{
		var roadId = Session.get("editRoadId");
		var startampm = RoadsTravelled.find({_id: roadId}).fetch()[0].startampm;
		$('.startTime_ampmEdit').val(startampm);
		return startampm;
	},

	endHrE: function()
	{
		var roadId = Session.get("editRoadId");
		var endHr = RoadsTravelled.find({_id: roadId}).fetch()[0].endHr;
		$('.endTime_hrEdit').val(endHr);
		return endHr;
	},

	endMinE: function()
	{
		var roadId = Session.get("editRoadId");
		var endMin = RoadsTravelled.find({_id: roadId}).fetch()[0].endMin;
		$('.endTime_minEdit').val(endMin);
		return endMin;
	},

	endampmE: function()
	{
		var roadId = Session.get("editRoadId");
		var endampm = RoadsTravelled.find({_id: roadId}).fetch()[0].endampm;
		$('.endTime_ampmEdit').val(endampm);
		return endampm;
	},
	
});

Template.editRoad.events = 
{
	'click #editRoad_enter': function()
  {
		var roadId = Session.get("editRoadId");

    var road  			= $('#roadNameEdit').val().trim();
    var monday   		= $('#mondayEdit').prop('checked');
    var tuesday 		= $('#tuesdayEdit').prop('checked');
    var wednesday 	= $('#wednesdayEdit').prop('checked');
    var thursday 		= $('#thursdayEdit').prop('checked');
    var friday	 		= $('#fridayEdit').prop('checked');
    var saturday 		= $('#saturdayEdit').prop('checked');
    var sunday	 		= $('#sundayEdit').prop('checked');
    var startMile 	= $('#startMileEdit').val().trim();
    var endMile 		= $('#endMileEdit').val().trim();
    var startHr 		= $('.startTime_hrEdit').val();
    var startMin 		= $('.startTime_minEdit').val();
    var startampm 	= $('.startTime_ampmEdit').val();
    var endHr 			= $('.endTime_hrEdit').val();
    var endMin 			= $('.endTime_minEdit').val();
    var endampm		 	= $('.endTime_ampmEdit').val();

    var startTime_nonISO = "1970-01-01 " + startHr + ":" + startMin + ":00 " + startampm;
    var endTime_nonISO = "1970-01-01 " + endHr + ":" + endMin + ":00 " + endampm;

    var startTime_display = startHr + ":" + startMin + " " + startampm;
    var endTime_display = endHr + ":" + endMin + " " + endampm;

    var startTime = new Date(startTime_nonISO);
    var endTime = new Date(endTime_nonISO);

    var days = "";
    if (monday)
    {
    	monday = "checked";
    	days = days + "Monday";
    }
    if (tuesday)
    {
    	if (days.substr(days.length - 1) == 'y')
    		days = days + ", ";
    	tuesday = "checked";
    	days = days + "Tuesday";
    }
    if (wednesday)
    {
    	if (days.substr(days.length - 1) == 'y')
    		days = days + ", ";
    	wednesday = "checked";
    	days = days + "Wednesday";
    }
    if (thursday)
    {
    	if (days.substr(days.length - 1) == 'y')
    		days = days + ", ";
    	thursday = "checked";
    	days = days + "Thursday";
    }
    if (friday)
    {
    	if (days.substr(days.length - 1) == 'y')
    		days = days + ", ";
    	friday = "checked";
    	days = days + "Friday";
    }
    if (saturday)
    {
    	if (days.substr(days.length - 1) == 'y')
    		days = days + ", ";
    	saturday = "checked";
    	days = days + "Saturday";
    }
    if (sunday)
    {
    	if (days.substr(days.length - 1) == 'y')
    		days = days + ", ";
    	sunday = "checked";
    	days = days + "Sunday";
    }

    var roadDetails = {
    										road: road,
    										monday: monday,
    										tuesday: tuesday,
    										wednesday: wednesday,
    										thursday: thursday,
    										friday: friday,
    										saturday: saturday,
    										sunday: sunday,
    										startMile: startMile,
    										endMile: endMile,
    										startTime: startTime,
    										endTime: endTime,
    										startTime_display: startTime_display,
    										endTime_display: endTime_display,
    										days: days,
    										startHr: startHr,
    										startMin: startMin,
    										startampm: startampm,
    										endHr: endHr,
    										endMin: endMin,
    										endampm: endampm
    									};
 
    Meteor.call("update_roadData", roadDetails, roadId)
    $('#editRoad').modal('hide');
    Meteor.call("deleteAlertsAndCallCheckNewAlerts");
  },

  'click .editModalClose': function()
  {
  }
}