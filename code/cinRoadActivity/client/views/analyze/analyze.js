Template.analyze.rendered = function()
{
}

Template.analyze.helpers(
  {
    filterInfo: function()
    {
      return AnalyzeFilter.find({userId: Meteor.userId()});
    }
  });

  Template.analyze.events =
  {

    'click .openEditFilterModal': function()
    {
      Session.set("editFilterId", this._id);
      $(' #editFilter ').modal('show');
    },

    'click .deleteFilter': function()
    {
      Meteor.call("delete_filterData", this._id);
    },

    'click #addGraph': function()
    {
      addGraph();
    }
};

function dataGraph()
{
  var labels = ['Accident','Roadwork - Planned', 'Roadwork - Unplanned', 'Flooding', 'Snow/Ice', 'Debris', 'Disabled Vehicle', 'Other'];
  var analyzeFilterDoc = AnalyzeFilter.findOne({_id: "8m5mFPdcDhkzpDkLa"}); //CHANGE THIS
  var ydata = [
                0,
                analyzeFilterDoc.accidents,
                analyzeFilterDoc.roadworkPlanned,
                analyzeFilterDoc.roadworkUnplanned,
                analyzeFilterDoc.flooding,
                analyzeFilterDoc.snowIce,
                analyzeFilterDoc.debris,
                analyzeFilterDoc.disabledVehicle,
                analyzeFilterDoc.other
              ];
  
  var series1 = [];
    for(var i =1; i <= 8; i ++) {
        series1.push({
            x: i, y: ydata[i]
        });
    }

    return [
        {
            key: analyzeFilterDoc.filterName,
            values: series1,
            color: "#0000ff"
        }
    ];

}

function myData() {
    console.log("in myData");
    var series1 = [];
    for(var i =1; i < 8; i ++) {
        series1.push({
            x: i, y: 100 / i
        });
    }

    return [
        {
            key: "Series #1",
            values: series1,
            color: "#0000ff"
        }
    ];
}

function addGraph()
{
  var labelX = ['dd ', 'Accident','Roadwork - Planned', 'Roadwork - Unplanned', 'Flooding', 'Snow/Ice', 'Debris', 'Disabled Vehicle', 'Other'];
  nv.addGraph(function() {
    console.log("in addGraph nv");
      var chart = nv.models.lineChart();

      chart.xAxis
          .axisLabel("Category")
          .tickFormat(function(d) { return labelX[d]; });
          ;

      chart.yAxis
          .axisLabel("Number of Events")
          .tickFormat(d3.format("d"))
          ;

      d3.select("svg")
          .datum(dataGraph())
          .transition().duration(500).call(chart)
          .style({'height': 999000});

      nv.utils.windowResize(
              function() {
                  chart.update();
              }
          );

      return chart;
    });
}



