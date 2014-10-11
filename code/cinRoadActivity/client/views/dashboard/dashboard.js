
Template.dashboard.helpers(
{
  headers: function()
  {
    var header = ["Category", "Status", "Direction", "Road", "Start", "End", "Start Description", "End Description"];
    return header;
  },

  roadActivity: function()
  {
    if (Session.get("filter") == "all" || Session.get("filter") == undefined || Session.get("filter") == null)
      return RoadActivity.find({});
    else
    {
      return RoadActivity.find({ActivityStartDateTime: "9/27/2014 5:00:00 AM"});
    }
  }
});

Template.dashboard.events =
  {
    'click button.importData': function()
    {
      Session.set("filter", "all");
      // if (window.XMLHttpRequest)
      // {
      //   xhttp=new XMLHttpRequest();
      // }
      // else // code for IE5 and IE6
      // {
      //   xhttp=new ActiveXObject("Microsoft.XMLHTTP");
      // }
      // xhttp.open("GET","http://www.buckeyetraffic.org/services/RoadActivity.aspx",false);
      // //xhttp.open("GET","http://localhost:3000/roadActivity_29SEP14.xml",false);
      // //xhttp.open("GET","http://cinRoadActivity.meteor.com/roadActivityPartial.xml",false);
      // //xhttp.open("GET","http://ec2-54-68-187-59.us-west-2.compute.amazonaws.com/roadActivity_29SEP14.xml",false);
      // xhttp.setRequestHeader('User-Agent','XMLHTTP/1.0');
      // //xhttp.setRequestHeader('Content-Type', 'application/xml');
      // xhttp.send();
      // xmlDoc = xhttp.responseXML;
      // var Id=""; var Category=""; var Status=""; var Direction=""; var Road=""; var CountyCode=""; var DistrictNumber=-1; var Latitude=-1.1; var Longitude=-1.1; var ActivityStartDateTime=""; var ActivityEndDateTime=""; var ActivityCreationDateTime=""; var ActivityLastModifiedDateTime=""; var StartMile=-1; var StartMileDescription = ""; var EndMile=-1; var EndMileDescription=""; var Description=""; var DetourDescription="";
      // var dataKeywords = ["Id", "Category", "Status", "Direction", "Road", "CountyCode", "DistrictNumber", "Latitude", "Longitude", "ActivityStartDateTime", "ActivityEndDateTime", "ActivityCreationDateTime", "ActivityLastModifiedDateTime", "StartMile", "StartMileDescription", "EndMile", "EndMileDescription", "Description", "DetourDescription"];
      // var dataValuesArray = [Id, Category, Status, Direction, Road, CountyCode, DistrictNumber, Latitude, Longitude, ActivityStartDateTime, ActivityEndDateTime, ActivityCreationDateTime, ActivityLastModifiedDateTime, StartMile, StartMileDescription, EndMile, EndMileDescription, Description, DetourDescription];
      // var dataValues = [Id, Category, Status, Direction, Road, CountyCode, DistrictNumber, Latitude, Longitude, ActivityStartDateTime, ActivityEndDateTime, ActivityCreationDateTime, ActivityLastModifiedDateTime, StartMile, StartMileDescription, EndMile, EndMileDescription, Description, DetourDescription];
      // var roadActivity= xmlDoc.getElementsByTagName("RoadActivity");
      // for (var j = 0; j < 18; j++) //still need to add contact info
      // {
      //   dataValuesArray[j] = xmlDoc.getElementsByTagName(dataKeywords[j]);
      // }
      // for ( var i = 0; i < roadActivity.length; i++ ) // Each Road Activity
      // {
      //   dataValues[0] = dataValuesArray[0][i].childNodes[0].nodeValue;
      //   var count = RoadActivity.find({_id: dataValues[0]}).count();
      //   if (count == 0)
      //   {
      //     for (var k = 1; k < 18; k++) // Each item (Id, Category, Status, etc.) of each Road Activity
      //     {
      //       if (dataValuesArray[k][i].childNodes[0] != undefined)
      //       {
      //         dataValues[k] = dataValuesArray[k][i].childNodes[0].nodeValue;
      //       }
      //     }
      //     Meteor.call("insert_data", dataValues);
      //   }
      // }

      //Where new code starts
      Meteor.call("importData", function(error, result){
        if (error)
          console.log("error in importData");
        else
          console.log("importData complete");
      });
      //where new code ends
      console.log("dashboardClick importData complete");
    },

    'click button.filterToday': function()
    {
      Session.set("filter", "today");
    },

    'click button.allData': function()
    {
      Session.set("filter", "all");
    }
  };