
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
    var filterCategory_bool = !(filterCategory == undefined || filterCategory == null);
    var filterStartDate_bool = !(filterStartDate == undefined || filterStartDate == null);
    var filterEndDate_bool = !(filterEndDate == undefined || filterEndDate == null);

    console.log("filterCategory & filterStartDate & filterEndDate: " + filterCategory + " - " + filterStartDate + " - " + filterEndDate);
    console.log("cat_bool, startDate_bool, endDate_bool:  " + filterCategory_bool + ", " + filterStartDate_bool + ", " + filterEndDate_bool);
    console.log(filterStartDate instanceof Date);
    console.log(filterEndDate instanceof Date);

    if (filterCategory == "all" || !filterCategory_bool)
    {
      if (filterStartDate_bool && filterEndDate_bool)
      {
        return RoadActivity.find({ISODateStart: {$gte: filterStartDate}, ISODateEnd: {$lte: filterEndDate}});
      }
      else if (filterStartDate_bool && !filterEndDate_bool)
      {
        return RoadActivity.find({ISODateStart: {$gte: filterStartDate}});
      }
      else if (!filterStartDate_bool && filterEndDate_bool)
      {
        return RoadActivity.find({ISODateEnd: {$lte: filterEndDate}});
      }
      else
      {
        return RoadActivity.find({});
      }
    }
    else
    {
      if (filterStartDate_bool && filterEndDate_bool)
      {
        return RoadActivity.find({Category: filterCategory, ISODateStart: {$gte: filterStartDate}, ISODateEnd: {$lt: filterEndDate}});
      }
      else if (filterStartDate_bool && !filterEndDate_bool)
      {
        return RoadActivity.find({Category: filterCategory, ISODateStart: {$gte: filterStartDate}});
      }
      else if (!filterStartDate_bool && filterEndDate_bool)
      {
        return RoadActivity.find({Category: filterCategory, ISODateEnd: {$lt: filterEndDate}});
      }
      else
      {
        return RoadActivity.find({Category: filterCategory});
      }
    }

  },

  eachCategory: function()
  {
    return Categories.find({});
  },

  startDate: function()
  {
    var filterStartDate = Session.get("filterStartDate");
    if (filterStartDate == null || filterStartDate == undefined)
    {
      return "Enter Start Date";
    }
    else
    {
      month = filterStartDate.getMonth() + 1;
      return month + "/" + filterStartDate.getDate() + "/" + filterStartDate.getFullYear();
    }
  },

  endDate: function()
  {
    var filterEndDate = Session.get("filterEndDate");
    if (filterEndDate == null || filterEndDate == undefined)
    {
      return "Enter End Date";
    }
    else
    {
      return filterEndDate.getMonth() + "/" + filterEndDate.getDate() + "/" + filterEndDate.getFullYear();
    }
  }

});

Template.dashboard.events =
  {
    'click button.importData': function()
    {
      Session.set("filterCategory", "all");
      Meteor.call("importData", function(error, result){
        if (error)
          console.log("error in importData: " + error);
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
    },

    'click #startDatepicker': function(evt)
    {
      $( "#startDatepicker" ).datepicker({
        onSelect: function() {
          var startDate = $( "#startDatepicker" ).datepicker('getDate');
          console.log(startDate);
          Session.set("filterStartDate", startDate);
        },
        showButtonPanel: true,
        onClose: function(e) {
          var ev = window.event;
          if (ev.srcElement.innerHTML == 'Clear')
          {
            this.value = ""; 
            Session.set("filterStartDate", null);
          }
        },
         closeText: 'Clear',
         buttonText: ''
      });
    },

    'click #endDatepicker': function(evt)
    {
      $( "#endDatepicker" ).datepicker({
        onSelect: function() {
          var endDate = $( "#endDatepicker" ).datepicker('getDate');
          Session.set("filterEndDate", endDate);
          console.log(endDate);
        },
        showButtonPanel: true,
        onClose: function(e) {
          var ev = window.event;
          if (ev.srcElement.innerHTML == 'Clear')
          {
            this.value = ""; 
            Session.set("filterEndDate", undefined);
          }
        },
         closeText: 'Clear',
         buttonText: ''
      });
    }

  };