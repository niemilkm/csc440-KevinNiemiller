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

    'click #showGraph': function()
    {
      AnalyzeFilter.find({userId: Meteor.userId()}).forEach(function(myDoc)
      {
        showGraph(myDoc._id);
      });
      // while (analyzeFilter_cursor.hasNext())
      // {
      //   addGraph(analyzeFilter_cursor.next()._id);
      // }
    }
};

function dataGraph(docId)
{
  var labels = ['Accident','Roadwork - Planned', 'Roadwork - Unplanned', 'Flooding', 'Snow/Ice', 'Debris', 'Disabled Vehicle', 'Other'];
  var analyzeFilterDoc = AnalyzeFilter.findOne({_id: docId});
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
            color: analyzeFilterDoc.graphColorCode
        }
    ];

}

// function myData() {
//     console.log("in myData");
//     var series1 = [];
//     for(var i =1; i < 8; i ++) {
//         series1.push({
//             x: i, y: 100 / i
//         });
//     }

//     return [
//         {
//             key: "Series #1",
//             values: series1,
//             color: "#0000ff"
//         }
//     ];
// }

function showGraph(docId)
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
          .datum(dataGraph(docId))
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



