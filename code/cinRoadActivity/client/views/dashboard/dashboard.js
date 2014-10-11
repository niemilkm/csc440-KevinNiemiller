
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
    var filterEndDate = Session.get("filterEndDate");
    var filterCategory_bool = (filterCategory == undefined || filterCategory == null);
    var filterStartDate_bool = (filterStartDate == undefined || filterStartDate == null);
    var filterEndDate_bool = (filterEndDate == undefined || filterEndDate == null);

    if (filterCategory_bool && filterStartDate_bool && filterEndDate_bool)
      return RoadActivity.find({});
    else if (filterCategory == "all" && !filterStartDate_bool && !filterEndDate_bool)
    {
      return RoadActivity.find({Category: filterCategory});
    }
    else
    {
      return RoadActivity.find({Category: filterCategory});
    }
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
        onSelect: function(date) {
          Session.set("filterStartDate", date);
        }
      });
    },

    'click #endDatepicker': function(evt)
    {
      $( "#endDatepicker" ).datepicker({
        onSelect: function(date) {
          Session.set("filterEndDate", date);
        }
      });
    }

  };