
Template.dashboard.helpers(
{
  headers: function()
  {
    var header = ["Category", "Status", "Direction", "Road", "Start", "End", "Start Description", "End Description"];
    return header;
  },

  roadActivity: function()
  {
    var filterCategory = Session.get("filterCategory");
    var filterStartDate = Session.get("filterStartDate");
    var filterEndDate = Date(Session.get("filterEndDate"));
    var filterCategory_bool = (filterCategory == undefined || filterCategory == null);
    var filterStartDate_bool = (filterStartDate == undefined || filterStartDate == null);
    var filterEndDate_bool = (filterEndDate == undefined || filterEndDate == null);

    console.log("filterStartDate: " + filterStartDate);

    if ((filterCategory_bool || filterCategory == "all") && filterStartDate_bool && filterEndDate_bool)
      return RoadActivity.find({});
    else if (filterCategory == "all" && !filterStartDate_bool && !filterEndDate_bool)
    {
      return RoadActivity.find({Category: filterCategory});
    }
    else if (filterStartDate_bool || filterEndDate_bool)
    {
      if (filterCategory == "all" || filterCategory_bool)
        return RoadActivity.find({Category: filterCategory});
      else if (filterEndDate_bool)
      {
        console.log(filterStartDate);
        return RoadActivity.find({Category: filterCategory, ISODateStart: {$gte: filterStartDate}});
      }
      else if (filterStartDate_bool)
        return RoadActivity.find({Category: filterCategory, ISODateEnd: {$lt: filterEndDate}});
      else
        return RoadActivity.find({Category: filterCategory, ISODateStart: {$gte: filterStartDate}, ISODateEnd: {$lt: filterEndDate}});
    }
    else
      return RoadActivity.find({});
  },

  eachCategory: function()
  {
    return Categories.find({});
  }

});

Template.dashboard.events =
  {
    'click button.importData': function()
    {
      Session.set("filterCategory", "all");
      Meteor.call("importData", function(error, result){
        if (error)
          console.log("error in importData");
        else
          console.log("importData complete");
      });
      console.log("dashboardClick importData complete");
    },

    'click button.filterToday': function()
    {
      Session.set("filterCategory", "today");
    },

    'click button.allData': function()
    {
      Session.set("filterCategory", "all");
    },

    'change #categoryType': function(evt)
    {
      Session.set("filterCategory", evt.currentTarget.value);
      //console.log("category changed to: " + evt.currentTarget.value);
    },

    'click #startDatepicker': function(evt)
    {
      $( "#startDatepicker" ).datepicker({
        onSelect: function() {
          var startDate = $( "#startDatepicker" ).datepicker('getDate');
          console.log(startDate);
          Session.set("filterStartDate", startDate);
        }
      });
    },

    'click #endDatepicker': function(evt)
    {
      $( "#endDatepicker" ).datepicker({
        onSelect: function() {
          var endDate = $( "#endDatepicker" ).datepicker('getDate');
          Session.set("filterEndDate", endDate);
        }
      });
    }

  };