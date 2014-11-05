Template.analyze.rendered = function()
{
  Session.set("updateGraph", true);
}

Template.analyze.helpers(
  {
    filterInfo: function()
    {
      return AnalyzeFilter.find({userId: Meteor.userId()});
    },

    updateGraph: function()
    {
      console.log(Session.get("updateGraph"));
      if (Session.get("updateGraph"))
      {
        showGraph();
        Session.set("updateGraph", false);
      }
      return "";
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
      showGraph();
    },

};

function dataGraph()
{
  var labels = ['Accident','Roadwork - Planned', 'Roadwork - Unplanned', 'Flooding', 'Snow/Ice', 'Debris', 'Disabled Vehicle', 'Other'];
  var xyData = [];
  var count = 0;
  AnalyzeFilter.find({userId: Meteor.userId()}).forEach(function(myDoc)
  {
    var ydata = [
                0,
                myDoc.accidents,
                myDoc.roadworkPlanned,
                myDoc.roadworkUnplanned,
                myDoc.flooding,
                myDoc.snowIce,
                myDoc.debris,
                myDoc.disabledVehicle,
                myDoc.other
              ];
    var series1 = [];
    for(var i =1; i <= 8; i ++) {
        series1.push({
            x: i, y: ydata[i]
        });
    }

    var xyDataInstance =
                          {
                            key: myDoc.filterName,
                            values: series1,
                            color: myDoc.graphColorCode
                          }

    xyData[count] = xyDataInstance;

    count++;
                        
  });

    return xyData

}

function showGraph()
{
  var labelX = ['', 'Accident','Roadwork - Planned', 'Roadwork - Unplanned', 'Flooding', 'Snow/Ice', 'Debris', 'Disabled Vehicle', 'Other'];
  nv.addGraph(function() {
      var chart = nv.models.lineChart()
        .margin({left: 100}) 
        .useInteractiveGuideline(true)
        .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
        .showYAxis(true)        //Show the y-axis
        .showXAxis(true)        //Show the x-axis
        ;

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
          ;

      nv.utils.windowResize(
              function() {
                  chart.update();
              }
          );

      return chart;
    });
}



